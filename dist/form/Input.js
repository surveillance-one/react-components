import React, { useState, useEffect } from "react";
import "react-day-picker/lib/style.css";
import { IconWrapper } from "../ui/styles/globals";
import { Icon } from "../icon";
import { InputContainer, InputWrapper } from "./styles";

var Input = function Input(_ref) {
  var type = _ref.type,
      placeholder = _ref.placeholder,
      iconName = _ref.iconName,
      iconBg = _ref.iconBg,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? "left" : _ref$iconPosition,
      fullWidth = _ref.fullWidth,
      handleChange = _ref.handleChange,
      val = _ref.val;
  return (// const [val, setVal] = useState(valStart);
    // useEffect(() => {
    // 	if (valueFn) valueFn(val);
    // }, [val]);
    // const handleChange = (e) => {
    // 	setVal(e.target.value);
    // };
    // TODO: MAKE SEPARATE TAB FOR SINGLE EVENT DATA
    React.createElement(InputWrapper, {
      match: true,
      type: type,
      placeholder: placeholder,
      iconName: iconName,
      iconPosition: iconPosition,
      fullWidth: fullWidth
    }, React.createElement(InputContainer, {
      placeholder: placeholder,
      value: val,
      onChange: handleChange
    }), iconName && React.createElement(IconWrapper, {
      bg: iconBg,
      iconPosition: iconPosition
    }, React.createElement(Icon, {
      icon: iconName
    })))
  );
};

export default Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9JbnB1dC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkljb25XcmFwcGVyIiwiSWNvbiIsIklucHV0Q29udGFpbmVyIiwiSW5wdXRXcmFwcGVyIiwiSW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpY29uTmFtZSIsImljb25CZyIsImljb25Qb3NpdGlvbiIsImZ1bGxXaWR0aCIsImhhbmRsZUNoYW5nZSIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFNBQTFCLFFBQTJDLE9BQTNDO0FBRUEsT0FBTyxnQ0FBUDtBQUVBLFNBQVNDLFdBQVQsUUFBNEIsc0JBQTVCO0FBRUEsU0FBU0MsSUFBVCxRQUFxQixTQUFyQjtBQUVBLFNBQ0NDLGNBREQsRUFDaUJDLFlBRGpCLFFBRU8sVUFGUDs7QUFJQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQ2JDLElBRGEsUUFDYkEsSUFEYTtBQUFBLE1BQ1BDLFdBRE8sUUFDUEEsV0FETztBQUFBLE1BQ01DLFFBRE4sUUFDTUEsUUFETjtBQUFBLE1BQ2dCQyxNQURoQixRQUNnQkEsTUFEaEI7QUFBQSwrQkFDd0JDLFlBRHhCO0FBQUEsTUFDd0JBLFlBRHhCLGtDQUN1QyxNQUR2QztBQUFBLE1BQytDQyxTQUQvQyxRQUMrQ0EsU0FEL0M7QUFBQSxNQUMwREMsWUFEMUQsUUFDMERBLFlBRDFEO0FBQUEsTUFDd0VDLEdBRHhFLFFBQ3dFQSxHQUR4RTtBQUFBLFNBR2Q7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdFLHdCQUFDLFlBQUQ7QUFDQyxNQUFBLEtBQUssRUFBRSxJQURSO0FBRUMsTUFBQSxJQUFJLEVBQUVQLElBRlA7QUFHQyxNQUFBLFdBQVcsRUFBRUMsV0FIZDtBQUlDLE1BQUEsUUFBUSxFQUFFQyxRQUpYO0FBS0MsTUFBQSxZQUFZLEVBQUVFLFlBTGY7QUFNQyxNQUFBLFNBQVMsRUFBRUM7QUFOWixPQU9DLG9CQUFDLGNBQUQ7QUFDQyxNQUFBLFdBQVcsRUFBRUosV0FEZDtBQUVDLE1BQUEsS0FBSyxFQUFFTSxHQUZSO0FBR0MsTUFBQSxRQUFRLEVBQUVEO0FBSFgsTUFQRCxFQVdFSixRQUFRLElBQ1Ysb0JBQUMsV0FBRDtBQUNDLE1BQUEsRUFBRSxFQUFFQyxNQURMO0FBRUMsTUFBQSxZQUFZLEVBQUVDO0FBRmYsT0FHQyxvQkFBQyxJQUFEO0FBQU0sTUFBQSxJQUFJLEVBQUVGO0FBQVosTUFIRCxDQVpBO0FBaEJZO0FBQUEsQ0FBZDs7QUF5Q0EsZUFBZUgsS0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgXCJyZWFjdC1kYXktcGlja2VyL2xpYi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tIFwiLi4vdWkvc3R5bGVzL2dsb2JhbHNcIjtcblxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9pY29uXCI7XG5cbmltcG9ydCB7XG5cdElucHV0Q29udGFpbmVyLCBJbnB1dFdyYXBwZXJcbn0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IElucHV0ID0gKHtcblx0dHlwZSwgcGxhY2Vob2xkZXIsIGljb25OYW1lLCBpY29uQmcsIGljb25Qb3NpdGlvbiA9IFwibGVmdFwiLCBmdWxsV2lkdGgsIGhhbmRsZUNoYW5nZSwgdmFsXG59KSA9PlxuLy8gY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKHZhbFN0YXJ0KTtcblxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vIFx0aWYgKHZhbHVlRm4pIHZhbHVlRm4odmFsKTtcbi8vIH0sIFt2YWxdKTtcblxuLy8gY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbi8vIFx0c2V0VmFsKGUudGFyZ2V0LnZhbHVlKTtcbi8vIH07XG5cbi8vIFRPRE86IE1BS0UgU0VQQVJBVEUgVEFCIEZPUiBTSU5HTEUgRVZFTlQgREFUQVxuXG5cdCAoXG5cdFx0PElucHV0V3JhcHBlclxuXHRcdFx0bWF0Y2g9e3RydWV9XG5cdFx0XHR0eXBlPXt0eXBlfVxuXHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0aWNvbk5hbWU9e2ljb25OYW1lfVxuXHRcdFx0aWNvblBvc2l0aW9uPXtpY29uUG9zaXRpb259XG5cdFx0XHRmdWxsV2lkdGg9e2Z1bGxXaWR0aH0+XG5cdFx0XHQ8SW5wdXRDb250YWluZXJcblx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHR2YWx1ZT17dmFsfVxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG5cdFx0XHR7aWNvbk5hbWUgJiZcblx0XHQ8SWNvbldyYXBwZXJcblx0XHRcdGJnPXtpY29uQmd9XG5cdFx0XHRpY29uUG9zaXRpb249e2ljb25Qb3NpdGlvbn0+XG5cdFx0XHQ8SWNvbiBpY29uPXtpY29uTmFtZX0vPlxuXHRcdDwvSWNvbldyYXBwZXI+fVxuXHRcdDwvSW5wdXRXcmFwcGVyPlxuXHQpO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG5cdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=