import styled, { css } from "styled-components";
import { IconWrapper, base } from "../ui/styles/globals"; // TODO ADD IN FULL WIDTH OPTION

export var InputWrapper = styled.div.withConfig({
  displayName: "styles__InputWrapper",
  componentId: "icoiux-0"
})(["", " ", " ", ""], base, function (p) {
  return p.fullWidth && "width: 100%";
}, function (p) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZm9ybS9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsIkljb25XcmFwcGVyIiwiYmFzZSIsIklucHV0V3JhcHBlciIsImRpdiIsInAiLCJmdWxsV2lkdGgiLCJpY29uTmFtZSIsImljb25Qb3NpdGlvbiIsIklucHV0Q29udGFpbmVyIiwiaW5wdXQiLCJhdHRycyIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBT0EsTUFBUCxJQUFpQkMsR0FBakIsUUFBNEIsbUJBQTVCO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsSUFBdEIsUUFBa0Msc0JBQWxDLEMsQ0FFQTs7QUFFQSxPQUFPLElBQU1DLFlBQVksR0FBR0osTUFBTSxDQUFDSyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVCQUN0QkYsSUFEc0IsRUFFckIsVUFBQUcsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsU0FBRixJQUFlLGFBQW5CO0FBQUEsQ0FGb0IsRUFHdEIsVUFBQUQsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0UsUUFBRixJQUFjUCxHQUFkLHVKQUdPLFVBQUFLLENBQUM7QUFBQSxXQUFLQSxDQUFDLENBQUNFLFFBQUYsR0FBYSxhQUFiLEdBQTZCLGNBQWxDO0FBQUEsR0FIUixFQUlTLFVBQUFGLENBQUM7QUFBQSxXQUFLQSxDQUFDLENBQUNHLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsYUFBNUIsR0FBNEMsTUFBakQ7QUFBQSxHQUpWLEVBS2EsVUFBQUgsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ0csWUFBRixLQUFtQixNQUFuQixHQUE0QixPQUE1QixHQUFzQyxHQUEzQztBQUFBLEdBTGQsRUFNWSxVQUFBSCxDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDRyxZQUFGLEtBQW1CLE1BQW5CLEdBQTRCLEdBQTVCLEdBQWtDLE9BQXZDO0FBQUEsR0FOYixFQVNGUCxXQVRFLEVBVWUsVUFBQUksQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ0csWUFBRixLQUFtQixNQUFuQixHQUE0QixpQkFBNUIsR0FBZ0QsaUJBQXJEO0FBQUEsR0FWaEIsRUFXUSxVQUFBSCxDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDRyxZQUFGLEtBQW1CLE1BQW5CLEdBQTRCLGFBQTVCLEdBQTRDLGFBQWpEO0FBQUEsR0FYVCxDQUFKO0FBQUEsQ0FIcUIsQ0FBbEI7QUFtQlAsT0FBTyxJQUFNQyxjQUFjLEdBQUdWLE1BQU0sQ0FBQ1csS0FBUCxDQUFhQyxLQUFiLENBQW1CLFVBQUFOLENBQUM7QUFBQSxTQUFLO0FBQ3RETyxJQUFBQSxJQUFJLEVBQUVQLENBQUMsQ0FBQ08sSUFBRixJQUFVLE1BRHNDO0FBRXREQyxJQUFBQSxXQUFXLEVBQUVSLENBQUMsQ0FBQ1EsV0FBRixJQUFpQjtBQUZ3QixHQUFMO0FBQUEsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxpREFBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBJY29uV3JhcHBlciwgYmFzZSB9IGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuXG4vLyBUT0RPIEFERCBJTiBGVUxMIFdJRFRIIE9QVElPTlxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0JHtiYXNlfVxuICAke3AgPT4gcC5mdWxsV2lkdGggJiYgXCJ3aWR0aDogMTAwJVwifVxuXHQke3AgPT4gcC5pY29uTmFtZSAmJiBjc3NgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAke3AgPT4gKHAuaWNvbk5hbWUgPyBcImlubGluZS1mbGV4XCIgOiBcImlubGluZS1ibG9ja1wiKX07XG4gICAgZmxleC1mbG93OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwicm93LXJldmVyc2VcIiA6IFwiYXV0b1wiKX07XG4gICAgcGFkZGluZy1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi43NWVtXCIgOiBcIjBcIil9O1xuICAgIHBhZGRpbmctbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjBcIiA6IFwiLjc1ZW1cIil9O1xuXG4gICAgLyoqIGNoYW5nZXMgaWNvbldyYXBwZXIgKi9cbiAgICAke0ljb25XcmFwcGVyfSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLjNyZW0gMCAwIC4zcmVtXCIgOiBcIjAgLjNyZW0gLjNyZW0gMFwiKX07XG4gICAgICBtYXJnaW46ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwIC43NWVtIDAgMFwiIDogXCIwIDAgMCAuNzVlbVwiKX07XG4gICAgfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmlucHV0LmF0dHJzKHAgPT4gKHtcblx0dHlwZTogcC50eXBlIHx8IFwidGV4dFwiLFxuXHRwbGFjZWhvbGRlcjogcC5wbGFjZWhvbGRlciB8fCBcImlucHV0XCJcbn0pKWBcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogbm9uZTtcbmA7XG4iXX0=