import PropTypes from 'prop-types';

export default function ContactItem({ name, number, deleteContact }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
