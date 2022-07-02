import React, { useMemo } from "react";
import Table from './Table';
import './Transactions.css';

export default function Transactions( props ) {



  const columns = useMemo(
    () => [
      
      {
        Header: "ISBN",
        accessor: "isbn"
      },
      {
        Header: "Patron ID",
        accessor: "pid"
      },
      {
        Header: "Check-In / Check-Out",
        accessor: "type"
      },
      {
        Header: "Date of Transaction",
        accessor: "date"
      }
    ],
    []
  );
  
  
  


    
  
  return(
    <div id="transComp">
      <Table columns={columns} data={props.data} />
    </div>
    

  )

}