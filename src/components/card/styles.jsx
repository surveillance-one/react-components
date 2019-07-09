import styled, { css } from "styled-components";

import { globalStyles } from "ui/styles/globals";

/**
 * Styled components for Card
 */

 /** TODO: FIX MARGIN IN FLEX BOX */

/**
 * Styled-Component CSS
 * @name CardBase
 * @see Card (components/Card)
 * @description <Card> base styles
 *
 * @param {string} width p => p.width
 */

export const CardBase = styled.div`
  /** Global Styles */
  ${globalStyles};

  background-color: ${props => props.theme["default-bg-white"] || "whitesmoke"};

  color: ${props => props.theme.color || "black"};
  box-shadow: ${props => props.theme["default-box-shadow"] || "black"};
  border-radius: .3rem;

  margin: 1rem 0;
  position: relative;

  /** TODO: CHANGE */
  width: ${p => `${p.width}em` || "20em"};
`;

/**
 * Styled-Component
 * @name CardHeader
 * @see Card (components/Card)
 * @description child of <Card> wrapper for title
 *
 * @param {string} title p => p.title
 * @param {string} mini p => p.mini
 */
export const CardHeader = styled.div`
  position: relative;
  padding: ${p => ((p.mini && (!p.title || !p.meta)) ? "0 !important" : "1em")};
  padding-bottom: ${p => (p.title ? "0 !important" : "")};
`;

/**
 * Styled-Component
 * @name CardTitle
 * @see Card (components/Card)
 * @description child of <Card> that holds the header title
 */
export const CardTitle = styled.h1`
  font-size: 1.3em;
  font-weight: 700;
  margin: 0;
  color: rgba(0,0,0,.85);
`;


/**
 * Styled-Component
 * @name CardMeta
 * @see Card (components/Card)
 * @description child of <Card> that holds the header content
 */
export const CardMeta = styled.div`
  font-weight: 400;
  color: rgba(0,0,0,.4);
  margin: 0 !important;
`;

/**
 * Styled-Component
 * @name CardMini
 * @see Card (components/Card)
 * @description child of <Card> that holds the mini icon-picture
 *
 * @param {url} mini p => p.mini
 */
export const CardMini = styled.img.attrs(p => ({ src: p.mini }))`
  width: 3.5em;
  top: 1.1em;
  right: 1.1em;
  position: ${p => ((!p.title || !p.meta) ? "static" : "absolute")};
  float: ${p => ((!p.title || !p.meta) ? "right" : "auto")};
  margin: ${p => ((!p.title || !p.meta) ? "1em" : "initial")};
`;

/**
 * Styled-Component
 * @name CardContent
 * @see Card (components/Card)
 * @description child of <Card> that holds the main content
 *
 * @param {string} title p => p.title
 * @param {string} meta p => p.meta
 */
export const CardContent = styled.div`
  padding: ${p => p.theme["default-padding-card"] || "1rem"};
  font-weight: 400;
  color: rgba(0,0,0,.68);
  padding-top: ${p => ((p.title || p.meta) ? "0 !important" : "inital")}
`;

/**
 * Styled-Component
 * @name CardImage and
 * @name CardImageWrapper
 * @see Card (components/Card)
 * @description child of <Card> that holds the main header img
 *
 * @param {url} img p => p.img
 */
export const CardImage = styled.img.attrs(p => ({ src: p.img }))`
  display: block;
  width: 100%;
  height: auto;
  border-radius: inherit;
`;

export const CardImageWrapper = styled.div` 
  position: relative;
  display: block;
  flex: 0 0 auto;
  padding: 0;
  background: rgba(0,0,0,.05);
  border-radius: inherit;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
`;

/**
 * Styled-Component
 * @name CardFooter
 * @see Card (components/Card)
 * @description child of <Card> that holds the footer
 */
export const CardFooter = styled.div`
  padding: ${props => props.theme["default-padding-card"] || "1rem"};
  color: rgba(0,0,0,.4);
  padding-top: 10px;
    border-top: 1px solid rgba(0,0,0,.1);
  :before {
    content: '';

  }
`;
