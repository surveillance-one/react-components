import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @title ButtonGroup component
 *
 * @summary Components/ButtonGroup groups Buttons together into a bar
 * @see StyledComponents
 * @see Button (components/button)
 *
 * @version 1.0.0
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

const ButtonGroupStyled = styled.div`
  button:not(:first-child):not(:last-child) {
    border-radius: 0;
    margin: 0;
    border-right: solid white 1px;
  }
  button:first-child {
    border-radius: .3rem 0 0 .3rem;
    border-right: solid white 1px;
  }
  button:last-child {
    border-radius: 0 .3rem .3rem 0;
  }
`;

/**
 * @class ButtonGroup
 * @param {any} { children, ...props }
 *
 * @description groups buttons together
 */
const ButtonGroup = ({ children, ...props }) => (
	<ButtonGroupStyled>
		{React.Children.map(children, (child, i) => React.cloneElement(child, props))}
	</ButtonGroupStyled>
);

ButtonGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
};

export default ButtonGroup;
