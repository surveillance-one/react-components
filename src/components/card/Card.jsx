import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import theme from "ui/themes";
import * as sc from "./styles";

// 	className, img, title, meta, footer, mini, children, ...props

const CardComponent = ({
	className, img, title, meta, footer, mini, children, ...props
}) => {
	const cardImg = (img ? <sc.CardImageWrapper><sc.CardImage img={img}/></sc.CardImageWrapper> : "");
	const cardHeader = ((title || meta || mini)
		? <sc.CardHeader title={title} meta={meta} mini={mini} >
			{title && <sc.CardTitle>{title}</sc.CardTitle>}
			{meta && <sc.CardMeta>{meta}</sc.CardMeta>}
			{mini && <sc.CardMini mini={mini} title={title} meta={meta}/>}
		</sc.CardHeader> : ""
	);
	const cardFooter = (footer ? <sc.CardFooter>{footer}</sc.CardFooter> : "");
	return (
		<div className={className} {...props}>
			{cardImg}
			{cardHeader}
			<sc.CardContent>{children}</sc.CardContent>
			{cardFooter}
		</div>
	);
};

const Card = styled(CardComponent)`
	${sc.css_cardbase}
`;

/** Default */
Card.defaultProps = {
	img: "",
	title: "",
	meta: "",
	mini: "",
	footer: "",
	width: "20em",
	theme: theme.base,
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


export default Card;
