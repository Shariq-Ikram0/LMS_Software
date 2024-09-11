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
import FeeStrucBox from '../components/FeeStrucBox';

const FeeStucture = () => {

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
            Fee Structure
          </Typography>

         <FeeStrucBox classNam="CLASS 1" month="500" year="6,000" />
         <FeeStrucBox classNam="CLASS 2" month="600" year="7,200" />
         <FeeStrucBox classNam="CLASS 3" month="1,400" year="8,400" />
         <FeeStrucBox classNam="CLASS 4" month="700" year="9,600" />
         <FeeStrucBox classNam="CLASS 5" month="800" year="10,800" />
         <FeeStrucBox classNam="CLASS 6" month="900" year="12,000" />
         <FeeStrucBox classNam="CLASS 7" month="1,000" year="13,200" />
         <FeeStrucBox classNam="CLASS 8" month="1,100" year="14,400" />
         <FeeStrucBox classNam="CLASS 9" month="1,200" year="15,600" />
         <FeeStrucBox classNam="CLASS 10" month="1,300" year="16,800" />
         

        </Container>
      </Box>
    </Box>
  );
}

export default FeeStucture
