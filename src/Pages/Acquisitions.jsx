import React, { useState } from "react";
import { TextInput, Button } from '@mantine/core';
import axios from "axios";
import NavbarSimple from "../comps/Navbar";

const Acquisitions = () =>{

    const [inputs, setInputs] = useState(
        {
            isbn: "",
            name: "",
            author: "",
            description: "",
            no_of_copies: ""
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
            setInputs(
                {
                    isbn: "",
                    name: "",
                    author: "",
                    description: "",
                    no_of_copies: ""
                }
            );
        })
    }

    const sendRequest = async () => {
        await axios
          .post("http://localhost:5000/books", {
            isbn: String(inputs.isbn),
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            no_of_copies: Number(inputs.no_of_copies)
          })
          .then((res) => res.data);
      };

    return (
        <div className="acq">
            <NavbarSimple />
            <div className="cont">
            <h1>Add a Book</h1>
            <form onSubmit={handleSubmit}>

            <TextInput label="ISBN" 
            value={inputs.isbn} 
            onChange={handleChange}
            name="isbn" />

            <TextInput label="Name" 
            value={inputs.name} 
            onChange={handleChange}
            name="name" />

            <TextInput label="Author" 
            value={inputs.author} 
            onChange={handleChange}
            name="author" />

            <TextInput label="Description" 
            value={inputs.description} 
            onChange={handleChange}
            name="description" />

            <TextInput label="No. Of Copies" 
            value={inputs.no_of_copies} 
            onChange={handleChange}
            name="no_of_copies" />

            <Button variant="filled" type="submit">Add Book</Button>

            
        </form>
            </div>
            
        </div>
        
    )


};

export default Acquisitions;

