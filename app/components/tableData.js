

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 

  async function getData() {
    const res = await fetch('https://retoolapi.dev/zTMlcq/tremau-data')
    
   
    if (!res.ok) {
      
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  const data = await getData()
  
  export default function TremauTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell >ReportedUrl</TableCell>
              <TableCell >ReporterAge</TableCell>
              <TableCell >ReporterName</TableCell>
              <TableCell >ReporterEmail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow
                key={data.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell align="right">{data.reportedUrl}</TableCell>
                <TableCell align="right">{data.reporterAge}</TableCell>
                <TableCell align="right">{data.reporterName}</TableCell>
                <TableCell align="right">{data.reporterEmail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }