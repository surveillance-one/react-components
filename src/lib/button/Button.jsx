import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import {
	BtnLabel,
	IconWrapper,
	css_buttonbase,
	css_buttoncircle,
	css_buttonicons,
	css_buttonrounded,
	css_buttonsquared,
	css_buttonanimations,
	buttonStyle
} from "./styles";

import { defaultTheme } from "../ui/themes";
import { Icon } from "../icon";

/**
 * @title Button component
 *
 * @summary Components/Button is a simple button component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.0.0
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

/**
	* Component Declaration
	* - Default Props
	* - themes
 */
const ButtonComponent = ({
	className, children, onClick, disabled, iconName, squared, rounded, circle, iconPosition,
}) => (
	<button className={className} onClick={onClick} disabled={disabled}>
		{ (!squared && !circle) && <BtnLabel>
			{children}
		</BtnLabel> }

		{ iconName
		&& <IconWrapper
			iconPosition={iconPosition}
			squared={squared}
			circle={circle}
			rounded={rounded}>
			<Icon icon={iconName}/>
		</IconWrapper>}
	</button>
);

/**
 * Component Styles and Props
 * - Global styles
 * - Different props
 */
const Button = styled(ButtonComponent)`
	/** Main Theme */
	${css_buttonbase};

	/** Icons */
	${p => p.iconName && css_buttonicons};

	/** Color Variants */
	${p => p.primary && !p.secondary && buttonStyle("primary")};
	${p => p.secondary && !p.primary && buttonStyle("secondary")};

	/** Button Types */
	${p => (p.rounded && !p.squared) && css_buttonrounded};
	${p => (p.squared && !p.rounded) && css_buttonsquared};
	${p => p.circle && css_buttoncircle};


	/** Button Animations */
	${p => p.animations && css_buttonanimations}
`;

Button.defaultProps = {
	children: "",
	iconName: "",
	iconPosition: "right",
	animations: false,
	theme: defaultTheme.base,
	onClick: (() => console.log("button pressed")),
	rounded: false,
	squared: false,
	primary: false,
	secondary: false,
};

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
