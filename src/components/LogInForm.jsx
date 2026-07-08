import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from './CustomInput.jsx';
import useForm from './hooks/useForm.js';
import { loginUser } from '../../helpers/axiosHelpers.js';
import { toast } from "react-toastify";
import { useUser } from '../context/UserContext.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
const initialState = {
  email: "",
  password: "",
}

 export const LogInForm = () => {

  const location = useLocation()
  console.log(location)
  const navigate = useNavigate();
  const {user,setUser} = useUser();
 console.log(user,setUser);
  const {form, handleOnChange} = useForm(initialState);
  const goTo = location?.state?.form?.pathname || "/dashboard";
  
  useEffect(()=>{
    user?._id && navigate(goTo)

  },[user?._id,navigate,goTo])

    const fields = [
      { label:"Email", placeholder:"john@gmail.com", required:true, type:"email", name:"email",value: form.email },
      { label:"Password", placeholder:"***********", required:true, type:"password", name:"password", value:form.password },
    ];

      const handleOnSubmit = async (e) => {
        e.preventDefault();
      const { status,message,user,accessJWT } = await loginUser(form);
      toast[status](message)
      console.log(user,accessJWT);
      setUser(user);
      localStorage.setItem("accessJWT",accessJWT)
    
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