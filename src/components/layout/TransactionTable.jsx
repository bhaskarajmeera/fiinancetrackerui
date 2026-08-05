import Table from 'react-bootstrap/Table';
import { useUser } from '../../context/UserContext';

export const TransactionTable = () => {

  const {transactions} = useUser();
  const totalBalance = transactions.reduce((acc, transaction) => {
    return transaction.type === "income" ? acc + transaction.amount : acc - transaction.amount;
  }, 0);
  return (
    <Table striped bordered hover>
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
              <td></td>
              <td>$${transaction.amount}</td>
              </>)
              }
              {transaction.type === "income" && ( <>
              
              <td>$${transaction.amount}</td>
              <td></td>
              </>)
              }
              
              
            </tr>
          ))
        }
        
        
        <tr className = "font-weight-bold text-end">
          <td colSpan={3}>Total Balance</td>
          <td colSpan={3}>${totalBalance.toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default TransactionTable;