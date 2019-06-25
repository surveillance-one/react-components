
import { css } from "./node_modules/styled-components";
import { rgba } from "./node_modules/polished";

export const TabsBase = css`& {
	font-size: ${props => props.theme["default-font-size"] || "1rem"};
	.tab__list {
		display: flex;
		margin: 1rem 0;
		font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
		background: none;
		font-weight: 400;
		min-height: 2.9em;
		position: relative;
		
		border-radius: ${props => props.theme["default-border-radius"] || ".3rem"};
	}
	.tab__content {
		position: relative;
		margin: 1rem 0;
		padding: ${props => props.theme["default-padding-tab"] || "1rem"};
		background: ${props => props.theme["default-bg-white"] || "white"};
		border-radius: ${props => props.theme["default-border-radius"] || ".3rem"};
		box-shadow: ${props => props.theme["default-box-shadow"] || "black"};
	}
}`;

export const TabBase = css`& {
	cursor: pointer;
	align-self: center;
	box-shadow: none;
	position: relative;
	border: none;
	padding: ${props => props.theme["default-padding"] || ".75em 1em .75em 1em"};
	margin: 0;
	background: 0 0;
	transition: color .1s ease;
	border-radius: ${props => props.theme["default-border-radius"] || ".3rem"};
	list-style: none;
	font-weight: 700;
	line-height: 14px;
	color: rgba(0,0,0,.6);
	&:first-child {
		margin-right: .36em;
	}
	&:last-child {
		margin-left: .36em;
	}
	&:not(:first-child):not(:last-child) {
		margin: 0 .36em;
	}
	z-index: 1;
	
	&:hover {
	background-color: ${props => props.theme["default-bg-lightgray"] || "lightgray"};
	color:  ${props => props.theme["hover-color"] || "lightgray"};
	box-shadow: ${props => props.theme["default-box-shadow"] || "black"};
  }

  &:active{
    outline: none;
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
  }



}`;

export const TabCurrent = css`&{
	${props => props.currentTab && css`
	background: ${props => props.theme["default-bg-lightgray"] || "white"};
		color:  ${props => props.theme.color || "lightgray"};
		box-shadow: ${props => props.theme["default-box-shadow"] || "black"};

	&::after {
		content: "";
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%) translateY(-50%) rotate(45deg);
		margin: .5px 0 0;
		width: .6em;
		height: .6em;
		border-bottom: ${props => props.theme["default-border"] || "black"};
		border-right: ${props => props.theme["default-border"] || "black"};
		z-index: 2;
		background: ${props => props.theme["default-bg-lightgray"] || "white"};
		box-sizing: border-box;
		transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
		will-change:'';
	}
	`};
}`;

export const TabIcons = css`&{
	/* ICONS */
	${({ iconName, iconPosition }) => iconName && css`
		display: inline-flex;
		position: relative;
		padding-left: ${(iconPosition == "left" || !iconPosition) ? "3.8rem" : "1.5rem"};
		padding-right: ${iconPosition == "right" ? "3.8rem" : "1.5rem"};
			
		.icon-wrapper{
			text-align: center;
      margin: 0;
      width: 2.6em;
      box-shadow: -1px 0 0 0 transparent inset;
      vertical-align: middle;
			${(iconPosition == "left" || !iconPosition) && css` left: 0;`}
			${iconPosition == "right" && css` right: 0;`}
			position: absolute;
		}
	`};
}`;

export const showIconOnlyOnActive = css`&{
	${props => !props.currentTab && css`
		&:not(:hover) {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
			.icon-wrapper {
				visibility: hidden;
			}
		}
	`
}`;

export const TabsPrimary = css`&{
	.tab__list > li {
		${({ theme }) => {
		const color = theme["primary-tab-color"];
		const bgColor = theme["primary-tab-bg"];
		return css`
			background: ${bgColor};
			color: ${color};
			&:hover {
				color: ${rgba(color, 0.8)}
			}
			&::after {
				background: ${bgColor};
				border-bottom-color: ${bgColor};
				border-right-color: ${bgColor};
			}
		`;
	}}}
}`;

export const TabsSecondary = css`&{
	.tab__list > li {
		${({ theme }) => {
		const color = theme["secondary-tab-color"];
		const bgColor = theme["secondary-tab-bg"];
		return css`
			background: ${bgColor};
			color: ${color};
			&:hover {
				color: ${rgba(color, 0.8)}
			}
			&::after {
				background: ${bgColor};
				border-bottom-color: ${bgColor};
				border-right-color: ${bgColor};
			}
		`;
	}}}
}`;
