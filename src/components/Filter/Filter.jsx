import StyledFilter from './Filter.styled';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <StyledFilter>
      Finde contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </StyledFilter>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
