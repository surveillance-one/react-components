
import styled, { css } from "styled-components";
import { rgba } from "polished";
import globalStyles from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";

/* *****************************TabGroup**************************** */

/**
 * Styled-Component CSS
 * @name TabsBase
 * @see Tabs (components/Tabs)
 * @description <Tabs> base styles
 *
 * @param {object} globalStyles global styles
 */
export const css_tabsbase = css`
	/** Global Styles */
	${globalStyles};
`;

/**
 * Styled-Component
 * @name TabsList
 * @see Tabs (components/Tabs)
 * @description <Tabs> child ordered list
 */
export const TabsList = styled.ol`
	display: flex;
	position: relative;
	padding-left: 0;

	margin: 1rem 0;
	border-radius: .3rem;

	font-weight: 400;

	background: none;
`;

/**
 * Styled-Component
 * @name TabsContent
 * @see Tabs (components/Tabs)
 * @description <Tabs> child, displays content
 */
export const TabsContent = styled.div`
	position: relative;

	margin: 1rem 0;
	padding: 1.1rem;
	border: solid 1px #f0f0f0;
	border-radius: .3rem;

	background: rgb(255,255,255);
	box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);

	/** fix for random Margin TODO: find source of margin on <p> tags */
	* {
		margin: auto;
	}

`;

/* ******************************Tab**************************** */

/**
 * Styled-Component CSS
 * @name TabBase
 * @see Tabs (components/Tabs)
 * @description <Tab> base styles
 *
 * @param {object} globalStyles global styles
 */
export const css_tabbase = css`
	/** Global Styles */
	${globalStyles};
	align-self: center;
	position: relative;
	display: flex;
	vertical-align:baseline;

	height: 2.5em;
	max-height: 3em;
	min-height: 1em;

	margin:0;
	padding: calc(.375em - 1px) .75em;

	border: none;
	box-shadow: none;
	border-radius: .3rem;
	color: rgba(0,0,0,.6);

	font-style:normal;
	font-weight: 500;

	text-align:center;
	text-decoration:none;
	text-shadow:none;
	text-transform:none;

	cursor:pointer;
	list-style: none;
	outline:0;
	transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;
	user-select:none;
	white-space: nowrap;

	&:first-child {
		margin-right: .36em;
	}
	&:last-child {
		margin-left: .36em;
	}
	&:not(:first-child):not(:last-child) {
		margin: 0 .36em;
	}	
	
	&:hover {
		background-color: rgba(224,225,226,1);
		box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
		color: rgba(0,0,0,.6);
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

/**
 * Styled-Component
 * @name TabLabel
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> label
 */
export const TabLabel = styled.span`
  display: block;
  position: static;
	vertical-align: middle;
	margin: auto;
`;

/**
 * Styled-Component
 * @name IconWrapper
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> icon wrapper
 */
export const IconWrapper = styled.span`
  display: table-cell;

  /** padding: .75em; */

  text-align: center;


  box-shadow: -1px 0 0 0 transparent inset;
`;

/**
 * Styled-Component
 * @name TabIcons
 * @see Tab (components/Tab)
 * @description <Tabs.Tab> Icon
 */
export const css_tabicons = css`
  display: ${p => (p.iconName ? "inline-flex" : "inline-block")};
  align-items: center;
  justify-content: center;
  flex-flow: ${p => (p.iconPosition === "left" ? "row-reverse" : "auto")};
	
  /** padding-right: ${p => (p.iconPosition === "left" ? ".75em" : "0")}; */
  /** padding-left: ${p => (p.iconPosition === "left" ? "0" : ".75em")}; */

  /** changes IconWrapper */
  ${IconWrapper} {
    margin: ${p => (p.iconPosition === "left" ? "0 .4em 0 0" : "0 0 0 .4em")};
  }
`;

/**
 * Styled-Component CSS
 * @name showIconOnlyOnActive
 * @see Tab (components/Tabs)
 * @description <Tab> shows the icon only when Active
 *
 * @param {object} IconWrapper CSS-in-JS
 */
export const css_showicononlyonactive = css`
	&:not(:hover) > ${IconWrapper} {
		visibility: hidden;
		opacity: 0;

		margin-right: ${p => (p.iconPosition === "right" ? "-15px" : "initial")}
		margin-left: ${p => (p.iconPosition === "left" ? "-15px" : "initial")}
	}
	&:hover > ${IconWrapper} {
		visibility: visible;
		opacity: 1;
		margin-right: ${p => (p.iconPosition === "right" ? "0" : "inherit")}
		margin-left: ${p => (p.iconPosition === "left" ? "0" : "inherit")}
		transition: visibility 0.5s, opacity 0.5s, margin-right 0.1s, margin-left 0.1s linear;
	}
`;

/**
 * Styled-Component CSS
 * @name tabCurrent
 * @see Tab (components/Tabs)
 * @description <Tab> shows the Active tab
 */
export const css_tabcurrent = css`
	background: rgba(224,225,226,1);
	color: rgba(0,0,0,.6);
	box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);

	&::after {
		content: "";
		position: absolute;
		top: 99%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
		
		box-sizing: border-box;
		width: .6em;
		height: .6em;

		margin: .5px 0 0;
		border-bottom: solid 1px rgba(224,225,226,1);
		border-right: solid 1px rgba(224,225,226,1);

		background: rgba(224,225,226,1);
		
		z-index: 1;
	}
`;

/**
 * Styled-Component CSS
 * @name tabStyle
 * @see Tab (components/Tabs)
 * @description <Tab> Styles the tabs
 *
 * @param {string} type
 */
export const tabStyle = (type) => {
	const color = defaultTheme.COLOR[type];
	const bgColor = defaultTheme.BG_COLOR[type];
	return css`&{
		color: ${p => (p.currentTab ? color : "")};
		background: ${p => (p.currentTab ? bgColor : "")};
		&:hover {
			color: ${rgba(color, 0.8)};
			background: ${bgColor};
		}
		&::after {
			background: ${bgColor};
			border-bottom-color: ${bgColor};
			border-right-color: ${bgColor};
		}
	}`;
};

/**
 * Styled-Component CSS
 * @name tabRounded
 * @see Tab (components/Tabs)
 * @description <Tab> Styles the tabs
 *
 * @param {string} type
 */
export const css_tabrounded = css`
	border-radius: 3rem;
`;

/**
 * Styled-Component CSS
 * @name tabRounded
 * @see Tab (components/Tabs)
 * @description <Tab> Styles the tabs
 *
 * @param {string} type
 */
export const css_tabcurrentunderline = css`
	color: black;
	font-weight: 700;
	border-bottom: 1px solid black;
	border-radius: 0;
`;