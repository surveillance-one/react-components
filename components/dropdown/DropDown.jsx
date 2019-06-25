import React, {
	useState, useEffect, Children, cloneElement, useCallback, useRef
} from "react";

import { Icon } from "../tabs/node_modules/Components";
import { useOutsideClick } from "hooks";

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

	return (
		<div ref={node} className={className}>
			<div className={`dropdown ${listOpen ? "dropdown--active" : ""}`} onClick={e => setListOpen(!listOpen)}>
				<div className="dropdown__header-title">{headerTitle}</div>
				<i className="dropdown__icon--arrow">
					<Icon icon={listOpen ? "chevron-up" : "chevron-down"} size="1x"/>
				</i>
				{listOpen && <ul className="dropdown__list" onClick={e => e.stopPropagation()}>
					{Children.map(children, (child, i) => cloneElement(child, {
						item: i,
						onItemClick: selectItem,
						currentSelection: (headerTitle == child.props.children),
						value: child.props.value,
						status,
					}))}
					{/* {children.map(({ props }, index) => (
					<li className="dropdown__list-item" key={index} id={props.value} onClick={() => selectItem(props.children, props.value)}>{props.children} {headerTitle == props.children && <Icon icon="check"/>}{status && <span style={{ float: "right" }}>{status}</span>}</li>
				))} */}
				</ul> }
			</div>
		</div>
	);
};

export default Dropdown;
