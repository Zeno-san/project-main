import React, { useMemo } from "react";
import Table from './Table';
import './Books.css';

export default function Books( props ) {



  const columns = useMemo(
    () => [
      
      {
        Header: "ISBN",
        accessor: "isbn"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Author",
        accessor: "author"
      },
      {
        Header: "Description",
        accessor: "description"
      },
      {
        Header: "Number of Copies",
        accessor: "no_of_copies"
      }
    ],
    []
  );
  
  
  


    
  
  return(
    <div id="bookcomp">
      <Table columns={columns} data={props.data} />
    </div>
    

  )

}