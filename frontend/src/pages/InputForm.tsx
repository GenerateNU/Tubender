import React, { useState } from 'react';
import Button from '../components/Button';
import { useForm, Controller, SubmitHandler} from "react-hook-form"
import { MenuItem, Select, TextField} from '@mui/material';
import { Divider } from '@mui/material';
import StepWrapper from '../components/StepWrapper';
import { Link } from 'react-router-dom';
import { MaterialEnum, MeasurementUnit, BendFields } from '../enums';
import { FormValues } from '../types';
import Navbar from '../components/Navbar';
import BendSidebar from '../components/BendSidebar';
import ProgressStepOne from '../images/ProgressStepOne';
import ProgressStepTwo from '../images/ProgressStepTwo';
import ProgressStepThree from '../images/ProgressStepThree';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const { ipcRenderer } = window.require('electron');

// Define your custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Set Inter font as default
  },
  palette: {
    text: {
      primary: '#778DA9', // regular menu item

    },
  },
});

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
    ipcRenderer.send('submit-form', data);
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
          <span>
            {value ? String(value) : "Select Material"}
          </span>
        )}
        >
        {Object.entries(MaterialEnum).map(([materialKey, materialValue]) => (
          <MenuItem
           key={materialKey}
           value={materialValue}>
          {materialValue}
            </MenuItem>
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
            <TextField placeholder="0"
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
                <span>
                  {value ? String(value) : "Select Unit"}
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
        placeholder="0"
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
      { key: BendFields.arcLength, label: 'Bend arc length' },
      { key: BendFields.straightTubeAfter, label: 'Amount of straight tube after a bend' },
    ]

    return <div className='w-full h-full flex justify-center relative'> 
    <div className="sidebar absolute top-5 left-10 p-4 w-1/8">
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
    <div className="w-full h-full flex flex-col flex-grow items-center">
    <div className='flex flex-row gap-4 w-full justify-center flex-grow'>
    <StepWrapper>
      <div className='w-full flex flex-col gap-2 items-center'>
        {fields.map(value =>
          <div key={value.key}>
            <Divider sx={{ opacity: 0.6 }} />
            <div className=' pt-2 flex flex-row w-96 justify-between items-center'>
              <h3 className=' text-brand-blue-dark text-xl w-1/2'>{value.label}</h3>
              <div className=' w-1/3'>
                <Controller
                  key={`bends-${bendIndex}-${value.key}`}
                  control={control}
                  name={`bends.${bendIndex}.${value.key}.value`}
                  rules={{
                    required: true,
                    ...(value.key !== BendFields.direction && { min: 0 }), // Exclude the min rule for 'direction'
                  }}
                  render={({ field }) => (
                    <TextField placeholder={value.key === BendFields.direction ? '' : '0'}
                      key={`bends-${bendIndex}-${value.key}`}
                      fullWidth
                      type={value.key === BendFields.direction ? 'text' : 'number'}
                      error={errors.bends?.[bendIndex]?.[value.key] !== undefined}
                      {...field}
                      onChange={(event) => {
                        const newValue = value.key === BendFields.direction ? event.target.value : +event.target.value;
                        field.onChange(newValue);
                      }}                      
                      InputProps={{
                        style: customInputStyle,
                      }}
                    ></TextField>
                  )}
                /></div></div>
          </div>
        )}
      <button onClick={deleteBend} className='w-52 h-12 font-semibold text-error-red underline'>Delete bend {bendIndex + 1}</button>
      </div>
    </StepWrapper>
    </div>
    </div>
    </div>
  }

  const pageManager = () => {
    if (pageNumber < pages.length) return pages[pageNumber]
    else if (pageNumber < pages.length + getValues('bendCount')) return bendConfig()
    else return <StepWrapper title='Download GCode'>
      <Button label='Download File'
       type='submit'
       handleClick={() => console.log('button')}
       customColors='bg-brand-temp-teal text-brand-white hover:bg-opacity-75'></Button>
      <Button label='Upload To Machine'
       handleClick={() => console.log('button')}
       customColors='bg-brand-temp-teal text-brand-white hover:bg-opacity-75'></Button>
    </StepWrapper>
  }

  return (
    <>
      <Navbar/>
      <ThemeProvider theme={theme}>
      <div className="flex flex-row justify-center items-center bg-off-white">
      <form onSubmit={handleSubmit(onSubmit)} className='w-full h-screen flex flex-col bg-off-white justify-center items-center pt-16 font-inter'>
        {pageManager()}
        <div className={`pb-32 w-1/2 flex flex-row items-center ${pageNumber !== 0 ? 'justify-between' : 'justify-end'} place-content-end place-items-end`}>
          {pageNumber !== 0 && <Link to="#" onClick={decrementPage} className="text-sm font-semibold text-current no-underline">
            Back to
            {pageNumber === 1
              ? " material"
              : pageNumber === 2
                ? " length"
                : pageNumber === 3
                 ? " number of bends"
                 : pageNumber < pages.length + getValues('bendCount')
                  ? ` bend ${pageNumber - 2}`
                  : " bends"} </Link>}
        <div className={'ml-auto'}>
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
          {pageNumber === pages.length + getValues('bendCount')
           && <Link to="/">
            <Button label='Back to home'
                     handleClick={() => console.log('button')}/>
                     </Link>}
        </div>
       </div>
      </form>
      </div>
      </ThemeProvider>
    </>
  );
  
}

export default InputForm; 
