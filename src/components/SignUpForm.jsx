import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput.jsx';
import { toast } from "react-toastify";
import { postNewUser } from '../../helpers/axiosHelpers.js';

export const SignUpForm = () => {
  const [form, setForm] = useState({});

  const fields = [
    { label:"Name", placeholder:"john smith", required:true, type:"text", name:"name" },
    { label:"Email", placeholder:"john@gmail.com", required:true, type:"email", name:"email" },
    { label:"Password", placeholder:"***********", required:true, type:"password", name:"password" },
    { label:"Confirm Password", placeholder:"***********", required:true, type:"password", name:"confirmPassword" },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return toast.error("Passwords do not match");
    }

    const { status, message } = await postNewUser(rest);
    toast[status](message);
  };

  return (
    <div className='p-4 border rounded'>
      <h4 className="mb-3">Sign Up Now!</h4>

      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
