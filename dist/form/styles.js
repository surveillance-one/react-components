import styled from "styled-components";
import remy from "utils/remy";
import { base, IconStyle } from "../ui/styles/globals";
export var HiddenInputCheckbox = styled.input.attrs(function (p) {
  return {
    type: p.type
  };
}).withConfig({
  displayName: "styles__HiddenInputCheckbox",
  componentId: "icoiux-0"
})(["border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:100px;"]);
export var InputLabel = styled.label.withConfig({
  displayName: "styles__InputLabel",
  componentId: "icoiux-1"
})(["width:100%;height:100%;"]);
export var InputCheckbox = styled.div.withConfig({
  displayName: "styles__InputCheckbox",
  componentId: "icoiux-2"
})(["display:inline-block;width:25px;height:100%;svg{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);}"]);
export var InputContainer = styled.input.attrs(function (p) {
  return {
    type: p.type,
    placeholder: p.placeholder,
    size: 5
  };
}).withConfig({
  displayName: "styles__InputContainer",
  componentId: "icoiux-3"
})(["background-color:transparent;border:none;width:100%;height:100%;padding:0 ", ";"], remy(10)); // TODO ADD IN FULL WIDTH OPTION

export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "icoiux-4"
})(["", " &&&{position:relative;overflow:initial;display:flex;", " ", " ", ";", ";", " ", " ", "}"], base, function (p) {
  return !p.match && "border: 1px solid red;";
}, function (p) {
  return p.disabled && "\n    &:hover {\n      color: inherit;\n      border: 1px solid transparent;\n    }\n    color: lightgray;\n  ";
}, function (p) {
  return IconStyle(p);
}, function (p) {
  return p.iconName && "".concat(InputContainer, " { padding: 0}");
}, function (p) {
  return p.fullWidth && "width: 100%";
}, function (p) {
  return p.type == "checkbox" && "\n    height: 2.5em;\n    width: 2.5em;\n    ".concat(p.checked && "background-color: lightgreen; ", "  \n  ");
}, function (p) {
  return p.type == "textarea" && "\n    max-height: initial;\n    height: 100%;\n    min-height: 4em;\n    padding: ".concat(remy(10), ";\n  ");
});
export var DayPickerWrapper = styled.div.withConfig({
  displayName: "styles__DayPickerWrapper",
  componentId: "icoiux-5"
})(["position:absolute;top:100%;margin-top:", ";border:1px solid lightgray;background-color:white;border-radius:.3rem;z-index:999;", " ", ""], remy(10), function (p) {
  return p.rectRight && "right: 0";
}, function (p) {
  return p.rectLeft && "left: 0";
});
export var InputTextArea = styled.textarea.withConfig({
  displayName: "styles__InputTextArea",
  componentId: "icoiux-6"
})(["background-color:transparent;border:none;width:100%;height:100%;padding:0;resize:vertical;"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsInJlbXkiLCJiYXNlIiwiSWNvblN0eWxlIiwiSGlkZGVuSW5wdXRDaGVja2JveCIsImlucHV0IiwiYXR0cnMiLCJwIiwidHlwZSIsIklucHV0TGFiZWwiLCJsYWJlbCIsIklucHV0Q2hlY2tib3giLCJkaXYiLCJJbnB1dENvbnRhaW5lciIsInBsYWNlaG9sZGVyIiwic2l6ZSIsIklucHV0V3JhcHBlciIsIm1hdGNoIiwiZGlzYWJsZWQiLCJpY29uTmFtZSIsImZ1bGxXaWR0aCIsImNoZWNrZWQiLCJEYXlQaWNrZXJXcmFwcGVyIiwicmVjdFJpZ2h0IiwicmVjdExlZnQiLCJJbnB1dFRleHRBcmVhIiwidGV4dGFyZWEiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixZQUFqQjtBQUNBLFNBQVNDLElBQVQsRUFBZUMsU0FBZixRQUFnQyxzQkFBaEM7QUFFQSxPQUFPLElBQU1DLG1CQUFtQixHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsS0FBYixDQUFtQixVQUFBQyxDQUFDO0FBQUEsU0FBSztBQUMzREMsSUFBQUEsSUFBSSxFQUFFRCxDQUFDLENBQUNDO0FBRG1ELEdBQUw7QUFBQSxDQUFwQixDQUFIO0FBQUE7QUFBQTtBQUFBLDJKQUF6QjtBQWVQLE9BQU8sSUFBTUMsVUFBVSxHQUFHVCxNQUFNLENBQUNVLEtBQVY7QUFBQTtBQUFBO0FBQUEsK0JBQWhCO0FBS1AsT0FBTyxJQUFNQyxhQUFhLEdBQUdYLE1BQU0sQ0FBQ1ksR0FBVjtBQUFBO0FBQUE7QUFBQSx3SUFBbkI7QUFhUCxPQUFPLElBQU1DLGNBQWMsR0FBR2IsTUFBTSxDQUFDSyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLFNBQUs7QUFDdERDLElBQUFBLElBQUksRUFBRUQsQ0FBQyxDQUFDQyxJQUQ4QztBQUV0RE0sSUFBQUEsV0FBVyxFQUFFUCxDQUFDLENBQUNPLFdBRnVDO0FBR3REQyxJQUFBQSxJQUFJLEVBQUU7QUFIZ0QsR0FBTDtBQUFBLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsd0ZBU1pkLElBQUksQ0FBQyxFQUFELENBVFEsQ0FBcEIsQyxDQVlQOztBQUVBLE9BQU8sSUFBTWUsWUFBWSxHQUFHaEIsTUFBTSxDQUFDWSxHQUFWO0FBQUE7QUFBQTtBQUFBLHFHQUN0QlYsSUFEc0IsRUFNckIsVUFBQUssQ0FBQztBQUFBLFNBQUksQ0FBQ0EsQ0FBQyxDQUFDVSxLQUFILElBQVksd0JBQWhCO0FBQUEsQ0FOb0IsRUFPckIsVUFBQVYsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ1csUUFBRixvSEFBSjtBQUFBLENBUG9CLEVBY3RCLFVBQUFYLENBQUM7QUFBQSxTQUFJSixTQUFTLENBQUNJLENBQUQsQ0FBYjtBQUFBLENBZHFCLEVBZXJCLFVBQUFBLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNZLFFBQUYsY0FBaUJOLGNBQWpCLG1CQUFKO0FBQUEsQ0Fmb0IsRUFnQnJCLFVBQUFOLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNhLFNBQUYsSUFBZSxhQUFuQjtBQUFBLENBaEJvQixFQWtCckIsVUFBQWIsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsSUFBRixJQUFVLFVBQVYsMkRBR0hELENBQUMsQ0FBQ2MsT0FBRixJQUFhLGdDQUhWLFdBQUo7QUFBQSxDQWxCb0IsRUF3QnJCLFVBQUFkLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLElBQUYsSUFBVSxVQUFWLGdHQUlNUCxJQUFJLENBQUMsRUFBRCxDQUpWLFVBQUo7QUFBQSxDQXhCb0IsQ0FBbEI7QUFpQ1AsT0FBTyxJQUFNcUIsZ0JBQWdCLEdBQUd0QixNQUFNLENBQUNZLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0lBR2JYLElBQUksQ0FBQyxFQUFELENBSFMsRUFRekIsVUFBQU0sQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ2dCLFNBQUYsSUFBZSxVQUFuQjtBQUFBLENBUndCLEVBU3pCLFVBQUFoQixDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDaUIsUUFBRixJQUFjLFNBQWxCO0FBQUEsQ0FUd0IsQ0FBdEI7QUFZUCxPQUFPLElBQU1DLGFBQWEsR0FBR3pCLE1BQU0sQ0FBQzBCLFFBQVY7QUFBQTtBQUFBO0FBQUEsa0dBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHJlbXkgZnJvbSBcInV0aWxzL3JlbXlcIjtcbmltcG9ydCB7IGJhc2UsIEljb25TdHlsZSB9IGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuXG5leHBvcnQgY29uc3QgSGlkZGVuSW5wdXRDaGVja2JveCA9IHN0eWxlZC5pbnB1dC5hdHRycyhwID0+ICh7XG5cdHR5cGU6IHAudHlwZVxufSkpYFxuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXRMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dENoZWNrYm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmlucHV0LmF0dHJzKHAgPT4gKHtcblx0dHlwZTogcC50eXBlLFxuXHRwbGFjZWhvbGRlcjogcC5wbGFjZWhvbGRlcixcblx0c2l6ZTogNSxcbn0pKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAke3JlbXkoMTApfTtcbmA7XG5cbi8vIFRPRE8gQUREIElOIEZVTEwgV0lEVEggT1BUSU9OXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHQke2Jhc2V9XG4gICYmJiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICR7cCA9PiAhcC5tYXRjaCAmJiBcImJvcmRlcjogMXB4IHNvbGlkIHJlZDtcIn1cbiAgJHtwID0+IHAuZGlzYWJsZWQgJiYgYFxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgYH1cblx0JHtwID0+IEljb25TdHlsZShwKX07XG4gICR7cCA9PiBwLmljb25OYW1lICYmIGAke0lucHV0Q29udGFpbmVyfSB7IHBhZGRpbmc6IDB9YH07XG4gICR7cCA9PiBwLmZ1bGxXaWR0aCAmJiBcIndpZHRoOiAxMDAlXCJ9XG5cbiAgJHtwID0+IHAudHlwZSA9PSBcImNoZWNrYm94XCIgJiYgYFxuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgICR7cC5jaGVja2VkICYmIFwiYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjsgXCJ9ICBcbiAgYH1cblxuICAke3AgPT4gcC50eXBlID09IFwidGV4dGFyZWFcIiAmJiBgXG4gICAgbWF4LWhlaWdodDogaW5pdGlhbDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNGVtO1xuICAgIHBhZGRpbmc6ICR7cmVteSgxMCl9O1xuICBgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGF5UGlja2VyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAke3JlbXkoMTApfTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gIHotaW5kZXg6IDk5OTtcbiAgJHtwID0+IHAucmVjdFJpZ2h0ICYmIFwicmlnaHQ6IDBcIn1cbiAgJHtwID0+IHAucmVjdExlZnQgJiYgXCJsZWZ0OiAwXCJ9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXRUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbmA7XG4iXX0=