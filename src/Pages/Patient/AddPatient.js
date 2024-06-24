import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Typography, Container, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './AddPatient.css';
import { Margin } from '@mui/icons-material';
const AddPatient = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm" style={{ marginBottom: '20px',marginTop: '20px' }}>

      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Patient
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="patientName"
                control={control}
                defaultValue=""
                rules={{ required: 'Patient Name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Patient Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.patientName}
                    helperText={errors.patientName ? errors.patientName.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="doctorName"
                control={control}
                defaultValue=""
                rules={{ required: 'Doctor Name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Doctor Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.doctorName}
                    helperText={errors.doctorName ? errors.doctorName.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="date"
                control={control}
                defaultValue={null}
                rules={{ required: 'Date is required' }}
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      {...field}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Appointment Date"
                          variant="outlined"
                          fullWidth
                          error={!!errors.date}
                          helperText={errors.date ? errors.date.message : ''}
                        />
                      )}
                    />
                  </LocalizationProvider>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="time"
                control={control}
                defaultValue=""
                rules={{ required: 'Time is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Appointment Time"
                    variant="outlined"
                    fullWidth
                    error={!!errors.time}
                    helperText={errors.time ? errors.time.message : ''}
                    InputProps={{
                      endAdornment: <AccessTimeIcon />
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="notes"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Additional Notes"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
              >
                Save Appointment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddPatient;
