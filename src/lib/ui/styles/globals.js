import styled, { css } from "styled-components";
import { rgba, darken } from "polished";

export const globalStyles = css`{
  font-size: 100%;
  font-family: Lato,"Segoe UI","Helvetica Neue","Helvetica",Arial,sans-serif;
  box-sizing: border-box;
}`;

export const IconWrapper = styled.span.attrs(p => ({
	bgColor: p.bg ? "rgba(0,0,0,.1)" : "",
}))`
  display: inline-flex;
  text-align: center;
  background-color: ${p => p.bgColor}
  box-shadow: -1px 0 0 0 transparent inset;
  padding: .75em;
  ${p => (p.bg ? "" : "margin: 0 !important")}
`;


export const base = css`
  &,
  &:link,
  &:visited {
    cursor:pointer;
    position: relative;
    min-height:1em;
    height: 2.5em;
    max-height: 3em;
    outline:0;
    border:none;
    /* border: solid rgba(224,225,226,1) 1px; */
    border: 1px solid transparent;
    vertical-align:baseline;
    margin:0;
    text-transform:none;
    text-shadow:none;
    font-weight: 500;
    font-style:normal;
    text-align:center;
    text-decoration:none;
    user-select:none;
    transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;
    white-space: nowrap;
    overflow: hidden;

    color: rgba(0,0,0,.6);
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.2);
    border-radius: .3rem;
    background-color: rgba(238,238,238,1);
  }
  
  &:hover {
    color: rgba(0,0,0,.8);
    border: solid ${darken("0.2", "#dbdbdb")} 1px;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }

  &:disabled {
    cursor: not-allowed;
    transition: initial;
    transform: initial;

  }
`;
