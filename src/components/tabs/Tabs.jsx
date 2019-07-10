import React, {
 Children, cloneElement, useState, useCallback
} from "react";
import { defaultTheme } from "ui/themes";
import styled from "styled-components";
import Icon from "components/icon";
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
	className = "",
	pilled = false,
	rounded = false,
	squared = false,
	largeButton = false,
	...props
}) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={className} {...props}>
			<Styles.TabsList>
				{Children.map(children, (child, i) => cloneElement(child, {
					item: i,
					onTabClick: useCallback(() => setActiveTab(i), [i]),
					currentTab: (activeTab === i)
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

const Tab = ({
	label, className, onTabClick, item, ...props
}) => (
	<li className={className} onClick={onTabClick} key={item} {...props}>
		<Styles.TabLabel>{label}</Styles.TabLabel>
		{props.iconName && <Styles.IconWrapper><Icon icon={props.iconName}/></Styles.IconWrapper>}
	</li>
);

const StyledTabs = styled(Tabs)`
	${Styles.TabsBase}

`;

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
`;

StyledTabs.Tab = StyledTab;

StyledTabs.defaultProps = {
	theme: defaultTheme
};

StyledTabs.Tab.defaultProps = {
	iconPosition: "right"
};

export default StyledTabs;
