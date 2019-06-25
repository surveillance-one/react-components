import styled from "styled-components";
import * as Styles from "./styles";

import Dropdown from "./Dropdown";
import ListItem from "./List";


const StyledDropDown = styled(Dropdown)`
	/** Main Theme */
	${Styles.DropdownBase};
	${Styles.DropdownActive};
`;

const StyledListItem = styled(ListItem)`
	/** Main Theme */
	${Styles.ListBase};
`;

StyledDropDown.ListItem = StyledListItem;

export default StyledDropDown;
