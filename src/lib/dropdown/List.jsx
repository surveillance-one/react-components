import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { defaultTheme } from "../ui/themes";
import { ListItemStyle } from "./styles";
import useDropdownClick from "../hooks/useDropdownClick";

const ListItem = ({
	onItemClick, item, status, children, value, onClick, setSelectedID, active = false, ...props
}) => {
	const cb = useDropdownClick(onItemClick, children, value, item, onClick);

	if (props.currentSelection) {
		onClick(cb);
	}

	return (
		<ListItemStyle
			{...props}
			onClick={cb}
			key={item}>
			{children}
			{status && <span style={{ float: "right" }}>{status}</span>}
		</ListItemStyle>
	);
};

/** Default Props */
ListItem.defaultProps = {
	theme: defaultTheme.base
};

/** Prop Types */
ListItem.propTypes = {
	children: PropTypes.arrayOf(PropTypes.string)
};

export default ListItem;
