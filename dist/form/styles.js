import styled from "styled-components";
import remy from "utils/remy";
import { base, IconStyle } from "../ui/styles/globals";
export var InputContainer = styled.input.attrs(function (p) {
  return {
    type: p.type || "text",
    placeholder: p.placeholder || "input"
  };
}).withConfig({
  displayName: "styles__InputContainer",
  componentId: "icoiux-0"
})(["background-color:transparent;border:none;width:100%;height:100%;padding:0 ", ";"], remy(10)); // TODO ADD IN FULL WIDTH OPTION

export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "icoiux-1"
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
  componentId: "icoiux-2"
})(["position:absolute;top:100%;margin-top:", ";border:1px solid lightgray;border-radius:.3rem;"], remy(10));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsInJlbXkiLCJiYXNlIiwiSWNvblN0eWxlIiwiSW5wdXRDb250YWluZXIiLCJpbnB1dCIsImF0dHJzIiwicCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIklucHV0V3JhcHBlciIsImRpdiIsIm1hdGNoIiwiaWNvbk5hbWUiLCJmdWxsV2lkdGgiLCJEYXlQaWNrZXJXcmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsWUFBakI7QUFDQSxTQUFTQyxJQUFULEVBQWVDLFNBQWYsUUFBZ0Msc0JBQWhDO0FBRUEsT0FBTyxJQUFNQyxjQUFjLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxLQUFiLENBQW1CLFVBQUFDLENBQUM7QUFBQSxTQUFLO0FBQ3REQyxJQUFBQSxJQUFJLEVBQUVELENBQUMsQ0FBQ0MsSUFBRixJQUFVLE1BRHNDO0FBRXREQyxJQUFBQSxXQUFXLEVBQUVGLENBQUMsQ0FBQ0UsV0FBRixJQUFpQjtBQUZ3QixHQUFMO0FBQUEsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3RkFRWlIsSUFBSSxDQUFDLEVBQUQsQ0FSUSxDQUFwQixDLENBV1A7O0FBRUEsT0FBTyxJQUFNUyxZQUFZLEdBQUdWLE1BQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSx1R0FDdEJULElBRHNCLEVBS3JCLFVBQUFLLENBQUM7QUFBQSxTQUFJLENBQUNBLENBQUMsQ0FBQ0ssS0FBSCxJQUFZLG1DQUFoQjtBQUFBLENBTG9CLEVBTXRCLFVBQUFMLENBQUM7QUFBQSxTQUFJSixTQUFTLENBQUNJLENBQUQsQ0FBYjtBQUFBLENBTnFCLEVBT3JCLFVBQUFBLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNNLFFBQUYsY0FBaUJULGNBQWpCLCtCQUFKO0FBQUEsQ0FQb0IsRUFRckIsVUFBQUcsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ08sU0FBRixJQUFlLGFBQW5CO0FBQUEsQ0FSb0IsQ0FBbEI7QUFXUCxPQUFPLElBQU1DLGdCQUFnQixHQUFHZixNQUFNLENBQUNXLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUdBR2JWLElBQUksQ0FBQyxFQUFELENBSFMsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgcmVteSBmcm9tIFwidXRpbHMvcmVteVwiO1xuaW1wb3J0IHsgYmFzZSwgSWNvblN0eWxlIH0gZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5cbmV4cG9ydCBjb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5pbnB1dC5hdHRycyhwID0+ICh7XG5cdHR5cGU6IHAudHlwZSB8fCBcInRleHRcIixcblx0cGxhY2Vob2xkZXI6IHAucGxhY2Vob2xkZXIgfHwgXCJpbnB1dFwiXG59KSlgXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgJHtyZW15KDEwKX07XG5gO1xuXG4vLyBUT0RPIEFERCBJTiBGVUxMIFdJRFRIIE9QVElPTlxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0JHtiYXNlfVxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgJHtwID0+ICFwLm1hdGNoICYmIFwiYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XCJ9XG5cdCR7cCA9PiBJY29uU3R5bGUocCl9O1xuICAke3AgPT4gcC5pY29uTmFtZSAmJiBgJHtJbnB1dENvbnRhaW5lcn0geyBwYWRkaW5nOiAwICFpbXBvcnRhbnQgfWB9O1xuICAke3AgPT4gcC5mdWxsV2lkdGggJiYgXCJ3aWR0aDogMTAwJVwifVxuYDtcblxuZXhwb3J0IGNvbnN0IERheVBpY2tlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbWFyZ2luLXRvcDogJHtyZW15KDEwKX07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XG5gO1xuIl19