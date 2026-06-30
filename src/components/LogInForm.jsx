import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput.jsx';
import useForm from './hooks/useForm.js';
import { loginUser } from '../../helpers/axiosHelpers.js';
import { toast } from "react-toastify";
const initialState = {
  email: "",
  password: "",
}

 export const LogInForm = () => {
  const {form, handleOnChange} = useForm(initialState);

    const fields = [
      { label:"Email", placeholder:"john@gmail.com", required:true, type:"email", name:"email",value: form.email },
      { label:"Password", placeholder:"***********", required:true, type:"password", name:"password", value:form.password },
    ];

      const handleOnSubmit = async (e) => {
        e.preventDefault();
      const { status,message,user,accessJWT } = await loginUser(form);
      toast[status](message)
      console.log(user,accessJWT);
    
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