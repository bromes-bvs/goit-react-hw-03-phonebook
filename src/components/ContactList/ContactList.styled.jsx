import styled from 'styled-components';
const StyledList = styled.ul`
  width: 500px;
  list-style: none;
  font-size: 18px;
  color: #e5f0f7;
  border-radius: 6px;
  font-weight: 500;
  padding: 15px 20px;
  background-color: #6ed0f6;

  li {
    background-color: #089bcf;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    padding: 3px 10px;
    :not(:last-child) {
      margin-bottom: 7px;
    }
    button {
      border-radius: 8px;
      padding-left: 15px;
      padding-right: 15px;
      height: 40px;
      font-size: 18px;
      color: #08408acc;
      background-color: #6ed0f6;
      font-weight: 600;
      border: 2px solid #0fc5e6;

      :hover,
      :active {
        border: 2px solid #12ee9a;
        background-color: #0b6ef0cc;
        color: #fff;
      }
    }
  }
`;

export default StyledList;
