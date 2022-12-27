import ContactItem from './ContactItem';
import StyledList from './ContactList.styled';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </StyledList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
