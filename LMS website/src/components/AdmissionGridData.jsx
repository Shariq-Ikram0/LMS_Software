import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last Name', width: 150, editable: true },
  { field: 'email', headerName: 'Email', width: 200, editable: true },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 150, editable: true },
  { field: 'dob', headerName: 'Date of Birth', width: 150, editable: true },
  { field: 'qualification', headerName: 'Qualification', width: 150, editable: true },
  { field: 'gender', headerName: 'Gender', width: 100, editable: true },
];

export default function AdmissionGridData({ rows }) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
