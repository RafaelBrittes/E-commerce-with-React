import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0px;

    @media (max-width: 980px) {
      margin: 40px 0px;
    }
  }
  @media (max-width: 980px) {
    width: 280px;
  }
`;
