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
import shortid from 'shortid';
import { doc, setDoc } from 'firebase/firestore';
import { database } from '../components/firebase';

const SyllabusAdd = () => {
  const [subjectName, setSubjectName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [field, setField] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(subjectName, field, studentClass);
    setSubjectName('');
    setField('');
    setStudentClass('');

    let subjectData = {
      subjectName: subjectName,
      studentClass: studentClass,
      field: field
    };

    try {
      const uniqueID = shortid.generate();
      await setDoc(doc(database, "subject", uniqueID), subjectData);
      console.log(uniqueID);
    } catch (error) {
      console.error(error);
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
            variant="h4"
            fontWeight="bold"
            color="rgb(22 78 99)"
            textAlign="center"
            mb={3}
          >
            Syllabus Add
          </Typography>

          <Box display="flex" justifyContent="center">
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: '100%', maxWidth: '550px' }}
            >
              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                Subject Name
              </Typography>
              <TextField
                fullWidth
                value={subjectName}
                variant="outlined"
                placeholder="Enter Subject Name"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
                onChange={(e) => setSubjectName(e.target.value)}
              />

              <Typography color="rgb(22 78 99)" fontWeight="medium" mb={0}>
                Class
              </Typography>
              <TextField
                fullWidth
                value={studentClass}
                variant="outlined"
                placeholder="Enter Class"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    height: '45px',
                    '& input': {
                      padding: '10px',
                    },
                  },
                }}
                onChange={(e) => setStudentClass(e.target.value)}
              />

              <Box mb={2}>
                <Typography color="rgb(22 78 99)" fontWeight="medium" mb={2}>
                  Select Field:
                </Typography>
                <RadioGroup
                  row
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                >
                  <FormControlLabel
                    value="Pre-Medical"
                    control={<Radio />}
                    label="Pre-Medical"
                    sx={{ color: 'rgb(22 78 99)' }}
                  />
                  <FormControlLabel
                    value="Pre-Engineering"
                    control={<Radio />}
                    label="Pre-Engineering"
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
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SyllabusAdd;
