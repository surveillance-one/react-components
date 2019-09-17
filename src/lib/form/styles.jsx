
import styled, { css } from "styled-components";
import { IconWrapper, base } from "../ui/styles/globals";

// TODO ADD IN FULL WIDTH OPTION

export const InputWrapper = styled.div`
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
  ${p => p.fullWidth && "width: 100%"}
`;

export const InputContainer = styled.input.attrs(p => ({
	type: p.type || "text",
	placeholder: p.placeholder || "input"
}))`
	background-color: transparent;
	border: none;
`;
