import Table from 'react-bootstrap/Table';

export const TransactionTable = () => {
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
        <tr>
          <td>1</td>
          <td>2023-01-01</td>
          <td>salary</td>
          <td>Credit</td>
          <td>$5000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2023-01-02</td>
          <td>groceries</td>
          <td>Debit</td>
          <td>$200</td>
          
        </tr>
        <tr className = "font-weight-bold text-end">
          <td colSpan={3}>Total Balance</td>
          <td colSpan={3}>$200</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default TransactionTable;