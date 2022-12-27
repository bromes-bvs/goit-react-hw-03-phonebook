import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);

  label {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: #313181a7;
    font-weight: 700;
    margin-bottom: 15px;
  }
  input {
    margin-top: 7px;
    border-radius: 6px;
    height: 25px;
    border: 2px solid #2071dbda;

    :focus-visible {
      outline: 2px solid #064aa1;
      background-color: #09f5ba10;
      /* outline: none; */
    }
  }
  button {
    margin: 0 auto;
    text-align: center;
    border-radius: 8px;
    width: 50%;
    height: 40px;
    font-size: 18px;
    color: #0b6ef0cc;
    background-color: #5d8ece1d;
    font-weight: 600;
    border: 2px solid #0fc5e6;

    :hover,
    :active {
      border: 2px solid #12ee9a;
      background-color: #0b6ef0cc;
      color: #fff;
    }
  }
`;

export default StyledContactForm;
