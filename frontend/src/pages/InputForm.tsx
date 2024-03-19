import React, { useState } from 'react';
import Button from '../components/Button';
import BendSidebar from '../components/BendSidebar';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { MenuItem, Select, TextField } from '@mui/material';
import { Divider } from '@mui/material';
import StepWrapper from '../components/StepWrapper';
import { Link } from 'react-router-dom';
import { MaterialEnum, MeasurementUnit } from '../enums';
import { FormValues } from '../types';

function InputForm() {
  const [pageNumber, setPageNumber] = useState(0);

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    formState: { errors, isValid }
  } = useForm<FormValues>({ mode: 'all', defaultValues: { bendCount: 1 } },)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  const resetToFirstPage = () => {
    setPageNumber(0);
  };

  const incrementPage = () => {
    if (pageNumber < pages.length + (getValues("bendCount") || 0)) {
      setPageNumber(pageNumber + 1);
      trigger()
    }
  }

  const decrementPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
      trigger()
    }
  }

  const customInputStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', 
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', 
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', 
    },
  };

  const nextButtonStyle = {
    backgroundColor: '#2D3142', 
    color: 'white',
    borderRadius: 'px', 
  };

  const pages = [
    <StepWrapper title='What material is the tube?'>
      <Controller
        control={control}
        name="material"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <>
            <Select
              {...field}
              error={errors.material !== undefined}
              placeholder='Select Material'
              fullWidth
              style={customInputStyle}
            >
              <MenuItem value={MaterialEnum.nickel}>Nickel</MenuItem>
              <MenuItem value={MaterialEnum.brass}>Brass</MenuItem>
              <MenuItem value={MaterialEnum.copper}>Copper</MenuItem>
            </Select>
            <img src="/images/progress1.png" style={{ marginTop: '50px', width: '17%' }} />
          </>
        )}
      />
    </StepWrapper>,
    <StepWrapper title='What length is the tube?'>
    <div className='flex flex-row gap-4 w-full'>
      <div className='w-3/5'>
        <Controller
          key='length-value'
          control={control}
          name="length.value"
          rules={{
            required: true,
            min: 0,
          }}
          render={({ field }) => (
            <TextField placeholder="Length"
              key='length-value'
              type='number'
              {...field}
              error={errors.length?.value !== undefined}
              label={errors.length?.value ? 'Please enter a positive number' : ''}
              onChange={(event) => field.onChange(+event.target.value)}
              fullWidth
              variant='outlined'
              style={customInputStyle}
            ></TextField>
          )}
        />
      </div>
      <div className='w-2/5'>
        <Controller
          key='length-unit'
          control={control}
          name="length.unit"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Select
              key='length-unit'
              {...field}
              error={errors.length?.unit !== undefined}
              label={errors.length?.unit ? 'Please select a valid option' : ''}
              fullWidth
              style={customInputStyle}
            >
              <MenuItem value={MeasurementUnit.inches}>Inches</MenuItem>
              <MenuItem value={MeasurementUnit.millimeters}>Millimeters</MenuItem>
            </Select>
          )}
        />
      </div>
    </div>
    <img src="/images/progress2.png" style={{ marginTop: '50px', width: '17%' }} />
  </StepWrapper>,  
  <StepWrapper title='How many bends does the tube have?'>
    <div style={{ width: '100%'}}></div>
  <Controller
    key='bend-count'
    control={control}
    name="bendCount"
    rules={{
      required: true,
      min: 1,
      validate: {
        integer: v => Number.isInteger(v),
      }
    }}
    render={({ field }) => (
      <TextField 
        placeholder="Bends"
        key='bend-count'
        type='number'
        error={errors.bendCount !== undefined}
        label={errors.bendCount ? 'Please enter a positive integer' : ''}
        {...field}
        onChange={(event) => field.onChange(+event.target.value)}
  
        InputProps={{
          style: {
            backgroundColor: 'white',
            borderRadius: '16px', 
          },
        }}
        style={customInputStyle}
      />
    )}
  />
  <img src="/images/progress3.png" style={{ marginTop: '50px', width: '17%' }} />
</StepWrapper>,
  ]

  const deleteBend = () => {
    const bendIndex = pageNumber - pages.length

    const bends = getValues('bends')

    bends.splice(bendIndex, 1)

    setValue('bends', bends)
    setValue('bendCount', getValues('bendCount') - 1)

    decrementPage()
  }

  const bendConfig = () => {
    const bendIndex = pageNumber - pages.length;
    const bendCount = getValues('bendCount');

    enum BendFields {
      radius = 'radius',
      arcLength = 'arcLength',
      extrusion = 'extrusion',
      straightTube = 'straightTube',
    }

    const onSelectBend = (index: number) => {
      setPageNumber(pages.length + index);
    };
    
    const onAddBend = () => {
      setValue('bendCount', getValues('bendCount') + 1);
    };

    const fields: { key: BendFields, label: string }[] = [
      { key: BendFields.radius, label: 'Bend Radius' },
      { key: BendFields.arcLength, label: 'Arc Length' },
      { key: BendFields.extrusion, label: 'Extrusion Length' },
      { key: BendFields.straightTube, label: 'Straight Tube' },
    ]

    return (
      <div className="flex justify-between items-start">
      <div className="sidebar-container fixed top-40 left-20 p-4"> 
        <BendSidebar
          currentBendIndex={pageNumber - pages.length}
          bendCount={getValues('bendCount')}
          onSelectBend={(index) => setPageNumber(pages.length + index)}
          onAddBend={() => {
            const newBendCount = getValues('bendCount') + 1;
            setValue('bendCount', newBendCount);
            setPageNumber(pages.length + newBendCount - 1); // Navigate to the new bend
          }}
        />
        </div>
        <div className="flex justify-center pt-16 pl-10">
          <StepWrapper title={`Bend #${bendIndex + 1}`}>
      <div className=' flex flex-col gap-4'>

        {fields.map(value =>
          <div>
            <Divider sx={{ opacity: 0.6 }} />
            <div className=' pt-4 flex flex-row w-96 justify-between items-center '>
              <h3 className=' text-brand-blue-dark text-xl font-semibold'>{value.label}</h3>
              <div className=' w-1/3'>
                <Controller
                  key={`bends-${bendIndex}-${value.key}`}
                  control={control}
                  name={`bends.${bendIndex}.${value.key}.value`}
                  rules={{
                    required: true,
                    min: 0
                  }}
                  render={({ field }) => (
                    <TextField placeholder={'0'}
                      key={`bends-${bendIndex}-${value.key}`}
                      fullWidth
                      type='number'
                      error={errors.bends?.[bendIndex]?.[value.key] !== undefined}
                      {...field}
                      onChange={(event) => field.onChange(+event.target.value)}
                      style={customInputStyle}
                    ></TextField>
                  )}
                /></div></div>
          </div>
        )}
      </div>
      <button onClick={deleteBend} className=' text-error-red'>X delete bend</button>
    </StepWrapper>
    </div>
      </div>
    );
                  }

  const pageManager = () => {
    if (pageNumber < pages.length) return pages[pageNumber]
    else if (pageNumber < pages.length + getValues('bendCount')) return bendConfig()
    else return <StepWrapper title='Download GCode'>
      <Button label='Download File' handleClick={() => console.log('button')}></Button>
      <Button label='Upload To Machine' handleClick={() => console.log('button')}></Button>
    </StepWrapper>
  }

  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-off-white p-4 flex justify-between items-center" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '70px', marginTop: '30px' }}>
          <img src="/images/graybox.png" alt="Gray Box" style={{ marginRight: '10px', width: '8%' }} />
          <Link to="/create" style={{ fontSize: '14px', textDecoration: 'none', color: 'inherit' }}>
            tubender
          </Link>
        </div>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className='w-full h-screen bg-off-white flex flex-col justify-center items-center pt-16'>
        {pageManager()}
        <div className={`pb-32 w-1/2 flex flex-row ${pageNumber !== 0 ? 'justify-between' : 'justify-end'} place-content-end place-items-end`}>
          {pageNumber !== 0 && <Link to="#" onClick={decrementPage} className="text-lg font-normal text-current no-underline">Back</Link>}
          {pageNumber < pages.length + getValues('bendCount') && (
            <Button 
              label="Next" 
              handleClick={() => incrementPage()} 
              disabled={!isValid || pageNumber >= pages.length + getValues('bendCount')}
            />
          )}
          {pageNumber === pages.length + getValues('bendCount') && <Link to="/" className="text-lg font-normal text-current no-underline">Go Home</Link>}
        </div>
      </form>
    </>
  );
  
}

export default InputForm; 