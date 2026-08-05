import Table from 'react-bootstrap/Table';
import { useUser } from '../../context/UserContext';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import { deleteTransactions } from '../../../helpers/axiosHelpers';
import { toast } from 'react-toastify';

export const TransactionTable = () => {
  const [displayTransactions, setDisplayTransactions] = useState([]);

  const { transactions, toggleModal, getTransactions } = useUser();
  const [idsToDelete, setIdsToDelete] = useState([]);

  useEffect(() => {
    setDisplayTransactions(transactions);
  }, [transactions]);

  const totalBalance = transactions.reduce((acc, transaction) => {
    return transaction.type === "income"
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.title.toLowerCase().includes(searchTerm)
    );
    setDisplayTransactions(filteredTransactions);
  };

  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    
    // Handle select all logic
    if (value === "all") {
      checked ? setIdsToDelete(displayTransactions.map(transaction => transaction._id)) : setIdsToDelete([]);
      return;
    }
      // Handle individual transaction selection logic
    if(checked) {
      setIdsToDelete([...idsToDelete, value]);
    }else {
    
      setIdsToDelete(idsToDelete.filter(id => id !== value));
    }
    return;
  };

  const handleDelete = async () => {
    if (confirm(`Are you sure you want to delete ${idsToDelete.length} transaction(s)?`)) 
    {
      // Call the API to delete transactions with ids in idsToDelete
      const {status,message} = await deleteTransactions(idsToDelete );  
      // After successful deletion, update the transactions state in context
      toast[status](message);
      status === "success" && getTransactions() && setIdsToDelete([]);
    }
    
    
  }
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pt-3 mb-3">
        <div>{transactions.length} transactions found</div>
        <div>
          <FormControl
            type="text"
            placeholder="Search transactions..."
            onChange={handleSearch}
          />
        </div>
        <div>
          <Button className="primary" onClick={() => toggleModal(true)}>
            Add New Transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check type="checkbox" label="Select All" value="all" onChange={handleOnSelect} checked={idsToDelete.length === displayTransactions.length} />
      </div>

      <Table striped hover>
        <thead>
          <tr>
            
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>

        <tbody>
          {displayTransactions.length > 0 &&
            displayTransactions.map((transaction, index) => (
              <tr key={transaction._id}>
                
                <td>{index + 1}</td>
                <td><Form.Check type="checkbox"  label={transaction.createdAt.slice(0, 10)} value={transaction._id} onChange={handleOnSelect} checked={idsToDelete.includes(transaction._id)} /></td>
                <td>{transaction.title}</td>

                {transaction.type === "expense" && (
                  <>
                    <td className="debit text-danger"> <FaArrowDown />${transaction.amount}</td>
                    <td></td>
                  </>
                )}

                {transaction.type === "income" && (
                  <>
                    <td></td>
                    <td className="credit text-success"><FaArrowUp />${transaction.amount}</td>
                  </>
                )}
              </tr>
            ))}

          <tr className="font-weight-bold text-end">
            <td colSpan={3}>Total Balance</td>
            <td
              colSpan={3}
              className={totalBalance >= 0 ? "text-success" : "text-danger"}
            >
              ${totalBalance.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </Table>
      {idsToDelete.length > 0 && (
        <Button className="d-grid" onClick={handleDelete}>
          Delete {idsToDelete.length} Transaction(s)
        </Button> 
      )}
      
    </>
  );
};

export default TransactionTable;