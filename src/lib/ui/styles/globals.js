import styled, { css } from "styled-components";
import { rgba, darken } from "polished";
import remy from "utils/remy";
import { defaultTheme } from "../themes";

export const globalStyles = css`{
  font-size: 100%;
  font-family: Lato,"Segoe UI","Helvetica Neue","Helvetica",Arial,sans-serif;
  box-sizing: border-box;
}`;

export const IconWrapper = styled.span.attrs(p => ({
	bgColor: p.bg ? "rgba(0,0,0,.1)" : "",
}))`
  display: inline-flex;
  text-align: center;
  background-color: ${p => p.bgColor}
  box-shadow: -1px 0 0 0 transparent inset;
  padding: .75em;
  ${p => (p.bg ? "" : "margin: 0 !important")}
`;

export const IconStyle = p => p.iconName && css`
    align-items: center;
    justify-content: center;
    display: ${(p.iconName ? "inline-flex" : "inline-block")};

    ${p.iconPosition === "left" && `
        padding: 0 ${remy(11)} 0 0;
        flex-flow: row-reverse;
    `};
    ${p.iconPosition === "right" && `
        padding: 0 0 0 ${remy(11)};
    `};

    /** changes iconWrapper */
    ${IconWrapper} {
      ${p.iconPosition === "left" && `
        border-radius: .3rem 0 0 .3rem;
        margin: 0 ${remy(11)} 0 0;
      `};
      ${p.iconPosition === "right" && `
        border-radius: 0 .3rem .3rem 0;
        margin: 0 0 0 ${remy(11)};
      `}
    }
  `;

export const buttonStyle = (type) => {
	const color = defaultTheme.COLOR[type];
	const bgColor = defaultTheme.BG_COLOR[type];
	return css`&{
    background: ${bgColor};
    color: ${rgba(color, 0.9)};
    /* border: solid ${darken("0.05", bgColor)} 1px; */
    &:hover {
      color: ${color};
      border-color: ${darken("0.1", bgColor)}
    }
    ${IconWrapper} {
      background-color: ${type === "secondary" ? "rgba(165,165,165,.1)" : ""};
    }
  }`;
};

export const base = css`
  &,
  &:link,
  &:visited {
    align-self: center;
    align-items: center;
    position: relative;
    display: flex;
    
    height: 2.5em;
    max-height: 3em;
    min-height:1em;
    
    margin:0;

    border:none;
    border: 1px solid transparent;
    vertical-align:baseline;

    color: rgba(0,0,0,.6);

    font-style:normal;
    font-weight: 500;

    text-align:center;
    text-decoration:none;
    text-shadow:none;
    text-transform:none;

    cursor:pointer;
    list-style: none;
    outline: 0;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;
    user-select:none;
    white-space: nowrap;

    overflow: hidden;

    box-shadow: 0 1px 2px 0 rgba(34,36,38,.2);
    border-radius: .3rem;
    background-color: rgba(238,238,238,1);
  }
  
  &:hover {
    color: rgba(0,0,0,.8);
    border: solid ${darken("0.2", "#dbdbdb")} 1px;
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
`;
