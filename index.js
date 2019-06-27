import styled, { createGlobalStyle, css } from "styled-components";

import Tabs from "./components/tabs";
import Dropdown from "./components/dropdown";
import Button from "./components/button/Button";
import Icon from "./components/icon/Icon";
import Card from "./components/card/Card";
import CardGroup from "./components/card/CardGroup";

const globalStyles = css`&{
	background-color: blue !important;
}`;

const update = styled(Button)`
	${globalStyles}
`;

export default update;
