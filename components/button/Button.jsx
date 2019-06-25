import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../icon";
import { defaultTheme } from "../themes";

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


const Button = ({
	children = "",
	className = "",
	iconName = "",
	squared = false,
	rounded = false,
	largeButton = false,
	onClick,
	...props
}) => (
	<button className={className} onClick={onClick} {...props}>
		{ !squared && <span className="btn__label">{children}</span> }
		{ iconName && <span className="icon-wrapper"><Icon icon={iconName}/></span>}
	</button>
);

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

StyledButton.defaultProps = {
	theme: defaultTheme
}

Button.propTypes = {
	iconName: PropTypes.string,
	iconPosition: PropTypes.string,
	rounded: PropTypes.bool,
	squared: PropTypes.bool,
	largeButton: PropTypes.bool,
	children: PropTypes.string,
};


export default StyledButton;
