import styled from "styled-components";
import { defaultTheme } from "ui/themes";
import * as Styles from "./styles";

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
