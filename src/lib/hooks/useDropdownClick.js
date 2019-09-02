import { useCallback } from "react";

function useDropdownClick(onItemClick, children, value, item, onClick) {
	const callFunc = useCallback((event) => {
		onItemClick(children, value || item);
		if (onClick) onClick(event);
	}, [onItemClick, children, value, item, onClick]);

	return callFunc;
}

export default useDropdownClick;
