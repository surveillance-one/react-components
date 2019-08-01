/* eslint-disable one-var-declaration-per-line */
import React, { useCallback, useRef, useLayoutEffect } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "../icon";

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
	label, className, onTabClick, onSendWidth, onSendLeft, item, ...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		if (item === 0) {
			onSendWidth(ref.current.getBoundingClientRect().width);
			onSendLeft(ref.current.offsetLeft);
		}
	}, [item, onSendWidth, onSendLeft]);

	return (
		<li
			className={className}
			onClick={
				useCallback(() => {
					onTabClick(item);
					onSendWidth(ref.current.getBoundingClientRect().width);
					onSendLeft(ref.current.offsetLeft);
				}, [onTabClick, item, onSendLeft, onSendWidth])
			}
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
