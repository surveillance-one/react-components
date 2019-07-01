import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../icon";
import * as defaultTheme from "../themes";

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
	* - Base HTML button
	* - Nested styled-components for styling
 */

const iconWrapper = props => (
	<span className={props.className}>
		<Icon icon={props.iconName}/>
	</span>
);

const Button = props => (
	<button className={props.className} onClick={props.onClick} {...props}>
		<Styles.btnLabel>
			{props.children}
		</Styles.btnLabel>
		<iconWrapper {...props}/>
	</button>
);

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
};

/**
 * Component Styles and Props
 * - Global styles
 * - Different props
 * - These will affect everything
 */
const StyledButton = styled(Button)`
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


export default StyledButton;
