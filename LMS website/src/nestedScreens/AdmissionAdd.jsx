import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../components/firebase';

const AdmissionAdd = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [qualification, setQualification] = useState('');
  const [gender, setGender] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const admissionData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      dob,
      qualification,
      gender,
    };

    try {
      await addDoc(collection(database, 'admissions'), admissionData);
      console.log('Admission data added:', admissionData);
      // Clear form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setDob('');
      setQualification('');
      setGender('');
    } catch (error) {
      console.error('Error adding admission:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <Container
          sx={{
            width: '100%',
            marginRight: { xs: 0, sm: 2, md: 2, lg: 2 },
            marginLeft: { xs: 0, sm: 3, md: 37 },
            pt: 4,
            pb: 5,
            mt: 10,
            bgcolor: 'grey.100',
          }}
        >
          <Typography
            variant="h4" fontWeight="bold" color="rgb(22 78 99)" textAlign="center" mb={3}
          >
            Admission Form
          </Typography>
          <Box display="flex" justifyContent="center">
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: '100%', maxWidth: '550px' }}
            >
              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                First Name
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
              />

              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                Last Name
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
              />

              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                Email
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
              />

              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                Phone Number
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
              />

              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={1}>
                Date of Birth
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
              />

              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                Qualification
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter Your Qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
              />

              <Box mb={2}>
                <Typography color="rgb(22 78 99)" fontWeight="medium" mb={2}>
                  Select Gender:
                </Typography>
                <RadioGroup
                  row
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                    sx={{ color: 'rgb(22 78 99)' }}
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                    sx={{ color: 'rgb(22 78 99)' }}
                  />
                </RadioGroup>
              </Box>

              <Box display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontSize: '1rem',
                    py: '10px',
                    width: '100%',
                    maxWidth: '350px',
                    mt: 2,
                    backgroundColor: 'rgb(22 78 99)',
                    '&:hover': {
                      bgcolor: 'rgb(14 116 144)',
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default AdmissionAdd;
