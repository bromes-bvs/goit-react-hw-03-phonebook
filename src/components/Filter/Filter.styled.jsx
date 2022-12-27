import styled from 'styled-components';

const StyledFilter = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 22px;
  color: #1d1d36a7;
  font-weight: 700;
  margin-bottom: 15px;

  input {
    margin-top: 10px;
    border-radius: 4px;
    font-size: 20px;
    height: 35px;
    border: 1px solid #08b3a5da;

    :focus-visible {
      outline: 1px solid #067c4b;
      background-color: #94dad8d1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default StyledFilter;
