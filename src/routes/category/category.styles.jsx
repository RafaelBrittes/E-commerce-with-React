import styled from "styled-components";

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

export const CategoryContainer = styled.h2`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
`;
