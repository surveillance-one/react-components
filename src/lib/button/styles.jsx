import styled, { css } from "styled-components";
import { rgba } from "polished";

import globalStyles from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";

/**
 * Styled components for Button.
 */

/**
 * Styled-Component
 * @name btnLabel
 * @see Button (components/Button)
 * @description child of <button> that holds the label position
 *
 * @param {boolean} squared p => p.squared
 */
export const BtnLabel = styled.span`
  display: block;
  position: static;
`;

/**
 * Styled-Component
 * @name iconWrapper
 * @see Button (components/Button)
 * @description child of <button> that holds the the icons
 *
 * @param {string} iconPosition p => p.iconPosition
 * @param {boolean} squared p => p.squared
 * @param {boolean} circle p => p.circle
 */
export const IconWrapper = styled.span`
  display: inline-flex;
  text-align: center;
  background-color: rgba(0,0,0,.1);
  box-shadow: -1px 0 0 0 transparent inset;
  padding: .75em;
  
`;

/**
 * Styled-Component CSS
 * @name ButtonBase
 * @see Button (components/Button)
 *
 * @description <button> base styles
 */
export const css_buttonbase = css`
  /** Global Styles */
  ${globalStyles};

  /** Per-componenet parent styles */
  padding: calc(.375em - 1px) .75em;
  &,
  &:link,
  &:visited {
    cursor:pointer;
    position: relative;
    min-height:1em;
    
    height: 2.5em;
    max-height: 3em;
    outline:0;
    border:none;
    vertical-align:baseline;
    margin:0;
    text-transform:none;
    text-shadow:none;
    font-weight: 500;
    font-style:normal;
    text-align:center;
    text-decoration:none;
    user-select:none;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;
    white-space: nowrap;
    overflow: hidden;

    color: ${p => p.theme.color || "black"};
    box-shadow: ${p => p.theme["default-box-shadow"] || "0 1px 2px 0 rgba(34,36,38,.15)"};
    border-radius: .3rem;
    background-color: ${p => p.theme["default-bg-lightgray"] || "lightgray"};
  }
  /**
  * Pseudo Classes
  * HOVER - ACTIVE - FOCUS - AFTER - DISABLED
  */ 
  &:hover {
    color:  ${p => p.theme["hover-color"] || "lightgray"};
  }

  &:active,
  &:focus {
    outline: none;
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }

  &:disabled {
    cursor: not-allowed;
    transition: initial;
    transform: initial;

  }

  &:active{
    transform: translateY(2px);
  }
`;

export const css_buttonanimations = css`
  &:active{
    transform: translateY(2px);
  }
`;

/**
 * Styled-Component CSS
 * @name buttonStyle
 * @see Button (components/Button)
 * @description <Button> Styles the Button
 *
 * @param {string} type
 */
export const buttonStyle = (type) => {
	const color = defaultTheme.COLOR[type];
	const bgColor = defaultTheme.BG_COLOR[type];
	return css`&{
		background: ${bgColor};
		color: ${color};
		&:hover {
			color: ${rgba(color, 0.8)};
		}
    ${IconWrapper} {
      background-color: ${type === "secondary" ? "rgba(165,165,165,.1)" : ""};
    }
	}`;
};

export const css_buttonrounded = css`&{
  border-radius: 3rem;
  padding: calc(.375em - 1px) 1em;
  padding-right: ${p => (p.iconName && (p.iconPosition === "left" ? "1em !important" : "0 !important"))};
  padding-left: ${p => (p.iconName && (p.iconPosition === "left" ? "0 !important" : "1em !important"))};
}`;

export const css_buttonsquared = css`&{
  justify-content: center;
  padding: .75em !important;
  display: inline-flex;
  margin: 0;
  
  ${IconWrapper} {
    background: ${p => ((p.squared || p.circle) ? "none" : "")};
    padding: ${p => ((p.squared || p.circle) ? "0" : ".75")};
    margin: 0;
    display: block;
  }
}`;

export const css_buttoncircle = css`
  ${css_buttonrounded};
  ${css_buttonsquared};
`;

export const css_buttonicons = css`
  align-items: center;
  justify-content: center;
  display: ${p => (p.iconName ? "inline-flex" : "inline-block")};
  flex-flow: ${p => (p.iconPosition === "left" ? "row-reverse" : "auto")};
  padding-right: ${p => (p.iconPosition === "left" ? ".75em" : "0")};
  padding-left: ${p => (p.iconPosition === "left" ? "0" : ".75em")};

  /** changes iconWrapper */
  ${IconWrapper} {
    border-radius: ${p => (p.iconPosition === "left" ? ".3rem 0 0 .3rem" : "0 .3rem .3rem 0")};
    margin: ${p => (p.iconPosition === "left" ? "0 .75em 0 0" : "0 0 0 .75em")};
  }
`;
