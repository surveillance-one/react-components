import React from "react";
import PropTypes from "prop-types";

import { IconWrapper } from "../ui/styles/globals";

import { Icon } from "../icon";

import {
	InputContainer, InputWrapper
} from "./styles";

const Input = ({
	type, placeholder, iconName, iconBg, iconPosition, fullWidth
}) => (
	<InputWrapper type={type} placeholder={placeholder} iconName={iconName} iconPosition={iconPosition} fullWidth={fullWidth}>
		<InputContainer />
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
