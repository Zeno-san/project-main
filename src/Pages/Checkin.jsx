import { useState } from 'react';
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import axios from "axios";
import NavbarSimple from '../comps/Navbar';



export default function Checkin(){

    const [inputs, setInputs] = useState(
        {
            isbn: "",
            pid: "",
            date: "",
            type: "Check-In"
        }
    );
    
    const handleChange =  (e) => {
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target.name, "Value", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        sendRequest().then( () => {
            setInputs(
                {
                    isbn: "",
                    pid: "",
                    date: "",
                    type: "Check-In"
                }
            );
        });
    }

    const sendRequest = async () => {
        await axios
          .post("http://localhost:5000/transactions/checkin", {
            isbn: String(inputs.isbn),
            pid: String(inputs.pid),
            date: String(inputs.date),
            type: String(inputs.type)
        })
          .then ( () =>{
            axios.post("http://localhost:5000/transactions", {
            isbn: String(inputs.isbn),
            pid: String(inputs.pid),
            date: String(inputs.date),
            type: String(inputs.type)
        })
          })
            
      };

    return(
        <div className="check-in">
            <NavbarSimple />
            <div className="cont">
            <h1>Book Details</h1>
            <form onSubmit={handleSubmit}>

            <TextInput label="ISBN " 
             value={inputs.isbn} 
             onChange={handleChange}
             name="isbn"/>
            
            <TextInput label="Patron ID " 
             value={inputs.pid} 
             onChange={handleChange}
             name="pid"/>

            <TextInput label="Date of Check-In " 
             value={inputs.date} 
             onChange={handleChange}
             name="date"/>
            
            <Button variant="filled" type="submit">Check In</Button>

            </form>
            </div>
            
            
        </div>
    )
}