import React from "react";
import PropTypes from "prop-types";

import {
	BtnLabel,
	IconWrapper,
	ButtonContainer
} from "./styles";

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

/**
	* Component Declaration
	* - Default Props
	* - themes
 */
const Button = ({
	children, onClick, disabled, iconName, squared, rounded, circle, iconPosition, primary, secondary
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
		{(!squared && !circle) &&
			<BtnLabel>
				{children}
			</BtnLabel>
		}

		{iconName &&
			<IconWrapper
				iconPosition={iconPosition}
				squared={squared}
				circle={circle}
				rounded={rounded}>
				<Icon icon={iconName}/>
			</IconWrapper>
		}
	</ButtonContainer>
);

/**
 * PropTypes
 */
Button.propTypes = {
	children: PropTypes.string,
	iconName: PropTypes.string,
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
