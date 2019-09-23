import styled from "styled-components";
import remy from "utils/remy";
import { base, IconStyle } from "../ui/styles/globals";
export var HiddenInputCheckbox = styled.input.attrs(function (p) {
  return {
    type: "checkbox"
  };
}).withConfig({
  displayName: "styles__HiddenInputCheckbox",
  componentId: "icoiux-0"
})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:100px;"]);
export var InputCheckbox = styled.div.withConfig({
  displayName: "styles__InputCheckbox",
  componentId: "icoiux-1"
})(["display:inline-block;width:16px;height:16px;background:", ";border-radius:3px;transition:all 150ms;"], function (p) {
  return p.checked ? "salmon" : "papayawhip";
});
export var CheckboxContainer = styled.div.withConfig({
  displayName: "styles__CheckboxContainer",
  componentId: "icoiux-2"
})(["display:inline-block;vertical-align:middle;"]);
export var InputContainer = styled.input.attrs(function (p) {
  return {
    type: p.type,
    placeholder: p.placeholder || "input",
    size: 5
  };
}).withConfig({
  displayName: "styles__InputContainer",
  componentId: "icoiux-3"
})(["background-color:transparent;border:none;width:100%;height:100%;padding:0 ", ";"], remy(10)); // TODO ADD IN FULL WIDTH OPTION

export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "icoiux-4"
})(["", " position:relative !important;overflow:initial !important;display:flex;", " ", ";", ";", ""], base, function (p) {
  return !p.match && "border: 1px solid red !important;";
}, function (p) {
  return IconStyle(p);
}, function (p) {
  return p.iconName && "".concat(InputContainer, " { padding: 0 !important }");
}, function (p) {
  return p.fullWidth && "width: 100%";
});
export var DayPickerWrapper = styled.div.withConfig({
  displayName: "styles__DayPickerWrapper",
  componentId: "icoiux-5"
})(["position:absolute;top:100%;margin-top:", ";border:1px solid lightgray;background-color:white;border-radius:.3rem;z-index:999;", ""], remy(10), function (p) {
  return p.rectRight && "right: 0";
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsInJlbXkiLCJiYXNlIiwiSWNvblN0eWxlIiwiSGlkZGVuSW5wdXRDaGVja2JveCIsImlucHV0IiwiYXR0cnMiLCJwIiwidHlwZSIsIklucHV0Q2hlY2tib3giLCJkaXYiLCJjaGVja2VkIiwiQ2hlY2tib3hDb250YWluZXIiLCJJbnB1dENvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwic2l6ZSIsIklucHV0V3JhcHBlciIsIm1hdGNoIiwiaWNvbk5hbWUiLCJmdWxsV2lkdGgiLCJEYXlQaWNrZXJXcmFwcGVyIiwicmVjdFJpZ2h0Il0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsWUFBakI7QUFDQSxTQUFTQyxJQUFULEVBQWVDLFNBQWYsUUFBZ0Msc0JBQWhDO0FBRUEsT0FBTyxJQUFNQyxtQkFBbUIsR0FBR0osTUFBTSxDQUFDSyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLFNBQUs7QUFDM0RDLElBQUFBLElBQUksRUFBRTtBQURxRCxHQUFMO0FBQUEsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSwwSkFBekI7QUFlUCxPQUFPLElBQU1DLGFBQWEsR0FBR1QsTUFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLDRHQUlWLFVBQUFILENBQUM7QUFBQSxTQUFLQSxDQUFDLENBQUNJLE9BQUYsR0FBWSxRQUFaLEdBQXVCLFlBQTVCO0FBQUEsQ0FKUyxDQUFuQjtBQVNQLE9BQU8sSUFBTUMsaUJBQWlCLEdBQUdaLE1BQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSxtREFBdkI7QUFNUCxPQUFPLElBQU1HLGNBQWMsR0FBR2IsTUFBTSxDQUFDSyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLFNBQUs7QUFDdERDLElBQUFBLElBQUksRUFBRUQsQ0FBQyxDQUFDQyxJQUQ4QztBQUV0RE0sSUFBQUEsV0FBVyxFQUFFUCxDQUFDLENBQUNPLFdBQUYsSUFBaUIsT0FGd0I7QUFHdERDLElBQUFBLElBQUksRUFBRTtBQUhnRCxHQUFMO0FBQUEsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3RkFTWmQsSUFBSSxDQUFDLEVBQUQsQ0FUUSxDQUFwQixDLENBWVA7O0FBRUEsT0FBTyxJQUFNZSxZQUFZLEdBQUdoQixNQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUdBQ3RCUixJQURzQixFQUtyQixVQUFBSyxDQUFDO0FBQUEsU0FBSSxDQUFDQSxDQUFDLENBQUNVLEtBQUgsSUFBWSxtQ0FBaEI7QUFBQSxDQUxvQixFQU10QixVQUFBVixDQUFDO0FBQUEsU0FBSUosU0FBUyxDQUFDSSxDQUFELENBQWI7QUFBQSxDQU5xQixFQU9yQixVQUFBQSxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDVyxRQUFGLGNBQWlCTCxjQUFqQiwrQkFBSjtBQUFBLENBUG9CLEVBUXJCLFVBQUFOLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNZLFNBQUYsSUFBZSxhQUFuQjtBQUFBLENBUm9CLENBQWxCO0FBV1AsT0FBTyxJQUFNQyxnQkFBZ0IsR0FBR3BCLE1BQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSwwSUFHYlQsSUFBSSxDQUFDLEVBQUQsQ0FIUyxFQVF6QixVQUFBTSxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDYyxTQUFGLElBQWUsVUFBbkI7QUFBQSxDQVJ3QixDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCByZW15IGZyb20gXCJ1dGlscy9yZW15XCI7XG5pbXBvcnQgeyBiYXNlLCBJY29uU3R5bGUgfSBmcm9tIFwiLi4vdWkvc3R5bGVzL2dsb2JhbHNcIjtcblxuZXhwb3J0IGNvbnN0IEhpZGRlbklucHV0Q2hlY2tib3ggPSBzdHlsZWQuaW5wdXQuYXR0cnMocCA9PiAoe1xuXHR0eXBlOiBcImNoZWNrYm94XCJcbn0pKWBcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBjbGlwcGF0aDogaW5zZXQoNTAlKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXRDaGVja2JveCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAke3AgPT4gKHAuY2hlY2tlZCA/IFwic2FsbW9uXCIgOiBcInBhcGF5YXdoaXBcIil9O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcztcbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja2JveENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmlucHV0LmF0dHJzKHAgPT4gKHtcblx0dHlwZTogcC50eXBlLFxuXHRwbGFjZWhvbGRlcjogcC5wbGFjZWhvbGRlciB8fCBcImlucHV0XCIsXG5cdHNpemU6IDUsXG59KSlgXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgJHtyZW15KDEwKX07XG5gO1xuXG4vLyBUT0RPIEFERCBJTiBGVUxMIFdJRFRIIE9QVElPTlxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0JHtiYXNlfVxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgJHtwID0+ICFwLm1hdGNoICYmIFwiYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XCJ9XG5cdCR7cCA9PiBJY29uU3R5bGUocCl9O1xuICAke3AgPT4gcC5pY29uTmFtZSAmJiBgJHtJbnB1dENvbnRhaW5lcn0geyBwYWRkaW5nOiAwICFpbXBvcnRhbnQgfWB9O1xuICAke3AgPT4gcC5mdWxsV2lkdGggJiYgXCJ3aWR0aDogMTAwJVwifVxuYDtcblxuZXhwb3J0IGNvbnN0IERheVBpY2tlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbWFyZ2luLXRvcDogJHtyZW15KDEwKX07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuICB6LWluZGV4OiA5OTk7XG4gICR7cCA9PiBwLnJlY3RSaWdodCAmJiBcInJpZ2h0OiAwXCJ9XG5gO1xuIl19