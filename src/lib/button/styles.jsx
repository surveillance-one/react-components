import styled, { css } from "styled-components";

import {
	globalStyles, IconWrapper, IconStyle, base, buttonStyle
} from "../ui/styles/globals";

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

export const ButtonContainer = styled.button`
  /** Global Styles */
  ${globalStyles};


  /** Per-componenet parent styles */
  ${base}
  ${p => IconStyle(p)};
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
      border: ${p => ((p.squared || p.circle) ? "none" : "")};
      padding: ${p => ((p.squared || p.circle) ? "0" : ".75")};
      margin: 0;
      display: block;
    }
  }`}

`;
