import React from "react";
import Icon from "../icon";

const Tab = ({
	label, iconName, className, onTabClick
}) => (
	<li className={className} onClick={onTabClick}>
		<span className="tab__label">{label}</span>
		{iconName && <span className="icon-wrapper"><Icon icon={iconName}/></span>}
	</li>
);

export default Tab;
