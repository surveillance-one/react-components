import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { defaultTheme } from "ui/themes";
import { Icon } from "components";

import * as sc from "./styles";

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
	children = "",
	iconName = "",
	squared = false,
	rounded = false,
	circle = false,
	largeButton = false,
	iconPosition = "right",
	className,
	disabled,
	onClick,
	theme,
	...props
}) => (
	<button className={className} onClick={onClick} disabled={disabled}>
		{ (!squared && !circle) && <sc.BtnLabel>
			{children}
		</sc.BtnLabel> }

		{ iconName
		&& <sc.IconWrapper
			iconPosition={iconPosition}
			squared={squared}
			circle={circle}
			rounded={rounded}>
			<Icon icon={iconName}/>
		</sc.IconWrapper>}
	</button>
);

/**
 * Component Styles and Props
 * - Global styles
 * - Different props
 */
const Button = styled(ButtonComponent)`
	/** Main Theme */
	${sc.css_buttonbase};

	/** Icons */
	${p => (p.iconName ? sc.css_buttonicons : "")};

	/** Color Variants */
	${p => (p.primary && !p.secondary ? sc.buttonStyle("primary") : "")};
	${p => (p.secondary && !p.primary ? sc.buttonStyle("secondary") : "")};

	/** Button Types */
	${p => ((p.rounded && !p.squared) ? sc.css_buttonrounded : "")};
	${p => ((p.squared && !p.rounded) ? sc.css_buttonsquared : "")};
	${p => (p.circle ? sc.css_buttoncircle : "")};


	/** Button Animations */
	${p => (p.animations ? sc.css_buttonanimations : "")}
`;

Button.defaultProps = {
	theme: defaultTheme.base
};

/**
 * PropTypes
 */

Button.propTypes = {
	iconName: PropTypes.string,
	iconPosition: PropTypes.oneOf(["left", "right"]),
	rounded: PropTypes.bool,
	squared: PropTypes.bool,
	largeButton: PropTypes.bool,
	children: PropTypes.string,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};

export default Button;
