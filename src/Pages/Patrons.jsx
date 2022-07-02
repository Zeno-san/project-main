import React, { useState } from "react";
import { TextInput, Button } from '@mantine/core';
import axios from "axios";
import Users from "./Users/Users";
import NavbarSimple from "../comps/Navbar";


const Patrons = ()=> {
    
    const [inputs, setInputs] = useState(
        {
            pid:"",
            name: "",
            designation: "",
            phoneno: ""
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
        sendRequest().then( ()=>{
            setInputs({
                pid:"",
                name: "",
                designation: "",
                phoneno: ""
            });
        });
    };

    const sendRequest = async () => {
        await axios
          .post("http://localhost:5000/users", {
            pid: String(inputs.pid),
            name: String(inputs.name),
            designation: String(inputs.designation),
            phoneno: String(inputs.phoneno)
          })
          .then((res) => res.data);
      };

    return (
            <div className="patrons">
                <NavbarSimple />

                <div className="cont">
                <h1>Add a Patron</h1>
            <form onSubmit={handleSubmit}>

            <TextInput label="Patron ID" 
            value={inputs.pid} 
            onChange={handleChange}
            name="pid" />
            
            <TextInput label="Name" 
            value={inputs.name} 
            onChange={handleChange}
            name="name" />

            <TextInput label="Designation" 
            value={inputs.designation} 
            onChange={handleChange}
            name="designation" />

            <TextInput label="Phone Number" 
            value={inputs.phoneno} 
            onChange={handleChange}
            name="phoneno" />

            <Button variant="filled" type="submit">Add Patron</Button>

            
            </form>

            <h2>Existing Patrons</h2>
            <Users />
                </div>
                
            
            </div>
            

        
    )

    
};

export default Patrons;

