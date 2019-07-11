import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import theme from "ui/themes";
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
	theme,
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

/**
 * PropTypes
 */

PreButton.propTypes = {
	iconName: PropTypes.string,
	iconPosition: PropTypes.oneOf(["left", "right"]),
	rounded: PropTypes.bool,
	squared: PropTypes.bool,
	largeButton: PropTypes.bool,
	children: PropTypes.string,
	primary: PropTypes.bool,
	secondary: PropTypes.bool,
};

/**
 * Component Styles and Props
 * - Global styles
 * - Different props
 */
const Button = styled(PreButton)`
	/** Main Theme */
	${Styles.ButtonBase};

	/** Icons */
	${props => (props.iconName ? Styles.ButtonIcons : "")};

	/** Color Variants */
	${p => (p.primary && !p.secondary ? Styles.buttonStyle("primary") : "")};
	${p => (p.secondary && !p.primary ? Styles.buttonStyle("secondary") : "")};

	/** Button Types */
	${props => ((props.rounded && !props.squared) ? Styles.ButtonRounded : "")};
	${props => ((props.squared && !props.rounded) ? Styles.ButtonSquared : "")};
	${props => (props.circle ? Styles.ButtonCircle : "")};


	/** Button Animations */
	${props => (props.animations ? Styles.ButtonAnimations : "")}
`;

Button.defaultProps = {
	theme: theme.base
};

export default Button;
