
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const FeeVouBox = ({classNam, month, year}) => {
  return (
    <div>
      <Box  sx={{bgcolor:"white" , borderRadius:3 , boxShadow:3,pt:4,pb:4 ,px:1, pr:2 ,mx:{md:10 ,sx:2} ,mb:3}}>
              <Typography display="flex" variant="h5" color="rgb(22 78 99)" justifyContent="center" sx={{text:"bold",bgcolor:"rgb(240, 255, 250)"  ,mb:2,borderRadius:5}}>
              Fee Voucher For {classNam}
              </Typography>

              <Box display="flex" justifyContent="space-around" >
                <Typography variant="h6" color="rgb(14 116 144)" sx={{ml:0 ,my:2}}>
                   Monthly Fee:
                  </Typography>
                  <Typography variant="h6" color="tomato" sx={{mr:0,my:2}}>
                    Rs: {month}/-
                  </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-around" >
                  <Typography variant="h6" color="rgb(14 116 144)" sx={{ml:0,my:2}}>
                  Yearly Fee:
                  </Typography>
                  <Typography variant="h6" color="tomato" sx={{ml:0,my:2}}>
                    Rs: {year}/-
                  </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-around" >
                <Typography variant="h6" color="rgb(14 116 144)" sx={{ml:0,my:2}}>
                   Security Deposit:
                  </Typography>
                  <Typography variant="h6" color="tomato" sx={{ml:0,m:2}}>
                    Rs: 1,000/-
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="center" >
                  <button className='text-xl bg-green font-normal text-white px-4 py-1 rounded-md shadow-md  hover:bg-lgreen hover:shadow-green mr-9' >Pay Now</button>
                  </Box>
                  </Box>
    </div>
  )
}

export default FeeVouBox

