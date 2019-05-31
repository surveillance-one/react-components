import React from "react";
import PropTypes from "prop-types";
import classes from "helpers/classes";

const Button = ({
	variant, size, block, className, children, ...props
}) => {
	const classList = [
		"btn",
		`btn-${variant}`,
	];
	if (size) classList.push(`btn-${size}`);
	if (block) classList.push("btn-block");
	if (className) classList.push(...className.split(" "));
	const btnclasses = classes(classList);
	return (
		<button className={btnclasses} {...props}>{children}</button>
	);
};

Button.defaultProps = {
	variant: "default",
	type: "button",
	disabled: false,
	size: null,
	block: false,
};

Button.propTypes = {
	variant: PropTypes.string,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.string,
	block: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Button;
