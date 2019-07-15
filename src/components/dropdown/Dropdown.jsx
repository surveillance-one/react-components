import React, {
	useState, useEffect, Children, cloneElement, useCallback, useRef
} from "react";
import styled from "styled-components";
import { useOutsideClick } from "hooks";
import { Icon } from "components";
import PropTypes from "prop-types";
import { defaultTheme } from "ui/themes";
import * as sc from "./styles";

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

	useOutsideClick(cb, node);

	function selectItem(title, id) {
		setHeaderTitle(title);
		setListOpen(false);
		setSelectedID(id);
	}

	const listItems = (
		<sc.DropdownList onClick={e => e.stopPropagation()}>
			{Children.map(children, (child, i) => cloneElement(child, {
				item: i,
				currentSelection: (headerTitle === child.props.children),
				onItemClick: selectItem,
				status,
			}))}
		</sc.DropdownList>
	);

	const iconStyle = listOpen ? "chevron-up" : "chevron-down";

	return (
		<div className={className} tabIndex="1" ref={node} onClick={e => setListOpen(!listOpen)}>
			<sc.DropdownHeaderTitle>{headerTitle}</sc.DropdownHeaderTitle>
			<sc.IconArrow><Icon icon={iconStyle}/></sc.IconArrow>
			{listOpen && listItems}
		</div>
	);
};

const Dropdown = styled(DropdownComponent)`
	${sc.css_dropdownbase}
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
