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
import { doc, setDoc } from 'firebase/firestore';
import { database } from '../components/firebase';
import shortid from 'shortid';

function StudentAdd() {

  const [firstName,setFirstname] = useState('');
  const [lastName,setLastname] = useState('');
  const [email,setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [studentClass, setStudentclass] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(firstName, lastName, email, gender, studentClass);
    setFirstname('');
    setLastname('');
    setEmail('');
    setGender('');
    setStudentclass('');

    let studentData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      studentClass: studentClass,
      gender: gender
     
    }
  
   try {
    const uniqueID = shortid.generate();
    const storeRegistration = await setDoc(doc(database, "students", uniqueID), studentData);
    console.log(uniqueID)
   } catch (error) {
    console.error(error);
    
   }

  }

 

  return (
    <Box 
    sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <Container
         sx={{
            width: '100%', 
            marginRight: {xs: 0,sm: 2,md: 2,lg: 2,},
              marginLeft: {
                xs: 0,     
                sm: 3,      
                md: 37    
              },
            
            pt: 4,
            pb: 5,
            mt: 10,
            bgcolor: 'grey.100', 
          }}
        >
        
          <Typography
            variant="h4" fontWeight="bold" color="rgb(22 78 99)" textAlign="center" mb={3} >
            Student Registration
          </Typography>

         
          <Box display="flex" justifyContent="center" >

             <Box component="form" 
  
             onSubmit={handleSubmit}
               sx={{ width: '100%', maxWidth: '550px' }}>
                <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                  First Name
                </Typography>
                <TextField
                  fullWidth 
                  variant="outlined"
                  placeholder="Enter Name"
                  value={firstName}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      height: '45px', '& input': {
                        padding: '10px',},},
                  }}
                  onChange={(e)=>setFirstname(e.target.value)}
                />

                <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                  Last Name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Name"
                  value={lastName}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      height: '45px', '& input': {
                        padding: '10px',},},
                  }}
                  onChange={(e)=>setLastname(e.target.value)}
                />

                <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Email"
                  value={email}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      height: '45px', '& input': {
                        padding: '10px',},},
                  }}
                  onChange={(e)=>setEmail(e.target.value)}
                />

                <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                  Class
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter Class"
                  value={studentClass}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      height: '45px', '& input': {
                        padding: '10px',},},
                  }}
                  onChange={(e)=>setStudentclass(e.target.value)}
                />

               
                <Box mb={2}>
                  <Typography color="rgb(22 78 99)" fontWeight="medium" mb={2}>
                    Select Gender:
                  </Typography>
                  <RadioGroup row
                  value={gender}
                  onChange={(e)=>setGender(e.target.value)}
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
                      py: "10px",
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

export default StudentAdd;
