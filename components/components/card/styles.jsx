import { css } from "styled-components";

export const CardBase = css`
  font-size: ${props => props.theme["default-font-size"] || "1rem"};
  line-height: ${props => props.theme["default-line-height"] || "1em"};
  background-color: ${props => props.theme["default-bg-white"] || "whitesmoke"};
  
  color: ${props => props.theme.color || "black"};
  box-shadow: ${props => props.theme["default-box-shadow"] || "black"};
  border-radius: ${props => props.theme["default-border-radius"] || ".3rem"};

  margin: 1rem 0;
  position: relative;

  /** TODO: CHANGE */
  width: ${props => props.width || "29rem"};
`;

export const CardHeaderTitle = css`
.header__title {
  font-size: 1.8rem;
  line-height: 2.3rem;
  font-weight: 700;
  margin: 0;
  color: rgba(0,0,0,.85);
}`;

export const CardHeaderContent = css`
.header__content {
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(0,0,0,.4);
  line-height: 2rem;
}`;

export const CardHeaderImg = css`
.header__img {
  position: absolute;
  width: 4.3rem;
  top: 1.1rem;
  right: 1.1rem;
}`;

export const CardHeader = css`
.card__header {
  position: relative;
  padding: ${props => props.theme["default-padding-card"] || "1rem"};
  ${props => props.title && CardHeaderTitle}
  ${props => props.meta && CardHeaderContent}
  ${props => props.mini && CardHeaderImg}
}`;

export const CardContent = css`
.card__content{
  padding: ${props => props.theme["default-padding-card"] || "1rem"};
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(0,0,0,.68);
  line-height: 2rem;
  ${props => (props.title || props.meta) && css`
      padding-top: 0 !important;
  `};
}`;

export const CardImage = css` 
.card__image {
  position: relative;
  display: block;
  flex: 0 0 auto;
  padding: 0;
  background: rgba(0,0,0,.05);
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: inherit;
    border-bottom-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}`;

export const CardFooter = css`
.card__footer{
  padding: ${props => props.theme["default-padding-card"] || "1rem"};
  border-top: ${props => props.theme["default-border-top"] || "1px solid black"};
  color: rgba(0,0,0,.4);
}`;
