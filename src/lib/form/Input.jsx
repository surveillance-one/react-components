import React from "react";
import PropTypes from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { IconWrapper } from "../ui/styles/globals";

import { Icon } from "../icon";

import {
	InputContainer, InputWrapper
} from "./styles";

const Input = ({
	type, placeholder, iconName, iconBg, iconPosition, fullWidth
}) => (
	<InputWrapper type={type} placeholder={placeholder} iconName={iconName} iconPosition={iconPosition} fullWidth={fullWidth}>
		<InputContainer placeholder={placeholder}/>
		<DayPickerInput/>
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
