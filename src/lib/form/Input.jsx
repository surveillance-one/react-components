import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "react-day-picker/lib/style.css";

import { IconWrapper } from "../ui/styles/globals";

import { Icon } from "../icon";

import {
	InputContainer, InputWrapper, InputCheckbox, HiddenInputCheckbox, CheckboxContainer
} from "./styles";

const Input = ({
	type = "text", placeholder, iconName, iconBg, iconPosition = "left", fullWidth, handleChange, val, checked
}) => (
	<InputWrapper
		match={true}
		placeholder={placeholder}
		iconName={iconName}
		iconPosition={iconPosition}
		fullWidth={fullWidth}>
		{type != "checkbox" && <InputContainer
			placeholder={placeholder}
			value={val}
			onChange={handleChange}/>}
		{type == "checkbox" &&
		<CheckboxContainer>
			<HiddenInputCheckbox checked={checked} onChange={handleChange}/>
			<InputCheckbox checked={checked}/>
		</CheckboxContainer>
		}
		{iconName &&
		<IconWrapper
			bg={iconBg}
			iconPosition={iconPosition}>
			<Icon icon={iconName}/>
		</IconWrapper>}
	</InputWrapper>
);

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

export default Input;
