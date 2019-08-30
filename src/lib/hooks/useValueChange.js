

import { useEffect } from "react";

function useOutsideClick(valueChange, selectedID) {
	useEffect(() => {
		if (valueChange) valueChange(selectedID);
	}, [selectedID, valueChange]);
}

export default useOutsideClick;
