import { createContext, useContext, useState } from "react";
import { fetchTransactions } from "../../helpers/axiosHelpers";



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const[transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);
  const toggleModal = (value) => setShow(value);

  const getTransactions = async () => {
// call the API to get transactions for the user
    try { 
      const {status, transactions} = await fetchTransactions();
  
      status === "success" && setTransactions(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, transactions, getTransactions, toggleModal, show }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);