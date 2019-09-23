
import styled from "styled-components";
import remy from "utils/remy";
import { base, IconStyle } from "../ui/styles/globals";

export const HiddenInputCheckbox = styled.input.attrs(p => ({
	type: "checkbox"
}))`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100px;
`;

export const InputCheckbox = styled.div`
    display: inline-block;
  width: 16px;
  height: 16px;
  background: ${p => (p.checked ? "salmon" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;


export const InputContainer = styled.input.attrs(p => ({
	type: p.type,
	placeholder: p.placeholder || "input",
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
  position: relative !important;
  overflow: initial !important;
  display: flex;
  ${p => !p.match && "border: 1px solid red !important;"}
	${p => IconStyle(p)};
  ${p => p.iconName && `${InputContainer} { padding: 0 !important }`};
  ${p => p.fullWidth && "width: 100%"}
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
`;
