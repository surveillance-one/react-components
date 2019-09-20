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
	type, placeholder, iconName, iconBg, iconPosition = "left", fullWidth, handleChange, valStart, setVal
}) => {
	const node = useRef();
	const dateNode = useRef();
	// const [val, setVal] = useState(new Date(valStart).toLocaleDateString());
	const [valDate, setValDate] = useState(true);
	const [dayShow, setDayShow] = useState(false);
	const [rectRight, setRectRight] = useState(false);
	const [rectLeft, setRectLeft] = useState(false);

	console.log(new Date(valStart).toLocaleDateString());
	console.log(valStart);


	useEffect(() => {
		if (dateNode.current) {
			const rect = dateNode.current.getBoundingClientRect();
			if (rect.right > document.documentElement.offsetWidth) setRectRight(true);
			if (rect.left < 0) setRectLeft(true);
		}
	}, []);

	// useEffect(() => {

	// }, [onDayClick])

	useOutClick(setDayShow, node);

	const onDayClick = (day) => {
		const newDay = day.toLocaleDateString();
		setVal({ date: newDay });
		// setVal(newDay);
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

	const handleChange1 = (e) => {
		handleChange("date", e);
		validateDate(e);
		// setVal(e.target.value);
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
				value={valStart}
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
