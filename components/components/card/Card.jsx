import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as Styles from "./styles";

const CardBase = ({
	className, img, title, meta, footer, mini, children, ...props
}) => (
	<div className={`${className} basecard`} {...props}>
		{img ? <div className="card__image"><img src={img}/></div> : ""}
		{(title || meta) ? <div className="card__header">
			{title
				? <div className="header__title">{title}</div> : ""}
			{meta
				? <div className="header__content">{meta}</div> : ""}
			{mini
				? <img className="header__img" src={mini}/> : ""}
		</div> : ""}
		<div className="card__content">{children}</div>
		{footer ? <div className="card__footer">{footer}</div> : ""}
	</div>
);

/**
 * Simple CSS and React for cards. See <Card.Header>, <Card.Content>, and <Card.Footer>.
 *
 * @visibleName Card
 */

const Card = styled(CardBase)`
	/** Base Styles */
  ${Styles.CardBase}

	/** Image */
	${props => props.img && Styles.CardImage}

	/** Header */
	${props => (props.title || props.meta || props.mini) && Styles.CardHeader}

	/** Content */
  ${Styles.CardContent}

	/** Footer */
	${props => props.footer && Styles.CardFooter}
`;

/** Default */
Card.defaultProps = {
	width: "29rem",
	children: []
};

/** PROP */
Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	meta: PropTypes.string,
	mini: PropTypes.string,
	footer: PropTypes.string,
	width: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
};

export default Card;
