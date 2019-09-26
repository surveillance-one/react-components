
import React from "react";
import PropTypes from "prop-types";

import { InputWrapper, InputTextArea } from "./styles";

const TextArea = ({
	fullWidth, handleChange, val, name,
	placeholder = "Input",
}) => (
	<InputWrapper
		type="textarea"
		match={true}
		placeholder={placeholder}
		fullWidth={fullWidth}>
		<InputTextArea
			placeholder={placeholder}
			value={val}
			name={name}
			onChange={handleChange}/>
	</InputWrapper>
);

TextArea.propTypes = {

};

export default TextArea;
