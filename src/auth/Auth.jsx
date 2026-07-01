import { Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export const Auth = ({children}) => {

   const isLoggedin = false
  return isLoggedin ? children :<Navigate to="/" replace />
}

export default Auth;