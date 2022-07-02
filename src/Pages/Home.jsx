import '../App.css';
import { Button } from '@mantine/core';
import Books from "./Book/Books";
import axios from "axios";
import  { useState } from "react";
import Transactions from './Transactions/Transactions';
import NavbarSimple from '../comps/Navbar';




export default function Home(){

    const [data, setData] = useState([]);
    const [transaction, setTransaction ] = useState([]);

    const allBooks = async ()=> {
          await axios
          .get("http://localhost:5000/books")
          .then((result)=>{
            setData(result.data.books);
            document.getElementById("bookcomp").style.visibility = "visible";

          });
          
      
    };

    const allTransactions = async ()=> {
        await axios
        .get("http://localhost:5000/transactions")
        .then((result)=>{
            setTransaction(result.data.transaction);
            document.getElementById("transComp").style.visibility = "visible";
        })
        
    }

    return(
        <div className="home">
            <NavbarSimple />
            <h1>Dashboard</h1>
            <div>
            <Button variant="filled" onClick={()=>allBooks()}>All Books</Button>
                
            
            <Button variant="filled" onClick={()=>allTransactions()}>Recent Transactions</Button>

            <Books data={data} />
            <Transactions data = {transaction} />
            
            </div>
        </div>

    );
}