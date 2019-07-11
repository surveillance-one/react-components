import React, {
	useState, useEffect, Children, cloneElement, useCallback, useRef
} from "react";
import styled from "styled-components";
import { useOutsideClick } from "hooks";
import Icon from "components/icon";
import theme from "ui/themes";
import * as Styles from "./styles";

const Dropdown = ({
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
	}, [selectedID]);

	const cb = useCallback(() => {
		setListOpen(false);
	});

	useOutsideClick(cb, node);

	function selectItem(title, id) {
		setHeaderTitle(title);
		setListOpen(false);
		setSelectedID(id);
	}

	const listItems = (
		<Styles.DropdownList onClick={e => e.stopPropagation()}>
			{Children.map(children, (child, i) => cloneElement(child, {
				item: i,
				currentSelection: (headerTitle == child.props.children),
				onItemClick: useCallback(() => selectItem(child.props.children, child.props.value || i)),
				status,
			}))}
		</Styles.DropdownList>
	);

	return (
		<div ref={node} className={className}>
			<Styles.DropdownWrapper onClick={e => setListOpen(!listOpen)}active={listOpen}>
				<Styles.DropdownHeaderTitle>{headerTitle}</Styles.DropdownHeaderTitle>
				<Styles.IconArrow>
					<Icon icon={listOpen ? "chevron-up" : "chevron-down"} size="1x"/>
				</Styles.IconArrow>
				{listOpen && listItems}
			</Styles.DropdownWrapper>
		</div>
	);
};

const StyledDropdown = styled(Dropdown)`
	${Styles.DropdownBase}
	
`;

StyledDropdown.defaultProps = {
	theme: theme.base
};

export default StyledDropdown;
