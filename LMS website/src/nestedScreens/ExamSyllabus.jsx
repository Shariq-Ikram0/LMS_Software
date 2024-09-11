import React from 'react';
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
import FeeVouBox from '../components/FeeVouBox';
import ExamSchBox from '../components/ExamSchBox';
import ExamResBox from '../components/ExamResBox';

const ExamSyllabus = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
            Exam Result
          </Typography>

         <ExamResBox classNam="1"  />
         <ExamResBox classNam="2"  />
         <ExamResBox classNam="3"  />
         <ExamResBox classNam="4"  />
         <ExamResBox classNam="5"  />
         <ExamResBox classNam="6"  />
         <ExamResBox classNam="7"  />
         <ExamResBox classNam="8"  />
         <ExamResBox classNam="9"  />
         <ExamResBox classNam="10"  />
         
         
         

        </Container>
      </Box>
    </Box>
  );
}

export default ExamSyllabus



