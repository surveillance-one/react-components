import React, {
	useState, useCallback, useRef, useEffect
} from "react";
import PropTypes from "prop-types";

/* Imports Day Picker 3rd party library TODO: Make custom Day Picker */
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

/* Import validatation Regex */
import { regExDate, regExHour } from "../utils/regexValidate";

/* Hook for watching outside clicks */
import useOutClick from "../hooks/useOutClick";

/* Imports from Global Styling */
import { IconWrapper } from "../ui/styles/globals";
import { Icon } from "../icon";

/* Per component styling */
import { InputContainer, InputWrapper, DayPickerWrapper } from "./styles";


/**
 * @title Input Date
 *
 * @summary Input Date Component that uses a 3rd party library to display a calendar day picker. Also supports hour input
 * @see StyledComponents
 *
 * @version 1.0.0
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

const InputDate = ({
	placeholder = "Date",
	iconPosition = "left",
	time = "date",
	type = "text",
	iconName,
	iconBg,
	fullWidth,
	handleChange,
	val,
	disabled,
	name
}) => {
	const node = useRef();
	const dateNode = useRef();
	const [valDate, setValDate] = useState(true);
	const [dayShow, setDayShow] = useState(false);
	const [rectRight, setRectRight] = useState(false);
	const [rectLeft, setRectLeft] = useState(false);

	useOutClick(setDayShow, node);

	useEffect(() => {
		if (dateNode.current) {
			const rect = dateNode.current.getBoundingClientRect();
			if (rect.right > document.documentElement.offsetWidth) setRectRight(true);
			if (rect.left < 0) setRectLeft(true);
		}
	}, [dayShow]);


	const onDayClick = (day) => {
		const obj = {
			target: {
				name,
				value: day.toLocaleDateString()
			}
		};
		handleChange(obj);
		setValDate(true);
		setDayShow(false);
	};

	const onInputClick = useCallback(() => {
		if (time == "date") setDayShow(!dayShow);
	}, [dayShow]);

	const validateInput = (e) => {
		console.log(regExDate, valDate);
		const curVal = e.target.value;
		const regex = time == "date" ? regExDate : regExHour;
		if (!!curVal.match(regex)) setValDate(true);
		else setValDate(false);
	};

	const handleChangeValidate = (e) => {
		handleChange(e);
		validateInput(e);
	};

	return (
		<InputWrapper
			match={valDate}
			ref={node}
			type={type}
			placeholder={placeholder}
			iconName={iconName}
			iconPosition={iconPosition}
			disabled={time == "hour" ? disabled : false}
			fullWidth={fullWidth}>
			<InputContainer
				onClick={onInputClick}
				name={name}
				disabled={time == "hour" ? disabled : false}
				placeholder={placeholder}
				value={val}
				onChange={handleChangeValidate}/>
			{iconName &&
				<IconWrapper
					bg={iconBg}
					iconPosition={iconPosition}>
					<Icon icon={iconName}/>
				</IconWrapper>
			}
			{dayShow &&
				<DayPickerWrapper ref={dateNode} rectRight={rectRight} rectLeft={rectLeft}>
					<DayPicker onDayClick={onDayClick}/>
				</DayPickerWrapper>
			}
		</InputWrapper>
	);

};

InputDate.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	iconName: PropTypes.string,
	iconBg: PropTypes.string,
	iconPosition: PropTypes.string,
	fullWidth: PropTypes.bool,
	handleChange: PropTypes.func,
	val: PropTypes.string,
	checked: PropTypes.bool,
	time: PropTypes.string,
	disabled: PropTypes.bool,
};

export default InputDate;
