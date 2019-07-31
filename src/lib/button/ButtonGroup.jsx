import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

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

const ButtonGroupStyled = styled.div`
  /** Styles the Container */
  display: flex;
  
  /** Styles the buttons */
  button {
    width: 100%;
    overflow: visible;
    margin: ${p => (p.inline ? "5px 0" : "5px")};
    ${p => p.inline && css`
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      margin-right: 1px;
    }
    &:first-child {
      border-radius: .3rem 0 0 .3rem;
      margin-right: 1px;
    }
    &:last-child {
      border-radius: 0 .3rem .3rem 0;
    }
  `}
  }
`;

/**
 * @class ButtonGroup
 * @param {any} { children, ...props }
 *
 * @description groups buttons together
 */
const ButtonGroup = ({ children, ...props }) => (
	<ButtonGroupStyled {...props}>
		{React.Children.map(children, (child, i) => React.cloneElement(child, props))}
	</ButtonGroupStyled>
);

ButtonGroup.defaultProps = {
	children: [],
	secondary: false,
	primary: false,
	inline: false,
};
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
