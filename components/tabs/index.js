import * as PropTypes from "prop-types";
import styled from "styled-components";
import * as Styles from "./styles";
import { defaultTheme } from "../themes";

import Tabs from "./Tabs";
import Tab from "./Tab";


const StyledTabs = styled(Tabs)`
	/** Main Theme */
	${Styles.TabsBase};
	
	/** Color Variants */
	${props => (props.primary && !props.secondary ? Styles.TabsPrimary : "")};
	${props => (props.secondary && !props.primary ? Styles.TabsSecondary : "")};
`;

const StyledTab = styled(Tab)`
	/** Main Theme */
	${Styles.TabBase};


	/** Active Tab */
	${props => (props.currentTab ? Styles.TabCurrent : "")};

	/** Icons */
	${props => (props.iconName ? Styles.TabIcons : "")}

	/** Icon only on Active/Hover */
	${props => (props.showIconOnlyOnActive ? Styles.showIconOnlyOnActive : "")}
`;

StyledTabs.Tab = StyledTab;

StyledTabs.defaultProps = {
	theme: defaultTheme
}

export default StyledTabs;