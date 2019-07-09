import React from "react";
import Icon from "../icon";

const Tab = ({
	label, iconName, className, onTabClick, item
}) => (
	<li className={className} onClick={onTabClick} key={item}>
		<span className="tab__label">{label}</span>
		{iconName && <span className="icon-wrapper"><Icon icon={iconName}/></span>}
	</li>
);

export default Tab;
