import styled from "styled-components";
import { defaultTheme } from "ui/themes";
import * as Styles from "./styles";

import Dropdown from "./Dropdown";


const StyledDropdown = styled(Dropdown)`
	/** Main Theme */
	${Styles.DropdownBase};
	${Styles.DropdownActive};
`;

StyledDropdown.defaultProps = {
	theme: defaultTheme
}


export default StyledDropdown;
