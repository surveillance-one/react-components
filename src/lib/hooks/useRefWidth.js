import { useLayoutEffect } from "react";

function useRefWidth(item, onSendRef, ref, bool, currentTab) {
	useLayoutEffect(() => {
		if (currentTab && bool) {
			onSendRef({
				width: ref.current.getBoundingClientRect().width,
				left: ref.current.offsetLeft,
			});
		}
	}, [item, onSendRef, ref, bool, currentTab]);
}

export default useRefWidth;
