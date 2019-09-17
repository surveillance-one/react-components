import styled, { css } from "styled-components";
import { rgba, darken } from "polished";

import { globalStyles, IconWrapper, base } from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";

export const ButtonGroupStyled = styled.div`
  /** Styles the Container */
  display: flex;
  
  /** Styles the buttons */
  button {
    width: 100%;
    overflow: visible;
    margin: ${p => (p.inline ? "5px 0" : "5px")};
    ${p => p.inline && css`
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      margin-right: 1px;
    }
    &:first-child {
      border-radius: .3rem 0 0 .3rem;
      margin-right: 1px;
    }
    &:last-child {
      border-radius: 0 .3rem .3rem 0;
    }
  `}
  }
`;


export const BtnLabel = styled.span`
  display: block;
  position: static;
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
  ${base}

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

`;
