import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  h2 {
    margin: 10px 0px;
  }
  @media (max-width: 980px) {
    width: 280px;
    Button{
      justify-content: space-around;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    justify-content: space-around;
  }
`;