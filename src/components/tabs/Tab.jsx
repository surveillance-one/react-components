import React from "react";
import styled from "styled-components";
import Icon from "components/icon";
import PropTypes from "prop-types";
import * as Styles from "./styles";

const Tab = ({
	label, className, onTabClick, item, ...props
}) => (
	<li className={className} onClick={onTabClick} key={item} {...props}>
		<Styles.TabLabel>{label}</Styles.TabLabel>
		{props.iconName && <Styles.IconWrapper><Icon icon={props.iconName}/></Styles.IconWrapper>}
	</li>
);

const StyledTab = styled(Tab)`
	${Styles.TabBase}

	/** Current Tab */
	${p => (p.currentTab ? Styles.tabCurrent : "")};

	/** Tab Icons */
	${p => (p.iconName ? Styles.tabIcons : "")};

	/** showIconOnlyOnActive */
	${p => (p.showIconOnlyOnActive && !p.currentTab ? Styles.showIconOnlyOnActive : "")}

	/** Color Variants */
	${p => (p.primary && !p.secondary ? Styles.tabStyle("primary") : "")};
	${p => (p.secondary && !p.primary ? Styles.tabStyle("secondary") : "")};

	/** Styles */
	${p => (p.rounded ? Styles.tabRounded : "")}
`;

StyledTab.defaultProps = {
	iconPosition: "right"
};

/** Props */
StyledTab.propTypes = {
	label: PropTypes.string.isRequired,
};

export default StyledTab;
