import styled from "styled-components";
import * as Styles from "./styles";
import { defaultTheme } from "../themes";

import Dropdown from "./Dropdown";


const StyledDropDown = styled(Dropdown)`
	/** Main Theme */
	${Styles.DropdownBase};
	${Styles.DropdownActive};
`;

StyledDropDown.defaultProps = {
	theme: defaultTheme
}


export default StyledDropDown;
