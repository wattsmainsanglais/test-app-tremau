
import styles from './page.module.css'

import * as React from 'react'


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
