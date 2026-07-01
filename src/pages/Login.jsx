
import Container from'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { LogInForm } from '../components/LogInForm.jsx';
import { BsGraphDown } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
/* import { useUser } from '../context/UserContext.jsx'; */

const Login = () => {
 /* const {user,setUser} = useUser();
 console.log(user,setUser); */
  return (
    <Container className='p-5' >
      <Row >
      <Col md={6} className='bg-dark p-5 rounded'>
      <h4 >Sign In</h4>
      <LogInForm/>
      </Col>
      <Col md={6} >
      <div className='text-danger fs-1 p-3'>
        <BsGraphDown />   reduce your expenses
      </div>
      <div className='text-success fs-1 p-3'>
        <BsGraphUp />  Inrease your income
      </div>
      </Col>
      </Row>
    </Container>
    
  )
}
export default Login;