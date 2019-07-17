import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { defaultTheme } from "../ui/themes";

import {
	CardImageWrapper,
	CardImage,
	CardHeader,
	CardContent,
	CardFooter,
	CardMeta,
	CardMini,
	CardTitle,
	css_cardbase
} from "./styles";

const CardComponent = ({
	className, img, title, meta, footer, mini, children, ...props
}) => { 
	const header = title || meta || mini;
	const headerObj = { title, meta, mini };
	return (
		<div className={className} {...props}>
			{img &&
				<CardImageWrapper>
					<CardImage img={img}/>
				</CardImageWrapper>
			}

			{header &&
				<CardHeader {...headerObj}>
					{title &&
						<CardTitle>
							{title}
						</CardTitle>
					}
					{meta &&
						<CardMeta>
							{meta}
						</CardMeta>}
					{mini &&
						<CardMini {...headerObj}/>
					}
				</CardHeader>
			}

			<CardContent>
				{children}
			</CardContent>

			{footer &&
				<CardFooter>
					{footer}
				</CardFooter>
			}
		</div>
	);
};


const Card = styled(CardComponent)`
	${css_cardbase}
`;

/** Default */
Card.defaultProps = {
	img: "",
	title: "",
	meta: "",
	mini: "",
	footer: "",
	width: "20em",
	theme: defaultTheme.base,
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
