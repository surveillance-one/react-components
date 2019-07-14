import React, {
	Children, cloneElement, useState, useCallback
} from "react";
import { defaultTheme } from "ui/themes";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as sc from "./styles";

/**
 * @title Tabs component
 *
 * @summary Components/Tab is a simple Tab component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.0.0
 * @author [Markus Hudobnik](https://github.com/rnarkus)
 */

const TabGroupComponent = ({
	children = "",
	className = "",
	active = 0,
	primary,
	secondary,
	rounded,
	underline,
	...props
}) => {
	const [activeTab, setActiveTab] = useState(active);

	return (
		<div className={className} {...props}>
			<sc.TabsList>
				{Children.map(children, (child, i) => cloneElement(child, {
					item: i,
					onTabClick: useCallback(() => setActiveTab(i), [i]),
					currentTab: (activeTab === i),
					primaryAll: primary,
					secondaryAll: secondary,
					roundedAll: rounded,
					underlineAll: underline,
				}))}
			</sc.TabsList>
			<sc.TabsContent>
				{Children.map(children, (child, i) => {
					if (i !== activeTab) return undefined;
					return child.props.children;
				})}
			</sc.TabsContent>
		</div>
	);
};

const TabGroup = styled(TabGroupComponent)`
	${sc.css_tabsbase}
`;

/** Default Props */
TabGroup.defaultProps = {
	theme: defaultTheme.base
};


/** Prop Types */
TabGroup.propTypes = {
	secondary: PropTypes.bool,
	primary: PropTypes.bool,
	rounded: PropTypes.bool,
	underline: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
};


export default TabGroup;
