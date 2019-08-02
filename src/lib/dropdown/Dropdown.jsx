import React, {
	useState, useEffect, Children, cloneElement, useCallback, useRef
} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useOutClick from "../hooks/useOutClick";
import { defaultTheme } from "../ui/themes";
import { Icon } from "../icon";

import {
	DropdownList,
	DropdownHeaderTitle,
	IconArrow,
	css_dropdownbase
} from "./styles";

/** Once dropdown styling is done:
 * TODO: update defaultProps and PropTypes
 */


const DropdownComponent = ({
	valueChange,
	title,
	children,
	status,
	className,
}) => {
	const node = useRef();
	const [listOpen, setListOpen] = useState(false);
	const [headerTitle, setHeaderTitle] = useState(title);
	const [selectedID, setSelectedID] = useState("-1");

	useEffect(() => {
		if (valueChange) valueChange(selectedID);
	}, [selectedID, valueChange]);

	const cb = useCallback(() => {
		setListOpen(false);
	}, []);

	useOutClick(cb, node);

	function selectItem(title, id) {
		setHeaderTitle(title);
		setListOpen(false);
		setSelectedID(id);
	}

	const listItems = (
		<DropdownList onClick={e => e.stopPropagation()}>
			{Children.map(children, (child, i) => cloneElement(child, {
				item: i,
				currentSelection: (headerTitle === child.props.children),
				onItemClick: selectItem,
				status,
			}))}
		</DropdownList>
	);

	const iconStyle = listOpen ? "chevron-up" : "chevron-down";

	return (
		<div className={className} tabIndex="1" ref={node} onClick={e => setListOpen(!listOpen)}>
			<DropdownHeaderTitle>{headerTitle}</DropdownHeaderTitle>
			<IconArrow><Icon icon={iconStyle}/></IconArrow>
			{listOpen && listItems}
		</div>
	);
};

const Dropdown = styled(DropdownComponent)`
	${css_dropdownbase}
`;

/** Default */
Dropdown.defaultProps = {
	theme: defaultTheme.base
};

/** Props */
Dropdown.propTypes = {
	children: PropTypes.oneOf([
		PropTypes.node
	])
};

export default Dropdown;
