import React from "react";
import PropTypes from "prop-types";
import { BtnLabel, ButtonContainer } from "./styles";
import { IconWrapper } from "../ui/styles/globals";
import { Icon } from "../icon";

/**
 * @title Button component
 *
 * @summary Components/Button is a simple button component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 2.0.0
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

const Button = ({
	children,
	onClick,
	disabled,
	iconName,
	squared,
	rounded,
	circle,
	iconPosition,
	primary,
	secondary,
	iconBg = true
}) => (
	<ButtonContainer
		onClick={onClick}
		disabled={disabled}
		iconName={iconName}
		primary={primary}
		secondary={secondary}
		rounded={rounded}
		squared={squared}
		circle={circle}>

		{(!squared && !circle)
		&&
		<BtnLabel>
			{children}
		</BtnLabel>
		}

		{iconName
		&&
		<IconWrapper
			bg={iconBg}
			iconPosition={iconPosition}
			squared={squared}
			circle={circle}
			rounded={rounded}>
			<Icon icon={iconName}/>
		</IconWrapper>
		}
	</ButtonContainer>
);

Button.propTypes = {
	children: PropTypes.string,
	iconName: PropTypes.string,
	iconBg: PropTypes.bool,
	iconPosition: PropTypes.oneOf(["left", "right"]),
	animations: PropTypes.bool,
	theme: PropTypes.object,
	onClick: PropTypes.func,
	rounded: PropTypes.bool,
	squared: PropTypes.bool,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};

export default Button;
