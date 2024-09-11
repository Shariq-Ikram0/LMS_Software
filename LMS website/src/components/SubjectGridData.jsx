import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const subjectColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'subjectName', headerName: 'Subject Name', width: 150 },
  { field: 'studentClass', headerName: 'Class', width: 110 },
  { field: 'field', headerName: 'Field', width: 150 },
];

export default function SubjectGridData({ rows }) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={subjectColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
