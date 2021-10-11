import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from "react";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { useDispatch, useSelector } from 'react-redux';

  const  ContactForm = ()=>{
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handlerChange = event => {
    const { name, value } = event.currentTarget;
     switch (name) {
        case 'name':
          setName(value)
          break;
        
        case 'number':
          setNumber(value)
          break;
        
        default:
          break;
      }
    };
    const submitForm = event => {
      event.preventDefault();
      const isContactExist = 
        contacts.find(contact=>contact.name.toLowerCase()===name.toLowerCase())
      if (isContactExist) {
        alert(`${isContactExist.name} is already in contact`);
        reset();
        return;
      }
      dispatch(contactsOperations.addContacts(name, number));
        reset();
    }
      function reset() {
          setName('');
          setNumber('');
        }
  
  return (
     <>
        {/* <h2 className={s.title}>Phonebook</h2> */}
          <Form
        onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
            Name
            {/* <input className={s.input}
              
            /> */}
          </Form.Label>
          <Form.Control
              placeholder="Enter name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={handlerChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>
            Number
          </Form.Label>
          <Form.Control
              placeholder="Number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={handlerChange}
          />
        </Form.Group>
          <Button variant="primary" type="submit"> Add contacts</Button>
          </Form>
      </>)

 
 }


export default ContactForm;