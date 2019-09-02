import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { defaultTheme } from "../ui/themes";
import { ListItemStyle } from "./styles";
import useDropdownClick from "../hooks/useDropdownClick";

const ListItem = ({
	onItemClick, item, status, children, value, onClick, ...props
}) => (
	<ListItemStyle
		{...props}
		onClick={useDropdownClick(onItemClick, children, value, item, onClick)}
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
