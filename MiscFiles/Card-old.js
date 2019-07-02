import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as Styles from "./styles";

const Image = ({ className, src, children }) => (<div className={`${className} card__image`}>{children}<img src={src}/></div>);
const Header = ({ className, children }) => (<div className={`${className} card__header`}>{children}</div>);
const HeaderTitle = ({ className, children }) => (<h1 className={`${className} header__title`}>{children}</h1>);
const HeaderContent = ({ className, children }) => (<div className={`${className} header__content`}>{children}</div>);
const Content = ({ className, children }) => (<div className={`${className} card__content`}>{children}</div>);
const Footer = ({ className, children }) => (<div className={`${className} card__footer`}>{children}</div>);


class CardBase extends React.PureComponent {
	renderCardBase() {
		const { children } = this.props;

		const cardImage = [Image.displayName] || [Image.name];
		const cardHeader = [Header.displayName] || [Header.name];
		const cardHeaderTitle = [HeaderTitle.displayName] || [HeaderTitle.name];
		const cardHeaderContent = [HeaderContent.displayName] || [HeaderContent.name];
		const cardContent = [Content.displayName] || [Content.name];
		const cardFooter = [Footer.displayName] || [Footer.name];

		const items = React.Children.map(children, (child) => {
			const childType = child && child.type && (child.type.displayName || child.type.name);
			if (childType.includes(cardImage)) {
				return <Image {...child.props} />;
			}
			if (childType.includes(cardHeader)) {
				const item = React.Children.map(child.props.children, (chi) => {
					const chiType = chi && chi.type && (chi.type.displayName || chi.type.name);
					if (chiType.includes(cardHeaderTitle)) {
						return <HeaderTitle {...chi.props}></HeaderTitle>;
					}
					if (chiType.includes(cardHeaderContent)) {
						return <HeaderContent {...chi.props}></HeaderContent>;
					}
				});
				return <Header {...child.props}>{item}</Header>;
			}
			if (childType.includes(cardContent)) {
				return <Content {...child.props} cardHeader={childType.includes(cardHeader)}>{child.props.children}</Content>;
			}
			if (childType.includes(cardFooter)) {
				return <Footer {...child.props}>{child.props.children}</Footer>;
			}
		});

		return items;
	}

	render() {
		const { className } = this.props;
		return (
			<div className={`${className} basecard`} {...this.props}>{this.renderCardBase()}</div>
		);
	}
}

CardBase.Image = Image;
CardBase.Header = Header;
CardBase.Header.Title = HeaderTitle;
CardBase.Header.Content = HeaderContent;
CardBase.Content = Content;
CardBase.Footer = Footer;

/**
 * Simple CSS and React for cards. See <Card.Header>, <Card.Content>, and <Card.Footer>.
 *
 * @visibleName Card
 */

const Card = styled(CardBase)`
  ${Styles.CardBase}
`;

/** PROP */
Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
};

Card.Image.propTypes = {
	src: PropTypes.string.isRequired
};

export default Card;
