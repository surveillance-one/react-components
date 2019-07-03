import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { defaultTheme } from "themes";
import Icon from "components/icon";

import * as Styles from "./styles";

/**
 * @title Button component
 *
 * @summary Components/Button is a simple button component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.0.0
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

console.log(Icon);
/**
	* Component Declaration
	* - Default Props
	* - theme
 */
const PreButton = ({
	children = "",
	iconName = "",
	squared = false,
	rounded = false,
	circle = false,
	largeButton = false,
	iconPosition = "right",
	className,
	onClick,
	...props
}) => (
	<button className={className} onClick={onClick} {...props}>
		{ (!squared && !circle) && <Styles.btnLabel>
			{children}
		</Styles.btnLabel> }

		{ iconName
		&& <Styles.iconWrapper
			iconPosition={iconPosition} 
			squared={squared}
			circle={circle}
			rounded={rounded}>
			<Icon icon={iconName}/>
		</Styles.iconWrapper>}
	</button>
);

console.log("TEST", defaultTheme.color);

/**
 * PropTypes
 */

PreButton.propTypes = {
	iconName: PropTypes.string,
	iconPosition: PropTypes.string,
	rounded: PropTypes.bool,
	squared: PropTypes.bool,
	largeButton: PropTypes.bool,
	children: PropTypes.string,
};

/**
 * Component Styles and Props
 * - Global styles
 * - Different props
 */
const Button = styled(PreButton)`
	${Styles.globalScoped};
	/** Main Theme */
	${Styles.ButtonBase};

	/** Color Variants */
	${props => (props.primary && !props.secondary ? Styles.ButtonPrimary : "")};
	${props => (props.secondary && !props.primary ? Styles.ButtonSecondary : "")};

	/** Button Types */
	${props => ((props.rounded && !props.squared) ? Styles.ButtonRounded : "")};
	${props => ((props.squared && !props.rounded) ? Styles.ButtonSquared : "")};
	${props => (props.circle ? Styles.ButtonCircle : "")};

	/** Icons */
	${props => (props.iconName ? Styles.ButtonIcons : "")};

	/** Button Animations */
	${props => (props.animations ? Styles.ButtonAnimations : "")}
`;

Button.defaultProps = {
	theme: defaultTheme
};

export default Button;
