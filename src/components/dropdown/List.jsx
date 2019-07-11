import React, { useCallback } from "react";
import Icon from "components/icon";
import theme from "ui/themes";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as Styles from "./styles";

const ListItem = ({
	onItemClick, className, currentSelection, item, status, children, value
}) => {
	return (
		<li className={className} key={item} onClick={onItemClick}>
			{children} {currentSelection && <Icon icon="check"/>}
			{status && <span style={{ float: "right" }}>{status}</span>}
		</li>
	);
};

const StyledListItem = styled(ListItem)`
	${Styles.DropdownListBase}
`;

StyledListItem.defaultProps = {
	theme: theme.base
};

export default ListItem;
