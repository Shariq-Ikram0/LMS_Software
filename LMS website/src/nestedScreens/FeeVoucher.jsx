

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

const FeeVoucher = () => {
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
            Fee Voucher
          </Typography>

         <FeeVouBox classNam="Class 1" month="500" year="6,000" />
         <FeeVouBox classNam="Class 2" month="600" year="7,200" />
         <FeeVouBox classNam="Class 3" month="1,400" year="8,400" />
         <FeeVouBox classNam="Class 4" month="700" year="9,600" />
         <FeeVouBox classNam="Class 5" month="800" year="10,800" />
         <FeeVouBox classNam="Class 6" month="900" year="12,000" />
         <FeeVouBox classNam="Class 7" month="1,000" year="13,200" />
         <FeeVouBox classNam="Class 8" month="1,100" year="14,400" />
         <FeeVouBox classNam="Class 9" month="1,200" year="15,600" />
         <FeeVouBox classNam="Class 10" month="1,300" year="16,800" />
         

        </Container>
      </Box>
    </Box>
  );
}

export default FeeVoucher

