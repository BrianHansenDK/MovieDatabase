import styled from 'styled-components';
import { SearchCard } from '../styled';

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      transition: all 250ms ease-out;
      &:hover {
        text-decoration-color: ${({ theme }) => theme.mainColors.blue};
        color: ${({ theme }) => theme.mainColors.blue};
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
      transition: all 250ms ease-out;
      &:hover {
        cursor: pointer;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.25);
        transform: scale3d(1.05, 1.05, 1);
      }
      &:active {
        transform: scale3d(0.95, 0.95, 1);
      }
    }
  }
`;
