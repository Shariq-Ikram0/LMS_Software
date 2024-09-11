import { Box, Typography } from '@mui/material'
import React from 'react'

const FeeStrucBox = ({classNam, month, year}) => {
  return (
    <div>
      <Box  sx={{bgcolor:"white" , borderRadius:3 , boxShadow:3,py:2 ,px:1, pr:2 ,mx:4 ,mb:3}}>
              <Typography display="flex" variant="h5" color="rgb(22 78 99)" justifyContent="center" sx={{text:"bold",bgcolor:"rgb(240, 255, 250)" , ml:2 , mr:1,borderRadius:5}}>
                {classNam}
              </Typography>

              <Box display="flex" justifyContent="space-between" >
                <Typography variant="h6" color="rgb(14 116 144)" sx={{ml:2}}>
                   Monthly Fee:
                  </Typography>
                  <Typography variant="h6" color="tomato" sx={{ml:2}}>
                    Rs: {month}/-
                  </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" sx={{ }}>
                  <Typography variant="h6" color="rgb(14 116 144)" sx={{ml:2}}>
                  Yearly Fee:
                  </Typography>
                  <Typography variant="h6" color="tomato" sx={{ml:2}}>
                    Rs: {year}/-
                  </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" sx={{ }}>
                <Typography variant="h6" color="rgb(14 116 144)" sx={{ml:2}}>
                   Security Deposit:
                  </Typography>
                  <Typography variant="h6" color="tomato" sx={{ml:2}}>
                    Rs: 1,000/-
                    </Typography>
                  </Box>
                  </Box>
    </div>
  )
}

export default FeeStrucBox
