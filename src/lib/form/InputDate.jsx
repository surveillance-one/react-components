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
	type, placeholder, iconName, iconBg, iconPosition = "left", fullWidth, handleChange, val, setVal, time = "date"
}) => {
	const node = useRef();
	const dateNode = useRef();
	// const [val, setVal] = useState(new Date(valStart).toLocaleDateString());
	const [valDate, setValDate] = useState(true);
	const [dayShow, setDayShow] = useState(false);
	const [rectRight, setRectRight] = useState(false);
	const [rectLeft, setRectLeft] = useState(false);

	useEffect(() => {
		if (dateNode.current) {
			console.log("fired");
			const rect = dateNode.current.getBoundingClientRect();
			if (rect.right > document.documentElement.offsetWidth) setRectRight(true);
			if (rect.left < 0) setRectLeft(true);
		}
	}, [dayShow]);

	useOutClick(setDayShow, node);

	const onDayClick = (day) => {
		const newDay = day.toLocaleDateString();
		handleChange(time, newDay);
		setValDate(true);
		setDayShow(false);
	};

	const onInputClick = useCallback(() => {
		if (time == "date") setDayShow(!dayShow);
	}, [dayShow]);


	const validateDate = (e) => {
		const curVal = e.target.value;
		const regExDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

		const match = !!curVal.match(regExDate);
		if (match) setValDate(true);
		else setValDate(false);
	};

	const validateHour = (e) => {
		const curVal = e.target.value;
		console.log(curVal);
		const regExHour = /((1[0-2]|0?[1-9])?([AaPp][Mm]))/;

		const match = !!curVal.match(regExHour);
		if (match) setValDate(true);
		else setValDate(false);
	};

	const handleChange1 = (e) => {
		handleChange(time, e);
		if (time == "date") validateDate(e);
		if (time == "hour") validateHour(e);
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
				onChange={handleChange1}/>
			{iconName &&
		<IconWrapper
			bg={iconBg}
			iconPosition={iconPosition}>
			<Icon icon={iconName}/>
		</IconWrapper>}
			{dayShow &&
			<DayPickerWrapper ref={dateNode} rectRight={rectRight} rectLeft={rectLeft}>
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
