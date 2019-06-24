import React from "react";
import styled from "styled-components";

const CardGroup = ({ children, className }) => (
	<div className={className}>{children}</div>
);

const CardGroupStyled = styled(CardGroup)`
  display: flex;
  justify-content: ${props => props.flex || "space-between"};
`;

export default CardGroupStyled;
