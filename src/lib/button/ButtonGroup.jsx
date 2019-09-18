import React from "react";
import PropTypes from "prop-types";

import { ButtonGroupStyled } from "./styles";

/**
 * @title ButtonGroup component
 *
 * @summary Components/ButtonGroup groups Buttons together into a bar
 * @see StyledComponents
 * @see Button (components/button)
 *
 * @version 1.0.2
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

const ButtonGroup = ({ children, ...props }) => (
	<ButtonGroupStyled {...props}>
		{React.Children.map(children, (child, i) => React.cloneElement(child, props))}
	</ButtonGroupStyled>
);

ButtonGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	secondary: PropTypes.bool,
	primary: PropTypes.bool,
	inline: PropTypes.bool,
};

export default ButtonGroup;
