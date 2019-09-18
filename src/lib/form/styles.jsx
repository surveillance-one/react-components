
import styled from "styled-components";
import remy from "utils/remy";
import { base, IconStyle } from "../ui/styles/globals";

export const InputContainer = styled.input.attrs(p => ({
	type: p.type || "text",
	placeholder: p.placeholder || "input"
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
  display: flex;
	${p => IconStyle(p)};
  ${p => p.iconName && `${InputContainer} { padding: 0 !important }`};
  ${p => p.fullWidth && "width: 100%"}
`;
