import React, {
	Children, cloneElement, useState, useCallback
} from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "Components";

import * as Styles from "./styles";

/**
 * @title Tabs component
 *
 * @summary Components/Tab is a simple Tab component using Styled Components and made for reusability
 * @see StyledComponents
 * @see FontAwesome
 *
 * @version 1.0.0
 * @author [Markus Hudobnik](https://github.com/rnarkus)
 */

const Tabs = ({
	children = "",
	className= "",
	iconName = "",
	iconPosition = "",
	pilled = false,
	rounded = false,
	squared = false,
	largeButton = false,
}) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={className}>
			<ol className="tab__list">
				{Children.map(children, (child, i) => cloneElement(child, { item: i, activeTab, setActiveTab }))}
			</ol>
			<div>
				{Children.map(children, (child, i) => {
					if (i !== activeTab) return undefined;
					return child.props.children;
				})}
			</div>
		</div>
	);
};

Tabs.Tab = ({
	label, iconName, iconPosition, item, activeTab, setActiveTab
}) => {
	const onTabClick = useCallback(() => setActiveTab(item), [item]);
	return (
		<li className={`tab__list--item ${}`} active={activeTab === item} iconPosition={iconPosition}
			onClick={onTabClick}>
			{label} {iconName && <Icon icon={iconName}/>}
		</li>
	);
};

const StyledTabs = styled(Tabs)`
	/** Main Theme */
	${Styles.TabsBase};
`;

// DEFAULT

// Tabs.propTypes = {
// 	children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };

// Tabs.Tab.propTypes = {
// 	label: PropTypes.string.isRequired,
// };

// Tabs.defaultProps = {

// };

// Tabs.Tab.defaultProps = {
// 	iconName: "",
// 	iconPosition: "",
// };


export default Tabs;





import React, { Children, cloneElement, useState, useCallback } from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "Components";

import * as Styles from "./styles";

/**
 * @title Tabs component
 *
 * @summary Components/Tab is a simple Tab component using Styled Components and made for reusability
 * @see StyledComponents
 * @see FontAwesome
 *
 * @version 1.0.0
 * @author [Markus Hudobnik](https://github.com/rnarkus)
 */

const Tabs = ({
	children = "",
	className= "",
	iconName = "",
	iconPosition = "",
	pilled = false,
	rounded = false,
	squared = false,
	largeButton = false,
}) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={className}>
			<ol className="tab__list">
				{Children.map(children, (child, i) => cloneElement(child, { item: i, activeTab, setActiveTab }))}
			</ol>
			<div className="tab__content">
				{Children.map(children, (child, i) => {
					if (i !== activeTab) return undefined;
					return child.props.children;
				})}
			</div>
		</div>
	);
};

const Tab = ({
	label, iconName, iconPosition, item, activeTab, setActiveTab, className
}) => {
	const onTabClick = useCallback(() => setActiveTab(item), [item]);
	return (
		<li className={className} active={activeTab === item} iconPosition={iconPosition}
			onClick={onTabClick}>
			{label} {iconName && <Icon icon={iconName}/>}
		</li>
	);
};


Tabs.Tab = Tab;

const StyledTabs = styled(Tabs)`
	/** Main Theme */
	${Styles.TabsBase};
`;

const StyledTab = styled(Tab)`
	/** Main Theme */
	${Styles.TabsBase};
`;

// DEFAULT

// Tabs.propTypes = {
// 	children: PropTypes.arrayOf(PropTypes.node).isRequired,
// };

// Tabs.Tab.propTypes = {
// 	label: PropTypes.string.isRequired,
// };

// Tabs.defaultProps = {

// };

// Tabs.Tab.defaultProps = {
// 	iconName: "",
// 	iconPosition: "",
// };


export default Tabs;
