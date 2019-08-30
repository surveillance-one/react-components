import styled from "styled-components";

import remy from "../utils/remy";

export const DropdownListMenu = styled.div`
  left: 0;
  min-width: ${remy(150)};
  padding-top: ${remy(4)};
  position: absolute;
  top: 100%;
  z-index: 20;
  box-sizing: border-box;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownListContent = styled.div`
  box-sizing: inherit;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  padding-bottom: ${remy(8)};
  padding-top: ${remy(8)};

`;

export const ListItemStyle = styled.div`
  box-sizing: inherit;
	/* Specific theme attributes */
	${p => p.currentSelection && `
    background-color: lightgray
  `}

  color: #4a4a4a;
  display: block;
  font-size: ${remy(14)}
  line-height: 1.5;
  padding: ${remy(6)} ${remy(16)};
  position: relative;

  padding-right: ${remy(16)};
  text-align: left;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background-color: lightgray;
  }
`;
