import styled, { css } from "styled-components";
import { rgba, darken } from "polished";

import globalStyles from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";

export const BtnLabel = styled.span`
  display: block;
  position: static;
`;

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

export const ButtonContainer = styled.button`
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
    /* border: solid rgba(224,225,226,1) 1px; */
    border: 1px solid transparent;
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

    color: rgba(0,0,0,.6);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.2);
    border-radius: .3rem;
    background-color: rgba(224,225,226,1),
  }

  ${p => p.iconName && css`
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
  `}

  ${p => p.primary && !p.secondary && buttonStyle("primary")};
	${p => p.secondary && !p.primary && buttonStyle("secondary")};

  ${p => ((p.rounded && !p.squared) || p.circle) && css`&{
    border-radius: 3rem;
    padding: calc(.375em - 1px) 1em;
    padding-right: ${p => (p.iconName && (p.iconPosition === "left" ? "1em !important" : "0 !important"))};
    padding-left: ${p => (p.iconName && (p.iconPosition === "left" ? "0 !important" : "1em !important"))};
  }`}

  ${p => ((p.squared && !p.rounded) || p.circle) && css`&{
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
  }`}


  /**
  * Pseudo Classes
  * HOVER - ACTIVE - FOCUS - AFTER - DISABLED
  */ 
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
