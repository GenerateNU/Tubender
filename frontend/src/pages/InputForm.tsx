import React, { useState } from 'react';
import Button from '../components/Button';
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

  const pages = [
    <StepWrapper title='What material is the tube?'>
      <Controller
        control={control}
        name="material"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Select
            {...field}
            error={errors.material !== undefined}
            placeholder='Select Material'
            fullWidth
          >
            <MenuItem value={MaterialEnum.nickel}>Nickel</MenuItem>
            <MenuItem value={MaterialEnum.brass}>Brass</MenuItem>
            <MenuItem value={MaterialEnum.copper}>Copper</MenuItem>
          </Select>
        )
        }
      />
    </StepWrapper>,
    <StepWrapper title='What length is the tube?'>
      <div className=' flex flex-row gap-4 w-full'>
        <div className=' w-3/5'>
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
              ></TextField>
            )}
          /></div>
        <div className=' w-2/5'>
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
              >
                <MenuItem value={MeasurementUnit.inches}>Inches</MenuItem>
                <MenuItem value={MeasurementUnit.millimeters}>Millimeters</MenuItem>
              </Select>
            )
            }
          /></div></div>
    </StepWrapper>,
    <StepWrapper title='How many bends does the tube have?'>
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
          <TextField placeholder="Bends"
            key='bend-count'
            type='number'
            error={errors.bendCount !== undefined}
            label={errors.bendCount ? 'Please enter a positive integer' : ''}
            {...field}
            fullWidth
            onChange={(event) => field.onChange(+event.target.value)}
          ></TextField>
        )}
      />
    </StepWrapper>
  ]

  const deleteBend = () => {
    const bendIndex = pageNumber - pages.length

    const bends = getValues('bends')

    bends.splice(bendIndex, 1)

    setValue('bends', bends)
    setValue('bendCount', getValues('bendCount') - 1)

    decrementPage()
  }

  const addBend = () => {
    setValue('bendCount', getValues('bendCount') + 1)
  }

  const bendConfig = () => {
    const bendIndex = pageNumber - pages.length

    enum BendFields {
      radius = 'radius',
      arcLength = 'arcLength',
      extrusion = 'extrusion',
      straightTube = 'straightTube',
    }

    const fields: { key: BendFields, label: string }[] = [
      { key: BendFields.radius, label: 'Bend Radius' },
      { key: BendFields.arcLength, label: 'Arc Length' },
      { key: BendFields.extrusion, label: 'Extrusion Length' },
      { key: BendFields.straightTube, label: 'Straight Tube' },
    ]

    return <StepWrapper title={`Bend #${bendIndex + 1}`}>
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
                      variant="filled"
                      type='number'
                      error={errors.bends?.[bendIndex]?.[value.key] !== undefined}
                      {...field}
                      onChange={(event) => field.onChange(+event.target.value)}
                    ></TextField>
                  )}
                /></div></div>
          </div>
        )}
      </div>
      <button onClick={deleteBend} className=' text-error-red'>Delete Bend</button>
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=' w-full h-screen bg-off-white flex flex-col justify-center items-center'>
      {pageManager()}
      <div className={` pb-32 w-1/2 flex flex-row ${pageNumber !== 0 ? 'justify-between' : 'justify-end'} place-content-end place-items-end`}>
        {pageNumber !== 0 && <Button alt disabled={pageNumber === 0} handleClick={decrementPage} label='Back'></Button>}
        {pageNumber === pages.length + getValues('bendCount') ? <Link to='/'><Button handleClick={() => console.log("home")} label='Go Home'></Button></Link> : <Button disabled={!isValid || pageNumber === pages.length + (getValues("bendCount") || 0)} handleClick={incrementPage} label='Next'></Button>}
      </div>
    </form>
  )
}

export default InputForm;