import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput.jsx';
import { toast } from "react-toastify";

export const SignUpForm = () => {
const [form,setForm] =useState({});

  const fields =[
  {   label:"Name",
      placeholder:"john smith",
      required:true,
      type:"text",
      name:"name"
  },
  {   label:"Email",
      placeholder:"john@gmail.com",
      required:true,
      type:"email",
      name:"email"
  },
  {   label:"pasword",
      placeholder:"***********",
      required:true,
      type:"password",
      name:"password"
  }, 
   {label:"confirm pasword",
      placeholder:"***********",
      required:true,
      type:"password",
      name:"confirm password"
  },
  
]

const handleOnChange=(e)=>{
  const {name,value}=e.target;
  console.log(name,value);
  setForm({...Form,[name]:value,})
}

const handleOnSubmit=(e)=>{
  e.preventDefault();
  const {confirmPassword,...rest}=form;
  if(confirmPassword!==rest.password){return toast.error("password do not matched")}
  console.log(form);
}
  return (
    <div className='p-4 border rounded'>
        <h4 className="mb-3">Sign Up Now!</h4>
        <Form >
        {fields.map((input)=><CustomInput key={input.name}{...input}onChange={handleOnChange}/>)

        }
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      
    </div>
    
  )
}
export default SignUpForm;