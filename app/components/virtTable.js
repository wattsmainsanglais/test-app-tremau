'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';



const columns = [
  {
    width: 200,
    label: 'id',
    dataKey: 'id',
  },
  {
    width: 120,
    label: 'reportedUrl',
    dataKey: 'reportedUrl',
    numeric: true,
  },
  {
    width: 120,
    label: 'reporterAge',
    dataKey: 'reporterAge',
    numeric: true,
  },
  {
    width: 120,
    label: 'reporterName',
    dataKey: 'reporterName',
    numeric: true,
  },
  {
    width: 120,
    label: 'reporterEmail',
    dataKey: 'reporterEmail',
    numeric: true,
  },
];



const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {

    const [data, setData] = React.useState([])
    React.useEffect(() => {
    fetch('https://retoolapi.dev/zTMlcq/tremau-data')
    .then(res => res.json())
    .then(res => setData(res))
})

  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}