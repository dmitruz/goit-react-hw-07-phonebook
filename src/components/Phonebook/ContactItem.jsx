import toast from 'react-hot-toast';
import { useDeleteContactMutation } from '../../redux/Phonebook/ContactSlice';
import { LoaderSpinnerDots } from '../Spinner/Spinner';
import css from './Phonebook-css/ContactList.module.css';

export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li key={id} className={css.item}>
      <div>
        <span>{name}: </span>
        <span>{phone}</span>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          deleteContact(id);
          toast.success(`Contact '${name}' deleted`);
        }}
        disabled={isLoading}
      >
        {isLoading ? <LoaderSpinnerDots /> : 'delete'}
      </button>
    </li>
  );
}