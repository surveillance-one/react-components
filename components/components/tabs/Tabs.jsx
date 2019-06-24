import React, {
 Children, cloneElement, useState, useCallback
} from "./node_modules/react";

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
	className = "",
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
				{Children.map(children, (child, i) => cloneElement(child, {
					item: i,
					onTabClick: useCallback(() => setActiveTab(i), [i]),
					currentTab: (activeTab === i)
				}))}
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

export default Tabs;
