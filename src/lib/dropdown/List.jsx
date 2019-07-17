import React, { useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { defaultTheme } from "../ui/themes";
import { Icon } from "../icon";
import { css_dropdownlistbase } from "./styles";

const ListItemComponent = ({
	onItemClick, className, currentSelection, item, status, children, value
}) => (
	<li
		className={className} 
		onClick={useCallback(() => onItemClick(children, value || item), [onItemClick, children, value, item])}
		key={item}>
		{children} {currentSelection && <Icon icon="check"/>}
		{status && <span style={{ float: "right" }}>{status}</span>}
	</li>
);

const ListItem = styled(ListItemComponent)`
	${css_dropdownlistbase}
`;

/** Default Props */
ListItem.defaultProps = {
	theme: defaultTheme.base
};

/** Prop Types */
ListItem.propTypes = {
	children: PropTypes.arrayOf(PropTypes.string)
};

export default ListItem;
