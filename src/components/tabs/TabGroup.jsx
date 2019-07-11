import React, {
	Children, cloneElement, useState, useCallback
} from "react";
import theme from "ui/themes";
import styled from "styled-components";
import * as Styles from "./styles";

/**
 * @title Tabs component
 *
 * @summary Components/Tab is a simple Tab component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.0.0
 * @author [Markus Hudobnik](https://github.com/rnarkus)
 */

const TabGroup = ({
	children = "",
	className = "",
	pilled = false,
	active = 0,
	primary = false,
	secondary = false,
	rounded = false,
	...props
}) => {
	const [activeTab, setActiveTab] = useState(active);

	return (
		<div className={className} {...props}>
			<Styles.TabsList>
				{Children.map(children, (child, i) => cloneElement(child, {
					item: i,
					onTabClick: useCallback(() => setActiveTab(i), [i]),
					currentTab: (activeTab === i),
					primary,
					secondary,
					rounded
				}))}
			</Styles.TabsList>
			<Styles.TabsContent>
				{Children.map(children, (child, i) => {
					if (i !== activeTab) return undefined;
					return child.props.children;
				})}
			</Styles.TabsContent>
		</div>
	);
};

const StyledTabGroup = styled(TabGroup)`
	${Styles.TabsBase}
`;

StyledTabGroup.defaultProps = {
	theme: theme.base
};

export default StyledTabGroup;
