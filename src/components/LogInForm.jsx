import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput.jsx';
import { toast } from "react-toastify";
import { postNewUser } from '../../helpers/axiosHelpers.js';



export const LogInForm = () => {

  const [form, setForm] = useState({});
  
    const fields = [
      { label:"Email", placeholder:"john@gmail.com", required:true, type:"email", name:"email" },
      { label:"Password", placeholder:"***********", required:true, type:"password", name:"password" },
    ];

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleOnSubmit = async (e) => {
        e.preventDefault();
    
      console.log(form);
    
      };
  return (
    <div>
    <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LogInForm;