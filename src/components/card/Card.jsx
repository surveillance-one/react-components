import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as Styles from "./styles";

const CardBase = ({
	className, img, title, meta, footer, mini, children, ...props
}) => (
	<div className={className} {...props}>
		{img && <Styles.CardImageWrapper><Styles.CardImage img={img}/></Styles.CardImageWrapper>}
		{(title || meta)
				&& <Styles.CardHeader title={title} meta={meta}>
					{title && <Styles.CardTitle>{title}</Styles.CardTitle>}
					{meta && <Styles.CardMeta>{meta}</Styles.CardMeta>}
					{mini && <Styles.CardMini src={mini}/>}
				</Styles.CardHeader>
		}
		<Styles.CardContent>{children}</Styles.CardContent>
		{footer && <Styles.CardFooter>{footer}</Styles.CardFooter>}
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
`;

/** Default */
Card.defaultProps = {
	width: "20em",
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
	]),
};

export default Card;
