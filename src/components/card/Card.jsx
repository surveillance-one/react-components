import React from "react";
import PropTypes from "prop-types";

import * as Styles from "./styles";

// 	className, img, title, meta, footer, mini, children, ...props

const Card = ({
	className, img, title, meta, footer, mini, children, ...props
}) => {
	const cardImg = (img ? <Styles.CardImageWrapper><Styles.CardImage img={img}/></Styles.CardImageWrapper> : "");
	const cardHeader = ((title || meta || mini)
		? <Styles.CardHeader title={title} meta={meta} mini={mini} >
			{title && <Styles.CardTitle>{title}</Styles.CardTitle>}
			{meta && <Styles.CardMeta>{meta}</Styles.CardMeta>}
			{mini && <Styles.CardMini mini={mini} title={title} meta={meta}/>}
		</Styles.CardHeader> : ""
	);
	const cardFooter = (footer ? <Styles.CardFooter>{footer}</Styles.CardFooter> : "");
	return (
		<Styles.CardBase {...props}>
			{cardImg}
			{cardHeader}
			<Styles.CardContent>{children}</Styles.CardContent>
			{cardFooter}
		</Styles.CardBase>
	);
};

/** Default */
Card.defaultProps = {
	img: "",
	title: "",
	meta: "",
	mini: "",
	footer: "",
	width: "20em",
	children: []
};

/** Props */
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

Card.displayName = "Card";
export default Card;
