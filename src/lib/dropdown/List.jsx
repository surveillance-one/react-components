import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { defaultTheme } from "../ui/themes";
import { ListItemStyle } from "./styles";

const ListItem = ({
	onItemClick, item, status, children, value, ...props
}) => (
	<ListItemStyle
		{...props}
		onClick={useCallback(() => onItemClick(children, value || item), [onItemClick, children, value, item])}
		key={item}>
		{children}
		{status && <span style={{ float: "right" }}>{status}</span>}
	</ListItemStyle>
);

/** Default Props */
ListItem.defaultProps = {
	theme: defaultTheme.base
};

/** Prop Types */
ListItem.propTypes = {
	children: PropTypes.arrayOf(PropTypes.string)
};

export default ListItem;
