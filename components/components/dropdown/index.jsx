import styled from "styled-components";
import * as Styles from "./styles";

import DropDown from "./DropDown";
import ListItem from "./List";


const StyledDropDown = styled(DropDown)`
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
