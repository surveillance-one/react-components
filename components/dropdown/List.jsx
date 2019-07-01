import React, { useCallback } from "react";
import { Icon } from "../tabs/node_modules/Components";

const ListItem = ({
	onItemClick, className, currentSelection, item, status, children, value
}) => {
  const onItemsClick = useCallback(() => onItemClick(children, value || item));
	return (
		<li className={className} key={item} onClick={onItemsClick}>
			{children} {currentSelection && <Icon icon="check"/>}
			{status && <span style={{ float: "right" }}>{status}</span>}
		</li>
	);
};

export default ListItem;
