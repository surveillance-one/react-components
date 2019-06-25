import { css } from "styled-components";
import { rgba } from "../tabs/node_modules/polished";

export const ButtonBase = css`
  font-size: ${props => props.theme["default-font-size"] || "1rem"};
  &,
  &:link,
  &:visited {
    cursor:pointer;
    position: relative;
    display: inline-block;
    min-height:1em;
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
    padding: ${props => props.theme["default-padding"] || ".79em 1em .79em 1em"};
    box-shadow: ${props => props.theme["default-box-shadow"] || "0 1px 2px 0 rgba(34,36,38,.15)"};
    line-height: ${props => props.theme["default-line-height"] || "1em"};
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
	`; }}
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
	`; }}
}`;

export const ButtonLarge = css`&{
  padding: 0 2rem;
  height: 4.6rem;
}`;

export const ButtonRounded = css`&{
  border-radius: 3rem;
}`;

export const ButtonSquared = css`&{
  height: 3.6rem;
  width: 3.6rem;
  padding: 0;
  display: inline;
  justify-content: center;
  span {
    margin-right: 0;
    font-size: 1.786rem;
  }
}`;

export const ButtonIcons = css`&{
  ${({ iconName, iconPosition }) => iconName && css`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    order: 1;
		padding-right: 4em !important;
    padding-left: 1.5em !important;

    

    ${iconPosition == "left" && css`
      padding-left: 4em !important;
      padding-right: 1.5em !important;
    `};

    ${iconPosition == "right" && css`
      padding-right: 4em !important;
      padding-left: 1.5em !important;
    `};

    .icon-wrapper{
      position: absolute;
      text-align: center;
      margin: 0;
      width: 3.6rem;
      background-color: rgba(0,0,0,.1);
      box-shadow: -1px 0 0 0 transparent inset;
      line-height: 1.4rem;
      height: 100%;
      padding: ${props => props.theme["default-padding-tb"] || ".79em 1em .79em 1em"};
      vertical-align: middle;
			order: 1;
			border-top-right-radius: inherit;
			border-bottom-right-radius: inherit;
			right: 0;

      &::before {
        content: ' ';
    display: inline-block;
    vertical-align: middle;  /* vertical alignment of the inline element */
    height: 100%;
      }

      ${iconPosition == "right" && css`
        order: 1;
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
        right: 0;
      `};

      ${iconPosition == "left" && css`
        order: 0;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
        left: 0;
      `};
    };
  `};
}`;
