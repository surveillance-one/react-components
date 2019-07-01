import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../icon";
import * as defaultTheme from "../themes";
import * as Global from "../themes/global_styles";

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


/**
	* Component Declaration
	* - Default Props
	* - theme
 */
const Button = props => (
	<button className={className} onClick={onClick} {...props}>
		<Styles.iconWrapper><Icon icon={iconName}/></Styles.iconWrapper>
	</button>
);


/**
 * Component Styles and Props
 * - Global styles
 * - Different props
 */
const StyledButton = styled(Button)`
	${Global}
	/** Main Theme */
	${Styles.ButtonBase};

	/** Color Variants */
	${props => (props.primary && !props.secondary ? Styles.ButtonPrimary : "")};
	${props => (props.secondary && !props.primary ? Styles.ButtonSecondary : "")};

	/** Button Types */
	${props => ((props.rounded && !props.squared) ? Styles.ButtonRounded : "")};
	${props => ((props.squared && !props.rounded) ? Styles.ButtonSquared : "")};

	/** Icons */
	${props => (props.iconName ? Styles.ButtonIcons : "")};

	/** Button Animations */
	${props => (props.animations ? Styles.ButtonAnimations : "")}
`;


/**
 * PropTypes
 */

Button.propTypes = {
	iconName: PropTypes.string,
	iconPosition: PropTypes.string,
	rounded: PropTypes.bool,
	squared: PropTypes.bool,
	largeButton: PropTypes.bool,
	children: PropTypes.string,
};

Button.defaultProps = {
	children: "",
	className: "",
	iconName: "",
	squared: false,
	rounded: false,
	largeButton: false,
	theme: defaultTheme,
}

export default StyledButton;
