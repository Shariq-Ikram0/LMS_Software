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

const ExamSchedule = () => {
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
            Exam Schedule
          </Typography>

         <ExamSchBox classNam="1 - English" date="10" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="1 - Mathamatics" date="11" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="2 - History" date="12" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="2 - Computer" date="13" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="2 - Science" date="14" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="3 - English" date="15" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="3 - Geography" date="16" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="4 - Science" date="17" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="4 - History" date="18" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="5 - Mathamatics" date="19" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="5 - Science" date="20" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="6 - Geography" date="21" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="6 - English" date="22" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="7 - Mathamatics" date="23" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="7 - History" date="24" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="8 - Mathamatics" date="25" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="8 - English" date="26" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="9 - Geography" date="27" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="9 - Chemistry" date="28" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="9 - English" date="29" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="10 - History" date="30" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="10 - Geography" date="01" time="11:00 AM | End Time: 02:00 PM" />
         <ExamSchBox classNam="10 - Science" date="02" time="11:00 AM | End Time: 02:00 PM" />
         
         

        </Container>
      </Box>
    </Box>
  );
}

export default ExamSchedule


