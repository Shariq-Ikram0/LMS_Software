import { Box, Typography } from '@mui/material'
import React from 'react'

const ExamSchBox = ({classNam, date, time,}) => {
  return (
    <div>
      <Box  sx={{bgcolor:"white" , borderRadius:3 , boxShadow:3,pt:2,pb:2 ,px:1, pr:2 ,mx:{md:10 ,sx:1} ,mb:3,}}>
              <Typography display="flex" variant="h5" color="rgb(22 78 99)" justifyContent="center" sx={{text:"bold",bgcolor:"rgb(240, 255, 250)"  ,mb:1, borderRadius:5,fontSize:{xs:"20px",sm:"24px",md:"27px"}}}>
              Class - {classNam}
              </Typography>

              <Box display="flex" justifyContent="space-between" >
                <Typography variant="h6" color="gray" sx={{ml:5 ,m:1 ,fontSize:{xs:"15px",sm:"17px",md:"20px"}}}>
                 Date: 2024-9-{date}
                  </Typography>
                  
                  </Box>
                  <Box display="flex" justifyContent="space-between" >
                  <Typography variant="h6" color="gray" sx={{ml:1,m:1,fontSize:{xs:"15px",sm:"17px",md:"20px"}}}>
                  Start Time: {time}
                  </Typography>
                  
                  </Box>
                  
                  <Box  >
                  <button className='text-xl bg-green font-normal text-white px-4 py-1 rounded-md shadow-md  hover:bg-lgreen hover:shadow-green ml-2' >View Detail</button>
                  </Box>
                  </Box>
    </div>
  )
}

export default ExamSchBox



