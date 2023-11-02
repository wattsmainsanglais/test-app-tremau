
import styles from './page.module.css'

import Image from 'next/image'


import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TableVirtuoso } from 'react-virtuoso';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import ReactVirtualizedTable from './components/virtTable';
import TremauTable from './components/tableData';



export default function Home() {


  return (
    <main className={styles.main}>
     
      <TremauTable />

      <p>Test it</p>

      <ReactVirtualizedTable/>
       
     

     
    </main>
  )
}
