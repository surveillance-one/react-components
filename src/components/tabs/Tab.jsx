import React from "react";
import styled, { css } from "styled-components";
import Icon from "components/icon";
import PropTypes from "prop-types";
import * as sc from "./styles";

const TabComponent = ({
	label, className, onTabClick, item, ...props
}) => (
	<li className={className} onClick={onTabClick} key={item}>
		<sc.TabLabel>{label}</sc.TabLabel>
		{props.iconName && <sc.IconWrapper><Icon icon={props.iconName}/></sc.IconWrapper>}
	</li>
);

const Tab = styled(TabComponent)`
	${sc.css_tabbase}

	/** Current Tab */
	${p => ((p.currentTab && (p.underlineAll || p.underline)) ? sc.css_tabcurrentunderline : "")};
	${p => ((p.currentTab && (!p.underlineAll && !p.underline)) ? sc.css_tabcurrent : "")};

	/** Tab Icons */
	${p => (p.iconName ? sc.css_tabicons : "")};

	/** showIconOnlyOnActive */
	${p => (p.showIconOnlyOnActive && !p.currentTab ? sc.css_showicononlyonactive : "")}

	/** Color Variants 
	* order matters, bottom overrides above for the themes
	*/
	${p => (!p.underlineAll && !p.underline) && css`
		${p => ((p.secondaryAll || p.secondary) ? sc.tabStyle("secondary") : "")}
		${p => ((p.primaryAll || p.primary) ? sc.tabStyle("primary") : "")}
	`}

	/** Styles */
	${p => ((p.roundedAll || p.rounded) ? sc.css_tabrounded : "")}
`;

/** Default Props */
Tab.defaultProps = {
	iconPosition: "right",
	label: "Tab"
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
