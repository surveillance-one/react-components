import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "../icon";

import {
	TabLabel,
	IconWrapper,
	css_tabbase,
	css_tabcurrentunderline,
	css_tabcurrent,
	css_tabicons,
	css_showicononlyonactive,
	css_tabrounded,
	tabStyle
} from "./styles";

const TabComponent = ({
	label, className, onTabClick, item, ...props
}) => (
	<li
		className={className}
		onClick={useCallback(() => onTabClick(item), [onTabClick, item])}
		key={item}>
		<TabLabel>{label}</TabLabel>
		{props.iconName && <IconWrapper><Icon icon={props.iconName}/></IconWrapper>}
	</li>
);

const Tab = styled(TabComponent)`
	${css_tabbase}

	/** Current Tab */
	${p => (p.currentTab && (p.underlineAll || p.underline)) && css_tabcurrentunderline};
	${p => (p.currentTab && (!p.underlineAll && !p.underline)) && css_tabcurrent};

	/** Tab Icons */
	${p => p.iconName && css_tabicons};

	/** showIconOnlyOnActive */
	${p => p.showIconOnlyOnActive && !p.currentTab && css_showicononlyonactive}

	/** Color Variants 
	* order matters, bottom overrides above for the themes
	*/
	${p => (!p.underlineAll && !p.underline) && css`
		${p => (p.secondaryAll || p.secondary) && tabStyle("secondary")}
		${p => (p.primaryAll || p.primary) && tabStyle("primary")}
	`}

	/** Styles */
	${p => (p.roundedAll || p.rounded) && css_tabrounded}
`;

/** Default Props */
Tab.defaultProps = {
	label: "Tab",
	iconName: "",
	iconPosition: "right",
	secondary: false,
	primary: false,
	rounded: false,
	underline: false,
	showIconOnlyOnActive: false,
};

/** Prop Types */
Tab.propTypes = {
	label: PropTypes.string.isRequired,
	iconName: PropTypes.string,
	iconPosition: PropTypes.string,
	secondary: PropTypes.bool,
	primary: PropTypes.bool,
	rounded: PropTypes.bool,
	underline: PropTypes.bool,
	showIconOnlyOnActive: PropTypes.bool,
};

export default Tab;
