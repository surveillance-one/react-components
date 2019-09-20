import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "react-day-picker/lib/style.css";

import { IconWrapper } from "../ui/styles/globals";

import { Icon } from "../icon";

import {
	InputContainer, InputWrapper
} from "./styles";

const Input = ({
	type, placeholder, iconName, iconBg, iconPosition = "left", fullWidth, handleChange, val
}) => (
	<InputWrapper
		match={true}
		type={type}
		placeholder={placeholder}
		iconName={iconName}
		iconPosition={iconPosition}
		fullWidth={fullWidth}>
		<InputContainer
			placeholder={placeholder}
			value={val}
			onChange={handleChange}/>
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
