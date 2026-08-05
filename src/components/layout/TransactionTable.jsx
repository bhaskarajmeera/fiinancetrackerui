import Table from 'react-bootstrap/Table';
import { useUser } from '../../context/UserContext';
import { Button, FormControl } from 'react-bootstrap';

export const TransactionTable = () => {

  const {transactions} = useUser();
  const totalBalance = transactions.reduce((acc, transaction) => {
    return transaction.type === "income" ? acc + transaction.amount : acc - transaction.amount;
  }, 0);
  return (
    <>
    <div className='d-flex justify-content-between align-items-center pt-3 mb-3'>
      <div>{transactions.length} transactions found </div>
      <div> <FormControl type ="text"/></div>
      <div><Button className="primary">Add New Transaction</Button></div>
    </div>
    <Table striped  hover>
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
        {
          transactions.lenght > 0 && transactions.map((transaction, index) => (
            <tr key={transaction._id}>
              <td>{index + 1}</td>
              <td>{transaction.createdAt.slice(0, 10)}</td>
              <td>{transaction.title}</td>
              {/* for expense  or income conditions*/}
              {transaction.type === "expense" && ( <>
              <td className="debit">$${transaction.amount}</td>
              <td></td>
              </>)
              }
              {transaction.type === "income" && ( <>
              <td></td>
              <td className="credit">$${transaction.amount}</td>
              </>)
              }
            </tr>
          ))
        }
        
        <tr className = "font-weight-bold text-end">
          <td colSpan={3}>Total Balance</td>
          <td colSpan={3} className={totalBalance >= 0 ? "text-success" : "text-danger"} > ${totalBalance.toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
    </>
    
  );
}
export default TransactionTable;