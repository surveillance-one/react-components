
import styled from "styled-components";
import remy from "utils/remy";
import { base, IconStyle } from "../ui/styles/globals";

export const HiddenInputCheckbox = styled.input.attrs(p => ({
	type: p.type
}))`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100px;
`;

export const InputLabel = styled.label`
  width: 100%;
  height: 100%;
`;

export const InputCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const InputContainer = styled.input.attrs(p => ({
	type: p.type,
	placeholder: p.placeholder,
	size: 5,
}))`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 ${remy(10)};
`;

// TODO ADD IN FULL WIDTH OPTION

export const InputWrapper = styled.div`
	${base}
  &&& {
    position: relative;
    overflow: initial;
    display: flex;
  ${p => !p.match && "border: 1px solid red;"}
  ${p => p.disabled && `
    &:hover {
      color: inherit;
      border: 1px solid transparent;
    }
    color: lightgray;
  `}
	${p => IconStyle(p)};
  ${p => p.iconName && `${InputContainer} { padding: 0}`};
  ${p => p.fullWidth && "width: 100%"}

  ${p => p.type == "checkbox" && `
    height: 2.5em;
    width: 2.5em;
    ${p.checked && "background-color: lightgreen; "}  
  `}

  ${p => p.type == "textarea" && `
    max-height: initial;
    height: 100%;
    min-height: 4em;
    padding: ${remy(10)};
  `}
  }
`;

export const DayPickerWrapper = styled.div`
  position: absolute;
  top: 100%;
  margin-top: ${remy(10)};
  border: 1px solid lightgray;
  background-color: white;
  border-radius: .3rem;
  z-index: 999;
  ${p => p.rectRight && "right: 0"}
  ${p => p.rectLeft && "left: 0"}
`;

export const InputTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0;
  resize: vertical;
`;
