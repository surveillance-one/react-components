import styled from "styled-components";
import remy from "utils/remy";
import { base, IconStyle } from "../ui/styles/globals";
export var InputContainer = styled.input.attrs(function (p) {
  return {
    type: p.type || "text",
    placeholder: p.placeholder || "input",
    size: 5
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
})(["position:absolute;top:100%;margin-top:", ";border:1px solid lightgray;background-color:white;border-radius:.3rem;z-index:999;", ""], remy(10), function (p) {
  return p.rectRight && "right: 0";
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsInJlbXkiLCJiYXNlIiwiSWNvblN0eWxlIiwiSW5wdXRDb250YWluZXIiLCJpbnB1dCIsImF0dHJzIiwicCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNpemUiLCJJbnB1dFdyYXBwZXIiLCJkaXYiLCJtYXRjaCIsImljb25OYW1lIiwiZnVsbFdpZHRoIiwiRGF5UGlja2VyV3JhcHBlciIsInJlY3RSaWdodCJdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFlBQWpCO0FBQ0EsU0FBU0MsSUFBVCxFQUFlQyxTQUFmLFFBQWdDLHNCQUFoQztBQUVBLE9BQU8sSUFBTUMsY0FBYyxHQUFHSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsS0FBYixDQUFtQixVQUFBQyxDQUFDO0FBQUEsU0FBSztBQUN0REMsSUFBQUEsSUFBSSxFQUFFRCxDQUFDLENBQUNDLElBQUYsSUFBVSxNQURzQztBQUV0REMsSUFBQUEsV0FBVyxFQUFFRixDQUFDLENBQUNFLFdBQUYsSUFBaUIsT0FGd0I7QUFHdERDLElBQUFBLElBQUksRUFBRTtBQUhnRCxHQUFMO0FBQUEsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3RkFTWlQsSUFBSSxDQUFDLEVBQUQsQ0FUUSxDQUFwQixDLENBWVA7O0FBRUEsT0FBTyxJQUFNVSxZQUFZLEdBQUdYLE1BQU0sQ0FBQ1ksR0FBVjtBQUFBO0FBQUE7QUFBQSx1R0FDdEJWLElBRHNCLEVBS3JCLFVBQUFLLENBQUM7QUFBQSxTQUFJLENBQUNBLENBQUMsQ0FBQ00sS0FBSCxJQUFZLG1DQUFoQjtBQUFBLENBTG9CLEVBTXRCLFVBQUFOLENBQUM7QUFBQSxTQUFJSixTQUFTLENBQUNJLENBQUQsQ0FBYjtBQUFBLENBTnFCLEVBT3JCLFVBQUFBLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNPLFFBQUYsY0FBaUJWLGNBQWpCLCtCQUFKO0FBQUEsQ0FQb0IsRUFRckIsVUFBQUcsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ1EsU0FBRixJQUFlLGFBQW5CO0FBQUEsQ0FSb0IsQ0FBbEI7QUFXUCxPQUFPLElBQU1DLGdCQUFnQixHQUFHaEIsTUFBTSxDQUFDWSxHQUFWO0FBQUE7QUFBQTtBQUFBLDBJQUdiWCxJQUFJLENBQUMsRUFBRCxDQUhTLEVBUXpCLFVBQUFNLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNVLFNBQUYsSUFBZSxVQUFuQjtBQUFBLENBUndCLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHJlbXkgZnJvbSBcInV0aWxzL3JlbXlcIjtcbmltcG9ydCB7IGJhc2UsIEljb25TdHlsZSB9IGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuXG5leHBvcnQgY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuaW5wdXQuYXR0cnMocCA9PiAoe1xuXHR0eXBlOiBwLnR5cGUgfHwgXCJ0ZXh0XCIsXG5cdHBsYWNlaG9sZGVyOiBwLnBsYWNlaG9sZGVyIHx8IFwiaW5wdXRcIixcblx0c2l6ZTogNSxcbn0pKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAke3JlbXkoMTApfTtcbmA7XG5cbi8vIFRPRE8gQUREIElOIEZVTEwgV0lEVEggT1BUSU9OXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHQke2Jhc2V9XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICAke3AgPT4gIXAubWF0Y2ggJiYgXCJib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcIn1cblx0JHtwID0+IEljb25TdHlsZShwKX07XG4gICR7cCA9PiBwLmljb25OYW1lICYmIGAke0lucHV0Q29udGFpbmVyfSB7IHBhZGRpbmc6IDAgIWltcG9ydGFudCB9YH07XG4gICR7cCA9PiBwLmZ1bGxXaWR0aCAmJiBcIndpZHRoOiAxMDAlXCJ9XG5gO1xuXG5leHBvcnQgY29uc3QgRGF5UGlja2VyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAke3JlbXkoMTApfTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gIHotaW5kZXg6IDk5OTtcbiAgJHtwID0+IHAucmVjdFJpZ2h0ICYmIFwicmlnaHQ6IDBcIn1cbmA7XG4iXX0=