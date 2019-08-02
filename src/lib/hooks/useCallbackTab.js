import { useCallback } from "react";

function useCallbackTab(item, onSendRef, onTabClick, ref, onClick, slider) {
	const callFunc = useCallback((event) => {
		onTabClick(item);
		if (onClick) onClick(event);
		if (slider) {
			onSendRef({
				width: ref.current.getBoundingClientRect().width,
				left: ref.current.offsetLeft,
			});
		}
	}, [onTabClick, item, onSendRef, onClick, slider, ref]);

	return callFunc;
}

export default useCallbackTab;
