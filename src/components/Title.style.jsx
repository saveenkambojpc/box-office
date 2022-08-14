import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  margin-top:30px;
  
  h1 {
    text-shadow:0px 0px 5px white;
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  p {
    color: ${({ theme }) => theme.mainColors.white};
    margin: 0;
  }
`;