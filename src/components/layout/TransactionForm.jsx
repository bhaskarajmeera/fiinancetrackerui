
import { Button, Form } from 'react-bootstrap';
import { CustomInput } from '../CustomInput';
import useForm from '../hooks/useForm';

const initialState = {
    type: "",
    title: "",
    amount: "",
    tdate: "",
  }
export const TransactionForm = () => {
const { form, setForm, handleOnChange } = useForm(initialState);

    const fields = [
    { label:"Title", placeholder:"salary", required:true, type:"title", name:"title", value: form.title },
    { label:"Amount", placeholder:"44", required:true, type:"number", name:"amount", value: form.amount  },
    { label:"Tdate",  required:true, type:"date", name:"tdate", value: form.tdate },
  ];


   const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form)}
  return (
    <div className='p-4 border rounded'>
      <h4 className="mb-3">Add new Transactions !</h4>

      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Transaction type</Form.Label>

                <Form.Select name ="type" onChange={handleOnChange} required >
                    <option value="">----select---</option>
                    <option value="income">Income</option>
                    <option value="expenses">Expenses</option>
                 </Form.Select>
              </Form.Group>
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
