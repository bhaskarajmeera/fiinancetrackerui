import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput.jsx';
import { toast } from "react-toastify";
import { postNewUser } from '../../helpers/axiosHelpers.js';
import useForm  from "../components/hooks/useForm.js";
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
export const SignUpForm = () => {
  const {form, setForm,handleOnChange} = useForm({});

  const fields = [
    { label:"Name", placeholder:"john smith", required:true, type:"text", name:"name",value: form.name },
    { label:"Email", placeholder:"john@gmail.com", required:true, type:"email", name:"email",value: form.email  },
    { label:"Password", placeholder:"***********", required:true, type:"password", name:"password", value: form.password  },
    { label:"Confirm Password", placeholder:"***********", required:true, type:"password", name:"confirmPassword", value: form.confirmPassword  },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return toast.error("Passwords do not match");
    }

    const { status, message } = await postNewUser(rest);
    toast[status](message);
    status === "success" && setForm(initialState)
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
