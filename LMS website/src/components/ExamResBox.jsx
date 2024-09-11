import { Box, Typography } from '@mui/material'
import React from 'react'

const ExamResBox = ({classNam}) => {
  return (
    <div>
        <Typography display="flex" variant="h6" color="rgb(22 78 99)" justifyContent="start" sx={{text:"bold" ,display:"inline-block",bgcolor:"rgb(240, 255, 250)" ,px:2, ml:3 ,mb:1,borderRadius:5}}>
              Class - {classNam} Results
              </Typography>
      <Box  sx={{bgcolor:"Lightgray" , borderRadius:1 , boxShadow:3,py:1 , mx:"auto" ,mb:4}}>
              

              
              <Box display="flex" justifyContent="space-around" >
                <Typography variant="p" color="black" >
                Student Name
                  </Typography>

                  <Typography variant="p" color="black" >
                Roll Number
                 
                  </Typography>
                  
                  
                  
                  <Typography variant="p" color="black" >
                  Student Grade
                  </Typography>
                  
                  
                  
              </Box>
                  </Box>
    </div>
  )
}

export default ExamResBox




