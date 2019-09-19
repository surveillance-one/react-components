import React, {
	useState, useCallback, useRef, useEffect
} from "react";
import PropTypes from "prop-types";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import useOutClick from "../hooks/useOutClick";

import { IconWrapper } from "../ui/styles/globals";

import { Icon } from "../icon";

import {
	InputContainer, InputWrapper, DayPickerWrapper
} from "./styles";

const InputDate = ({
	type, placeholder, iconName, iconBg, iconPosition = "left", fullWidth, valueFn, valStart
}) => {
	const node = useRef();
	const [val, setVal] = useState(new Date(valStart).toLocaleDateString());
	const [valDate, setValDate] = useState(false);
	const [dayShow, setDayShow] = useState(false);


	// TODO: DECOUPLE STATE IN THE APP AND LET THAT BE ON WHERE EVER ITS IMPLEMENTED
	console.log("shouuld change", val);

	useOutClick(setDayShow, node);

	// setVal(new Date(valStart).toLocaleDateString());

	useEffect(() => {
		if (valueFn) valueFn(val);
	}, [val]);

	const onDayClick = (day) => {
		const newDay = day.toLocaleDateString();
		setVal(newDay);
		setValDate(true);
		setDayShow(false);
	};

	const onInputClick = useCallback(() => {
		setDayShow(!dayShow);
	}, [dayShow]);


	const validateDate = (e) => {
		const curVal = e.target.value;
		const regExDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

		const match = !!curVal.match(regExDate);
		if (match) setValDate(true);
		else setValDate(false);
	};

	const handleChange = (e) => {
		validateDate(e);
		setVal(e.target.value);
	};

	return (
		<InputWrapper
			match={valDate}
			ref={node}
			type={type}
			placeholder={placeholder}
			iconName={iconName}
			iconPosition={iconPosition}
			fullWidth={fullWidth}>
			<InputContainer
				onClick={onInputClick}
				placeholder={placeholder}
				value={val}
				onChange={handleChange}/>
			{iconName &&
		<IconWrapper
			bg={iconBg}
			iconPosition={iconPosition}>
			<Icon icon={iconName}/>
		</IconWrapper>}
			{dayShow &&
			<DayPickerWrapper>
				<DayPicker onDayClick={onDayClick}/>
			</DayPickerWrapper>
			}
		</InputWrapper>
	);

};

InputDate.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
};

export default InputDate;
