import React, { useCallback } from "react";
import { Icon } from "components";
import { defaultTheme } from "ui/themes";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as sc from "./styles";

const ListItemComponent = ({
	onItemClick, className, currentSelection, item, status, children, value
}) => (
	<li className={className} key={item} onClick={useCallback(() => onItemClick(children, value || item), [onItemClick, children, value, item])}>
		{children} {currentSelection && <Icon icon="check"/>}
		{status && <span style={{ float: "right" }}>{status}</span>}
	</li>
);

const ListItem = styled(ListItemComponent)`
	${sc.css_dropdownlistbase}
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

// useCallback(() => selectItem(child.props.children, child.props.value || i))
