import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media (max-width: 980px) {
    margin: 0px;
    font-size: 15px;
    width: 100%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 25%;

  &:last-child {
    width: 8%;
  }
  @media (max-width: 580px) {
    display: none;
  }
`;
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media (max-width: 980px) {
    font-size: 20px;
  }
`;
