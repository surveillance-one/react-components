import styled, { css } from "styled-components";

export const css_dropdownbase = css`
  cursor: pointer;
  display: block;
  word-wrap: break-word;
  white-space: normal;
  outline: 0;
  z-index: 12;
  transform: rotateZ(0);
  transition: box-shadow .1s ease,width .1s ease;

  /** Theme Styles */
  
  background: whitwamokw;
  padding: ${props => props.theme["default-padding"] || ".75em 1em .75em 1em"};
  color: ${props => props.theme.color || "black"};
  box-shadow: ${props => props.theme["default-box-shadow"] || "black"};
  border-radius: ${props => props.theme["default-border-radius"] || ".3rem"};

  /**
  * PSUEDO CLASSES
  */
  &:hover {
    color:  ${props => props.theme["hover-color"] || "lightgray"};
    background-color: ${props => props.theme["default-bg-lightgray"] || "lightgray"};
  }

  &:active,
  &:focus {
    outline: none;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;

    border: ${props => props.theme["default-border"] || "black"};
    background-color: ${props => props.theme["default-bg-lightgray"] || "lightgray"};
  }

`;

export const DropdownHeaderTitle = styled.div`
  font-weight: 700;
  color:  ${props => props.theme.color || "lightgray"};
`;

export const IconArrow = styled.div`
  position: absolute;
  right: 1em;
  top: .79em;
  line-height: ${props => props.theme["default-line-height"] || "1em"};
`;

export const DropdownList = styled.ul`
  cursor: auto;
  position: absolute;
  display: block;
  overflow-x: hidden;
  overflow-y: hidden;

  top: 100%; /* 105%*/
  left: 0;
  margin: 0 -1px;
  width: calc(100% + 2px);
  min-width: calc(100% + 2px);
  
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  border-top-width: 0 !important;
  backface-visibility: hidden;
  outline: 0;

  text-shadow: none;
  text-align: left;
  z-index: 11;
  
  background: ${props => props.theme["default-bg-white"] || "white"};
  border: ${props => props.theme["default-border"] || "1rem"};
  border-radius: ${props => props.theme["default-border-radius"] || ".3rem"};
  box-shadow: ${props => props.theme["default-box-shadow"] || "black"};
`;

export const css_dropdownlistbase = css`
  padding: ${props => props.theme["default-padding"] || ".75em 1em .75em 1em"};
  line-height: 14px;
  z-index: 12;
  list-style: none;

  &:hover {
    background-color: ${props => props.theme["default-bg-lightgray-a5"] || "lightgray"};
  }
`;
