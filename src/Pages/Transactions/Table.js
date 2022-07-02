import React, { useState }from "react";
import { useFilters, useTable } from "react-table";
import { TextInput } from '@mantine/core';
import './Table.css';


export default function Table({ columns, data }) {
    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        rows, 
        prepareRow,
        setFilter 
      } = useTable({
        columns,
        data
      },
      useFilters
      );

      const [filterInput, setFilterInput] = useState("");
      
      const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("pid", value); 
        setFilterInput(value);
      };
      
      return (

            <div className="cont">
            <TextInput
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Patron ID"}/>

            <table {...getTableProps()}>
            <thead>
             {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
            
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
            </table>
            </div>
        
            
        
        
      );
    }
    