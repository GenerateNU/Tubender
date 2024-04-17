import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from './Button';

function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
  }
  const customInputStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '&.MuiFocused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '& .MuiInputLabel-root': {
      color: '#C4C4C4',
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            sx={customInputStyle}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            sx={customInputStyle}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={customInputStyle}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            sx={customInputStyle}

          />
        </Grid>
        <Grid item xs={12}>
          <Button label='Request demo'
            handleClick={() => console.log('button')}
            customClassName='button-brand-teal hover'></Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default PersonalInfoForm;
