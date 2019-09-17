import styled, { css } from "styled-components";
import { IconWrapper, base } from "../ui/styles/globals"; // TODO ADD IN FULL WIDTH OPTION

export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "icoiux-0"
})(["", " ", " ", ""], base, function (p) {
  return p.iconName && css(["align-items:center;justify-content:center;display:", ";flex-flow:", ";padding-right:", ";padding-left:", ";", "{border-radius:", ";margin:", ";}"], function (p) {
    return p.iconName ? "inline-flex" : "inline-block";
  }, function (p) {
    return p.iconPosition === "left" ? "row-reverse" : "auto";
  }, function (p) {
    return p.iconPosition === "left" ? ".75em" : "0";
  }, function (p) {
    return p.iconPosition === "left" ? "0" : ".75em";
  }, IconWrapper, function (p) {
    return p.iconPosition === "left" ? ".3rem 0 0 .3rem" : "0 .3rem .3rem 0";
  }, function (p) {
    return p.iconPosition === "left" ? "0 .75em 0 0" : "0 0 0 .75em";
  });
}, function (p) {
  return p.fullWidth && "width: 100%";
});
export var InputContainer = styled.input.attrs(function (p) {
  return {
    type: p.type || "text",
    placeholder: p.placeholder || "input"
  };
}).withConfig({
  displayName: "styles__InputContainer",
  componentId: "icoiux-1"
})(["background-color:transparent;border:none;"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsIkljb25XcmFwcGVyIiwiYmFzZSIsIklucHV0V3JhcHBlciIsImRpdiIsInAiLCJpY29uTmFtZSIsImljb25Qb3NpdGlvbiIsImZ1bGxXaWR0aCIsIklucHV0Q29udGFpbmVyIiwiaW5wdXQiLCJhdHRycyIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBT0EsTUFBUCxJQUFpQkMsR0FBakIsUUFBNEIsbUJBQTVCO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsSUFBdEIsUUFBa0Msc0JBQWxDLEMsQ0FFQTs7QUFFQSxPQUFPLElBQU1DLFlBQVksR0FBR0osTUFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVCQUN0QkYsSUFEc0IsRUFFdEIsVUFBQUcsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsUUFBRixJQUFjTixHQUFkLHVKQUdPLFVBQUFLLENBQUM7QUFBQSxXQUFLQSxDQUFDLENBQUNDLFFBQUYsR0FBYSxhQUFiLEdBQTZCLGNBQWxDO0FBQUEsR0FIUixFQUlTLFVBQUFELENBQUM7QUFBQSxXQUFLQSxDQUFDLENBQUNFLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsYUFBNUIsR0FBNEMsTUFBakQ7QUFBQSxHQUpWLEVBS2EsVUFBQUYsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ0UsWUFBRixLQUFtQixNQUFuQixHQUE0QixPQUE1QixHQUFzQyxHQUEzQztBQUFBLEdBTGQsRUFNWSxVQUFBRixDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDRSxZQUFGLEtBQW1CLE1BQW5CLEdBQTRCLEdBQTVCLEdBQWtDLE9BQXZDO0FBQUEsR0FOYixFQVNGTixXQVRFLEVBVWUsVUFBQUksQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ0UsWUFBRixLQUFtQixNQUFuQixHQUE0QixpQkFBNUIsR0FBZ0QsaUJBQXJEO0FBQUEsR0FWaEIsRUFXUSxVQUFBRixDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDRSxZQUFGLEtBQW1CLE1BQW5CLEdBQTRCLGFBQTVCLEdBQTRDLGFBQWpEO0FBQUEsR0FYVCxDQUFKO0FBQUEsQ0FGcUIsRUFnQnJCLFVBQUFGLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNHLFNBQUYsSUFBZSxhQUFuQjtBQUFBLENBaEJvQixDQUFsQjtBQW1CUCxPQUFPLElBQU1DLGNBQWMsR0FBR1YsTUFBTSxDQUFDVyxLQUFQLENBQWFDLEtBQWIsQ0FBbUIsVUFBQU4sQ0FBQztBQUFBLFNBQUs7QUFDdERPLElBQUFBLElBQUksRUFBRVAsQ0FBQyxDQUFDTyxJQUFGLElBQVUsTUFEc0M7QUFFdERDLElBQUFBLFdBQVcsRUFBRVIsQ0FBQyxDQUFDUSxXQUFGLElBQWlCO0FBRndCLEdBQUw7QUFBQSxDQUFwQixDQUFIO0FBQUE7QUFBQTtBQUFBLGlEQUFwQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEljb25XcmFwcGVyLCBiYXNlIH0gZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5cbi8vIFRPRE8gQUREIElOIEZVTEwgV0lEVEggT1BUSU9OXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHQke2Jhc2V9XG5cdCR7cCA9PiBwLmljb25OYW1lICYmIGNzc2BcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6ICR7cCA9PiAocC5pY29uTmFtZSA/IFwiaW5saW5lLWZsZXhcIiA6IFwiaW5saW5lLWJsb2NrXCIpfTtcbiAgICBmbGV4LWZsb3c6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCJyb3ctcmV2ZXJzZVwiIDogXCJhdXRvXCIpfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLjc1ZW1cIiA6IFwiMFwiKX07XG4gICAgcGFkZGluZy1sZWZ0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMFwiIDogXCIuNzVlbVwiKX07XG5cbiAgICAvKiogY2hhbmdlcyBpY29uV3JhcHBlciAqL1xuICAgICR7SWNvbldyYXBwZXJ9IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIuM3JlbSAwIDAgLjNyZW1cIiA6IFwiMCAuM3JlbSAuM3JlbSAwXCIpfTtcbiAgICAgIG1hcmdpbjogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjAgLjc1ZW0gMCAwXCIgOiBcIjAgMCAwIC43NWVtXCIpfTtcbiAgICB9XG4gIGB9XG4gICR7cCA9PiBwLmZ1bGxXaWR0aCAmJiBcIndpZHRoOiAxMDAlXCJ9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQuaW5wdXQuYXR0cnMocCA9PiAoe1xuXHR0eXBlOiBwLnR5cGUgfHwgXCJ0ZXh0XCIsXG5cdHBsYWNlaG9sZGVyOiBwLnBsYWNlaG9sZGVyIHx8IFwiaW5wdXRcIlxufSkpYFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiBub25lO1xuYDtcbiJdfQ==