/* eslint-disable object-curly-newline */
import React, { useState, Children, cloneElement, useRef } from "react";

import PropTypes from "prop-types";
import useOutClick from "../hooks/useOutClick";
import useValueChange from "../hooks/useValueChange";
import { Button } from "../button";

import { DropdownContainer, DropdownListMenu, DropdownListContent } from "./styles";

const Dropdown = ({
	valueChange,
	title,
	children,
	status,
	iconBg = true,
	iconPosition = "right"
}) => {
	const node = useRef();
	const [listOpen, setListOpen] = useState(false);
	const [headerTitle, setHeaderTitle] = useState(title);
	const [selectedID, setSelectedID] = useState("-1");

	useValueChange(valueChange, selectedID);
	useOutClick(setListOpen, node);

	const selectItem = (title, id) => {
		setHeaderTitle(title);
		setListOpen(false);
		setSelectedID(id);
	};

	return (
		<DropdownContainer tabIndex="1" ref={node} onClick={e => setListOpen(!listOpen)}>
			<Button iconBg={iconBg} iconPosition={iconPosition} iconName="angle-down">{headerTitle}</Button>
			{listOpen &&
				<DropdownListMenu onClick={e => e.stopPropagation()}>
					<DropdownListContent>
						{Children.map(children, (child, i) => cloneElement(child, {
							item: i,
							currentSelection: (headerTitle === child.props.children),
							onItemClick: selectItem,
							status,
						}))}
					</DropdownListContent>
				</DropdownListMenu>
			}
		</DropdownContainer>
	);
};

/** Props */
Dropdown.propTypes = {
	children: PropTypes.oneOf([
		PropTypes.node
	])
};

export default Dropdown;
