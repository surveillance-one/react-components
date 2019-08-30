import { useEffect } from "react";

function useOutsideClick(cb, node) {
	useEffect(() => {
		function handleClickOutside(e) {
			if (node.current.contains(e.target)) return;
			cb(false);
		}
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	});
}

export default useOutsideClick;
