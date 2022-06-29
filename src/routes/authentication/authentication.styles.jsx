import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media (max-width: 980px) {
    width: 40%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-around;
  }
`;
