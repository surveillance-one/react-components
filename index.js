import styled, { createGlobalStyle, css } from "styled-components";

import StyledTabs from "./components/tabs";
import StyledDropdown from "./components/dropdown";
import StyledButton from "./components/button/Button";
import StyledIcon from "./components/icon/Icon";
import StyledCard from "./components/card/Card";
import StyledCardGroup from "./components/card/CardGroup";

const globalStyles = css`&{
	background-color: blue !important;
}`;

export const Button = styled(StyledButton)`
	${globalStyles}
`;
export const Tabs = styled(StyledTabs)`
	${globalStyles}
`;
export const Dropdown = styled(StyledDropdown)`
	${globalStyles}
`;
export const Icon = styled(StyledIcon)`
	${globalStyles}
`;
export const Card = styled(StyledCard)`
	${globalStyles}
`;
export const CardGroup = styled(StyledCardGroup)`
	${globalStyles}
`;
