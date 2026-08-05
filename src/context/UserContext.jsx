import { createContext, useContext, useState } from "react";
import { fetchTransactions } from "../../helpers/axiosHelpers";



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const[transactions, setTransactions] = useState([])

  const getTransactions = async () => {
// call the API to get transactions for the user
    try { 
      const {status, transactions} = await fetchTransactions();
  
  
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, transactions, getTransactions }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);