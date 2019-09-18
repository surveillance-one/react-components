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
})(["", " display:flex;", ";", ";", ""], base, function (p) {
  return IconStyle(p);
}, function (p) {
  return p.iconName && "".concat(InputContainer, " { padding: 0 !important }");
}, function (p) {
  return p.fullWidth && "width: 100%";
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsInJlbXkiLCJiYXNlIiwiSWNvblN0eWxlIiwiSW5wdXRDb250YWluZXIiLCJpbnB1dCIsImF0dHJzIiwicCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIklucHV0V3JhcHBlciIsImRpdiIsImljb25OYW1lIiwiZnVsbFdpZHRoIl0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsWUFBakI7QUFDQSxTQUFTQyxJQUFULEVBQWVDLFNBQWYsUUFBZ0Msc0JBQWhDO0FBRUEsT0FBTyxJQUFNQyxjQUFjLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxLQUFiLENBQW1CLFVBQUFDLENBQUM7QUFBQSxTQUFLO0FBQ3REQyxJQUFBQSxJQUFJLEVBQUVELENBQUMsQ0FBQ0MsSUFBRixJQUFVLE1BRHNDO0FBRXREQyxJQUFBQSxXQUFXLEVBQUVGLENBQUMsQ0FBQ0UsV0FBRixJQUFpQjtBQUZ3QixHQUFMO0FBQUEsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3RkFRWlIsSUFBSSxDQUFDLEVBQUQsQ0FSUSxDQUFwQixDLENBV1A7O0FBRUEsT0FBTyxJQUFNUyxZQUFZLEdBQUdWLE1BQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSx5Q0FDdEJULElBRHNCLEVBR3RCLFVBQUFLLENBQUM7QUFBQSxTQUFJSixTQUFTLENBQUNJLENBQUQsQ0FBYjtBQUFBLENBSHFCLEVBSXJCLFVBQUFBLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNLLFFBQUYsY0FBaUJSLGNBQWpCLCtCQUFKO0FBQUEsQ0FKb0IsRUFLckIsVUFBQUcsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ00sU0FBRixJQUFlLGFBQW5CO0FBQUEsQ0FMb0IsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgcmVteSBmcm9tIFwidXRpbHMvcmVteVwiO1xuaW1wb3J0IHsgYmFzZSwgSWNvblN0eWxlIH0gZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5cbmV4cG9ydCBjb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5pbnB1dC5hdHRycyhwID0+ICh7XG5cdHR5cGU6IHAudHlwZSB8fCBcInRleHRcIixcblx0cGxhY2Vob2xkZXI6IHAucGxhY2Vob2xkZXIgfHwgXCJpbnB1dFwiXG59KSlgXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgJHtyZW15KDEwKX07XG5gO1xuXG4vLyBUT0RPIEFERCBJTiBGVUxMIFdJRFRIIE9QVElPTlxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0JHtiYXNlfVxuICBkaXNwbGF5OiBmbGV4O1xuXHQke3AgPT4gSWNvblN0eWxlKHApfTtcbiAgJHtwID0+IHAuaWNvbk5hbWUgJiYgYCR7SW5wdXRDb250YWluZXJ9IHsgcGFkZGluZzogMCAhaW1wb3J0YW50IH1gfTtcbiAgJHtwID0+IHAuZnVsbFdpZHRoICYmIFwid2lkdGg6IDEwMCVcIn1cbmA7XG4iXX0=