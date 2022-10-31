import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: capitalized;
    margin: 0 0 10px;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;

export const CreatorTxt = styled.p`
  margin-top: 15px !important;
  font-size: 14px;
  text-align: center;
`;
