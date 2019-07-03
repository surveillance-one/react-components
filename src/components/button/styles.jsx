import styled, { css } from "styled-components";
import { rgba } from "polished";

import { globalStyles } from "ui/styles/globals";

/**
 * Styled components for Button.
 */


/**
 * Styled-Component
 * @name globalScoped
 * @see Button
 * @description Applies global styles like font size and line height and anything else you need to apply to the entire component
 *
 * @see globalStyles (ui/styles/global.js)
 */
export const globalScoped = css`
  ${globalStyles};
  padding: .79em 1em;
`;

/**
 * Styled-Component
 * @name btnLabel
 * @see Button (components/Button)
 * @description child of <button> that holds the label position
 *
 * @param {boolean} squared props => props.squared
 */
export const btnLabel = styled.span`
  ${props => props.squared && css`
    display: none !important;
  `};
`;

/**
 * Styled-Component
 * @name iconWrapper
 * @see Button (components/Button)
 * @description child of <button> that holds the the icons
 *
 * @param {string} iconPosition props => props.iconPosition
 * @param {boolean} squared props => props.squared
 * @param {boolean} circle props => props.circle
 */
export const iconWrapper = styled.span`
  position: absolute;
  text-align: center;
  top: 0;
  bottom: 0;
  margin: 0;
  /* width: 3.6rem; */
  background-color: rgba(0,0,0,.1);
  box-shadow: -1px 0 0 0 transparent inset;
  padding: .79em 1em;
  vertical-align: middle;
  order: 1;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  right: 0;

  /** ::before to help align icon */
  &::before {
    content: ' ';
    display: inline-block;
    vertical-align: middle;  /* vertical alignment of the inline element */
    height: 100%;
  }

  ${props => props.iconPosition === "right" && css`
    order: 1;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    right: 0;
  `};

  ${props => props.iconPosition === "left" && css`
    order: 0;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    left: 0;
  `};

  ${props => (props.squared || props.circle) && css`
    margin-right: 0;
    padding: 0;
    position: relative;
    background: none;
  `};
`;

/**
 * Button Base <button>
 */
export const ButtonBase = css`
  &,
  &:link,
  &:visited {
    cursor:pointer;
    position: relative;
    display: inline-block;
    min-height:1em;
    height: 2.5em;
    max-height: 3em;
    outline:0;
    border:none;
    vertical-align:baseline;
    font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin:0;
    text-transform:none;
    text-shadow:none;
    font-weight:700;

    font-style:normal;
    text-align:center;
    text-decoration:none;
    user-select:none;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;
    will-change:'';
    white-space: nowrap;
    overflow: hidden;

    color: ${props => props.theme.color || "black"};

    box-shadow: ${props => props.theme["default-box-shadow"] || "0 1px 2px 0 rgba(34,36,38,.15)"};
    border-radius: ${props => props.theme["default-border-radius"] || ".3rem"};
    background-color: ${props => props.theme["default-bg-lightgray"] || "lightgray"};
  }
  /**
  * Pseudo Classes
  * HOVER - ACTIVE - FOCUS - AFTER - DISABLED
  */ 
  &:hover {
    color:  ${props => props.theme["hover-color"] || "lightgray"};
  }

  &:active{
    outline: none;
  }

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

export const ButtonAnimations = css`
  &:active{
    transform: translateY(2px);
  }
`;

export const ButtonPrimary = css`&{
  ${({ theme }) => {
		const color = theme["primary-btn-color"];
		return css`
      background: ${theme["primary-btn-bg"]};
      color: ${color};
      &:hover {
        color: ${rgba(color, 0.8)}};
      }
  `;
	}}
}`;

export const ButtonSecondary = css`&{
  ${({ theme }) => {
		const color = theme["secondary-btn-color"];
		return css`
      background: ${theme["secondary-btn-bg"]};
      color: ${color};
      &:hover {
        color: ${rgba(color, 0.8)}};
      }
  `;
	}}
}`;

export const ButtonLarge = css`&{
  height: 4em;
  max-height: 5em;
  padding: 1.5em;
}`;

export const ButtonRounded = css`&{
  border-radius: 3rem;
}`;

export const ButtonSquared = css`&{
  height: 2.5em;
  width: 2.5em;
  display: inline;
  justify-content: center;
  padding: 1em !important;
  position: relative;
}`;

export const ButtonCircle = css`
  ${ButtonRounded};
  ${ButtonSquared};
`;

export const ButtonIcons = css`&{
  ${({ iconName, iconPosition }) => iconName && css`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    order: 1;
    padding-right: 4em;
    padding-left: 1.5em;

    ${iconPosition === "left" && css`
      padding-left: 4em;
      padding-right: 1.5em;
    `};

    ${iconPosition === "right" && css`
      padding-right: 4em;
      padding-left: 1.5em;
    `};
  `};
}`;
