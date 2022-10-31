import styled from 'styled-components';

export const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 2px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  font-weight: 700;
  border-radius: 15px;
  color: #8d8d8d;
  transition: all 250 ease-out;

  &::placeholder {
    font-weight: 700;
    color: #bbb;
  }
  &:hover {
    box-shadow: 0 0 18px 1px rgba(219, 219, 219, 0.5);
  }
  &:focus {
    border-color: ${({ theme }) => theme.mainColors.blue};
    box-shadow: 0 0 18px 1px rgba(219, 219, 219, 0.5);
  }
`;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  div {
    margin: 0 15px;
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;

  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    transform: scale3d(1.25, 1.25, 1);
    transition: all 250ms ease-out;
    &:hover {
      cursor: pointer;
      transform: scale3d(1.2, 1.2, 1);
      font-size: 14px;
    }
  }
`;
