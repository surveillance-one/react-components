import React, {
	Children, cloneElement, useState, useEffect
} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


import { defaultTheme } from "../ui/themes";
import {
	TabsList,
	TabsContent,
	Selector,
	TabListContainer
} from "./styles";

/**
 * @title Tabs component
 *
 * @summary Components/Tab is a simple Tab component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.1.0
 * @author [Markus Hudobnik](https://github.com/rnarkus)
 */

const TabGroup = ({
	children, className, active, primary, secondary, rounded, underline, slider, activeView, ...props
}) => {
	const [activeTab, setActiveTab] = useState(active);
	const [activeRef, setActiveRef] = useState({ width: "", left: "" });

	if (activeView) activeView(activeTab);

	return (
		<TabListContainer
			underline={underline}
			slider={slider}>
			<TabsList slider={slider}>
				{slider && <Selector width={activeRef.width} left={activeRef.left}></Selector>}
				{Children.map(children, (child, i) => cloneElement(child, {
					item: i,
					onTabClick: setActiveTab,
					onSendRef: setActiveRef,
					currentTab: (activeTab === i),
					primaryAll: primary,
					secondaryAll: secondary,
					roundedAll: rounded,
					underlineAll: underline,
					slider,
				}))}
			</TabsList>
			{!slider && <TabsContent slider={slider}>
				{Children.map(children, (child, i) => {
					if (i !== activeTab) return undefined;
					return child.props.children;
				})}
			</TabsContent>}
		</TabListContainer>
	);
};


/** Default Props */
TabGroup.defaultProps = {
	children: "",
	theme: defaultTheme.base,
	active: 0,
	underline: false,
	primary: false,
	secondary: false,
	rounded: false,
};


/** Prop Types */
TabGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	theme: PropTypes.object,
	active: PropTypes.number,
	underline: PropTypes.bool,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
	rounded: PropTypes.bool,
};


export default TabGroup;
