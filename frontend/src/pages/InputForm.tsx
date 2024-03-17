import React, { useState } from 'react';
import Button from '../components/Button';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { MenuItem, Select, TextField} from '@mui/material';
import { Divider } from '@mui/material';
import StepWrapper from '../components/StepWrapper';
import { Link } from 'react-router-dom';
import { MaterialEnum, MeasurementUnit, BendFields } from '../enums';
import { FormValues } from '../types';
import Navbar from '../components/Navbar';
import ProgressStepOne from '../images/ProgressStepOne';
import ProgressStepTwo from '../images/ProgressStepTwo';
import ProgressStepThree from '../images/ProgressStepThree';

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

  const pages = [
    <StepWrapper title='What material is the tube?'>
    <Controller
      control={control}
      name="material"
      rules={{ required: true }}
      render={({ field }) => (
        <Select
          {...field}
          error={errors.material !== undefined}
          displayEmpty
          fullWidth
          style={customInputStyle}
          renderValue={(value) => (
            <span className='text-brand-blue-light'>
              {value ? String(value) : "Select Material"}
            </span>
          )}
          >
          {Object.entries(MaterialEnum).map(([materialKey, materialValue]) => (
            <MenuItem
             key={materialKey}
             value={materialValue} 
             style={{ color: '#C4C4C4'}}>{materialValue}</MenuItem>
          ))}
        </Select>
      )}
    />
    <ProgressStepOne/>
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
            <TextField placeholder="0" className="text-brand-light-grey"
              key='length-value'
              type='number'
              {...field}
              error={errors.length?.value !== undefined}
              label={errors.length?.value ? 'Please enter a positive number' : ''}
              onChange={(event) => field.onChange(+event.target.value)}
              fullWidth
              variant='outlined'
              InputProps={{
                style: customInputStyle
              }}
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
              displayEmpty
              fullWidth
              style={customInputStyle}
              renderValue={(value) => (
                <span style={{ color: value ? '#000000' : '#666666' }}>
                  {value ? String(value) : "Inches"}
                </span>
              )}
              
            >
              {Object.entries(MeasurementUnit).map(([materialKey, materialValue]) => (
              <MenuItem key={materialKey} value={materialValue}>{materialValue}</MenuItem>
            ))}
            </Select>
          )}
        />
      </div>
    </div>
    <ProgressStepTwo/>
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
        placeholder="0" className="text-brand-light-grey"
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
  <ProgressStepThree/>
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
    const bendIndex = pageNumber - pages.length

    const fields: { key: BendFields, label: string }[] = [
      { key: BendFields.straightTubeBefore, label: 'Amount of straight tube before a bend'},
      { key: BendFields.direction, label: 'Bend direction' },
      { key: BendFields.radius, label: 'Bend radius' },
      { key: BendFields.arcLength, label: 'Arc length' },
      { key: BendFields.extrusion, label: 'Extrusion length' },
      { key: BendFields.straightTubeAfter, label: 'Amount of straight tube after a bend' },
    ]

    return <StepWrapper title={`Bend #${bendIndex + 1}`}>
      <div className=' flex flex-col gap-2'>

        {fields.map(value =>
          <div key={value.key}>
            <Divider sx={{ opacity: 0.6 }} />
            <div className=' pt-2 flex flex-row w-96 justify-between items-center'>
              <h3 className=' text-brand-blue-dark text-xl font-semibold w-2/3'>{value.label}</h3>
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
                      InputProps={{
                        style: customInputStyle,
                      }}
                    ></TextField>
                  )}
                /></div></div>
          </div>
        )}
      </div>
      <button onClick={deleteBend} className=' text-error-red'>X delete bend</button>
    </StepWrapper>
  }

  const pageManager = () => {
    if (pageNumber < pages.length) return pages[pageNumber]
    else if (pageNumber < pages.length + getValues('bendCount')) return bendConfig()
    else return <StepWrapper title='Download GCode'>
      <Button label='Download File' handleClick={() => console.log('button')}></Button>
      <Button label='Upload To Machine' handleClick={() => console.log('button')}></Button>
    </StepWrapper>
  }

  function BendButton(props: { bendNum: number, label: string, handleClick: () => void }) {
    const colors = pageNumber === props.bendNum + 3 ? 'text-brand-blue-dark bg-dark-white' : 'text-brand-light-grey bg-off-white'
    
    return (
      <button 
        onClick={props.handleClick} 
        className={`flex justify-center rounded-xl items-center ${colors}`}
        style={{
          width: '84px',
          height: '51px',
        }}
      >
        <h3 className="text-center font-semibold text-sm">{props.label}</h3>
      </button>);
  }

  const bendSideBar = () => {
    if (pageNumber >= 3 && pageNumber <= pages.length + getValues('bendCount')) {
      console.log("bend sidebar")
      const bendButtons = [];
      for (let index = 0; index < getValues('bendCount'); index++) {
        bendButtons.push(
          
          <BendButton
              bendNum={index}
              key={`bend-link-${index}`}
              label={`Bend ${index + 1}`}
              handleClick={() => setPageNumber(3 + index)}
          />
        );
      }
      return (
        <div>
          <h2>Bends</h2>
            {bendButtons}
        </div>
      );
    }
  }
  

  return (
    <>
      <Navbar/>
        <div className="sidebar bg-off-white">
            {bendSideBar()}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full h-screen flex flex-col bg-off-white justify-center items-center pt-16'>
        {pageManager()}
        <div className={`pb-32 w-1/2 flex flex-row ${pageNumber !== 0 ? 'justify-between' : 'justify-end'} place-content-end place-items-end`}>
          {pageNumber !== 0 && (pageNumber <= 3 || pageNumber != pages.length + getValues('bendCount') - 1) && <Link to="#" onClick={decrementPage} className="text-lg font-normal text-current no-underline">
            Back to
            {pageNumber === 1
              ? " materials"
              : pageNumber === 2
                ? " length"
                : pageNumber === 3
                 ? " number of bends"
                 : pageNumber != pages.length + getValues('bendCount')
                  ? ` bend ${pageNumber - 2}`
                  : " bends"} </Link>}
        <div className={`${pageNumber !== 3 && pageNumber !== pages.length + getValues('bendCount') - 1 ? 'ml-auto' : 'mx-auto'}`}>
          {pageNumber < pages.length + getValues('bendCount') && (
            <Button 
              label={"Next, " + (
                pageNumber === 0 
                  ? "length"
                  : pageNumber === 1
                    ? "number of bends"
                    : pageNumber === 2
                      ? "bend 1"
                      : pageNumber < 2 + getValues('bendCount')
                        ? `bend ${pageNumber - 1}`
                          : "download")
              }
              handleClick={() => incrementPage()} 
              disabled={!isValid || pageNumber >= pages.length + getValues('bendCount')}
            />
          )}
          {pageNumber === pages.length + getValues('bendCount') && <Link to="/" className="text-lg font-normal text-current no-underline">Back to Home</Link>}
        </div>
       </div>
      </form>
    </>
  );
  
}

export default InputForm; 
