/* eslint-disable one-var-declaration-per-line */
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "../icon";

import useRefWidth from "../hooks/useRefWidth";
import useCallbackTab from "../hooks/useCallbackTab";

// version 1.1

import {
	TabLabel,
	IconWrapper,
	css_tabbase,
	css_tabcurrentunderline,
	css_tabcurrent,
	css_tabicons,
	css_showicononlyonactive,
	css_tabrounded,
	css_slider,
	tabStyle
} from "./styles";

const TabComponent = ({
	label, className, onTabClick, onSendRef, item, slider, onClick, ...props
}) => {
	const ref = useRef(null);
	useRefWidth(item, onSendRef, ref, slider, props.currentTab);
	console.log(props.currentTab);

	const cb = useCallbackTab(item, onSendRef, onTabClick, ref, onClick, slider);
	return (
		<li
			className={className}
			onClick={cb}
			key={item}
			current={props.currentTab.toString()}
			tabIndex={item}
			ref={ref}>
			<TabLabel>{label}</TabLabel>
			{props.iconName && <IconWrapper><Icon icon={props.iconName}/></IconWrapper>}
		</li>
	);
};

const Tab = styled(TabComponent)`
	${css_tabbase}

	/** Current Tab */
	${p => (p.currentTab && (p.underlineAll || p.underline)) && css_tabcurrentunderline};
	${p => (p.currentTab && (!p.underlineAll && !p.underline) && !p.slider) && css_tabcurrent};

	/** Tab Icons */
	${p => p.iconName && css_tabicons};

	/** showIconOnlyOnActive */
	${p => p.showIconOnlyOnActive && !p.currentTab && css_showicononlyonactive}

	/** Color Variants 
	* order matters, bottom overrides above for the themes
	*/
	${p => (!p.underlineAll && !p.underline) && css`
		${(p.secondaryAll || p.secondary) && tabStyle("secondary")}
		${(p.primaryAll || p.primary) && tabStyle("primary")}
	`}

	/** Styles */
	${p => (p.roundedAll || p.rounded) && css_tabrounded}

	${p => p.slider && css_slider};
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
	slider: false,
	onSendRef: () => {},
	onClick: () => {},
	onTabClick: () => {}
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
	slider: PropTypes.bool,
	onSendRef: PropTypes.func,
	onClick: PropTypes.func,
	onTabClick: PropTypes.func,
};

export default Tab;
