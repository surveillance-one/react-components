import React from "react";
import styled from "styled-components";

const CardGroupStyled = styled.div`
  display: flex;
  justify-content: ${props => props.flex || "space-between"};
`;

const CardGroup = ({ children }) => (
  <CardGroupStyled>{children}</CardGroupStyled>
);
export default CardGroup;
