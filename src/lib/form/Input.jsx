import React from "react";
import PropTypes from "prop-types";

import { IconWrapper } from "../ui/styles/globals";

import { Icon } from "../icon";

import {
	InputContainer, InputWrapper, InputCheckbox, HiddenInputCheckbox, InputLabel
} from "./styles";

const Input = ({
	iconName, iconBg, fullWidth, handleChange, val, checked, name,
	type = "text",
	placeholder = "Input",
	iconPosition = "left",
}) => (
	<InputWrapper
		type={type}
		match={true}
		checked={checked}
		placeholder={placeholder}
		iconName={iconName}
		iconPosition={iconPosition}
		fullWidth={fullWidth}>
		{type != "checkbox" &&
			<InputContainer
				name={name}
				placeholder={placeholder}
				value={val}
				onChange={handleChange}/>
		}
		{type == "checkbox" &&
			<InputLabel>
				<HiddenInputCheckbox checked={checked} onChange={handleChange} name={name} type="checkbox"/>
				<InputCheckbox checked={checked}>
					{checked && <Icon icon="check"/>}
				</InputCheckbox>
			</InputLabel>
		}
		{iconName &&
			<IconWrapper
				bg={iconBg}
				iconPosition={iconPosition}>
				<Icon icon={iconName}/>
			</IconWrapper>
		}
	</InputWrapper>
);

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	iconName: PropTypes.string,
	iconBg: PropTypes.string,
	iconPosition: PropTypes.string,
	fullWidth: PropTypes.bool,
	handleChange: PropTypes.func,
	val: PropTypes.string,
	checked: PropTypes.bool
};

export default Input;
