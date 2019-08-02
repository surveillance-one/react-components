import { useLayoutEffect } from "react";

function useRefWidth(item, onSendRef, ref, bool) {
	useLayoutEffect(() => {
		if (item === 0 && bool) {
			onSendRef({
				width: ref.current.getBoundingClientRect().width,
				left: ref.current.offsetLeft,
			});
		}
	}, [item, onSendRef, ref, bool]);
}

export default useRefWidth;
