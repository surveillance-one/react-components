import styled, { css } from "styled-components";
import { globalStyles, IconWrapper, IconStyle, base, buttonStyle } from "../ui/styles/globals";
export var ButtonGroupStyled = styled.div.withConfig({
  displayName: "styles__ButtonGroupStyled",
  componentId: "sc-8oanmn-0"
})(["display:flex;button{width:100%;overflow:visible;margin:", ";", "}"], function (p) {
  return p.inline ? "5px 0" : "5px";
}, function (p) {
  return p.inline && css(["&:not(:first-child):not(:last-child){border-radius:0;margin-right:1px;}&:first-child{border-radius:.3rem 0 0 .3rem;margin-right:1px;}&:last-child{border-radius:0 .3rem .3rem 0;}"]);
});
export var BtnLabel = styled.span.withConfig({
  displayName: "styles__BtnLabel",
  componentId: "sc-8oanmn-1"
})(["display:block;position:static;"]);
export var ButtonContainer = styled.button.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-8oanmn-2"
})(["", ";", " ", ";", ";", ";", " ", ""], globalStyles, base, function (p) {
  return IconStyle(p);
}, function (p) {
  return p.primary && !p.secondary && buttonStyle("primary");
}, function (p) {
  return p.secondary && !p.primary && buttonStyle("secondary");
}, function (p) {
  return (p.rounded && !p.squared || p.circle) && css(["&{border-radius:3rem;padding:calc(.375em - 1px) 1em;padding-right:", ";padding-left:", ";}"], function (p) {
    return p.iconName && (p.iconPosition === "left" ? "1em !important" : "0 !important");
  }, function (p) {
    return p.iconName && (p.iconPosition === "left" ? "0 !important" : "1em !important");
  });
}, function (p) {
  return (p.squared && !p.rounded || p.circle) && css(["&{justify-content:center;padding:.75em !important;display:inline-flex;margin:0;", "{background:", ";padding:", ";margin:0;display:block;}}"], IconWrapper, function (p) {
    return p.squared || p.circle ? "none" : "";
  }, function (p) {
    return p.squared || p.circle ? "0" : ".75";
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYnV0dG9uL3N0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwiZ2xvYmFsU3R5bGVzIiwiSWNvbldyYXBwZXIiLCJJY29uU3R5bGUiLCJiYXNlIiwiYnV0dG9uU3R5bGUiLCJCdXR0b25Hcm91cFN0eWxlZCIsImRpdiIsInAiLCJpbmxpbmUiLCJCdG5MYWJlbCIsInNwYW4iLCJCdXR0b25Db250YWluZXIiLCJidXR0b24iLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwicm91bmRlZCIsInNxdWFyZWQiLCJjaXJjbGUiLCJpY29uTmFtZSIsImljb25Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxJQUFpQkMsR0FBakIsUUFBNEIsbUJBQTVCO0FBRUEsU0FDQ0MsWUFERCxFQUNlQyxXQURmLEVBQzRCQyxTQUQ1QixFQUN1Q0MsSUFEdkMsRUFDNkNDLFdBRDdDLFFBRU8sc0JBRlA7QUFJQSxPQUFPLElBQU1DLGlCQUFpQixHQUFHUCxNQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEVBUWhCLFVBQUFDLENBQUM7QUFBQSxTQUFLQSxDQUFDLENBQUNDLE1BQUYsR0FBVyxPQUFYLEdBQXFCLEtBQTFCO0FBQUEsQ0FSZSxFQVN4QixVQUFBRCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxNQUFGLElBQVlULEdBQVosdUxBQUo7QUFBQSxDQVR1QixDQUF2QjtBQTBCUCxPQUFPLElBQU1VLFFBQVEsR0FBR1gsTUFBTSxDQUFDWSxJQUFWO0FBQUE7QUFBQTtBQUFBLHNDQUFkO0FBS1AsT0FBTyxJQUFNQyxlQUFlLEdBQUdiLE1BQU0sQ0FBQ2MsTUFBVjtBQUFBO0FBQUE7QUFBQSwyQ0FFeEJaLFlBRndCLEVBTXhCRyxJQU53QixFQU94QixVQUFBSSxDQUFDO0FBQUEsU0FBSUwsU0FBUyxDQUFDSyxDQUFELENBQWI7QUFBQSxDQVB1QixFQVF4QixVQUFBQSxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDTSxPQUFGLElBQWEsQ0FBQ04sQ0FBQyxDQUFDTyxTQUFoQixJQUE2QlYsV0FBVyxDQUFDLFNBQUQsQ0FBNUM7QUFBQSxDQVJ1QixFQVN6QixVQUFBRyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDTyxTQUFGLElBQWUsQ0FBQ1AsQ0FBQyxDQUFDTSxPQUFsQixJQUE2QlQsV0FBVyxDQUFDLFdBQUQsQ0FBNUM7QUFBQSxDQVR3QixFQVd4QixVQUFBRyxDQUFDO0FBQUEsU0FBSSxDQUFFQSxDQUFDLENBQUNRLE9BQUYsSUFBYSxDQUFDUixDQUFDLENBQUNTLE9BQWpCLElBQTZCVCxDQUFDLENBQUNVLE1BQWhDLEtBQTJDbEIsR0FBM0MsaUdBR1ksVUFBQVEsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ1csUUFBRixLQUFlWCxDQUFDLENBQUNZLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsZ0JBQTVCLEdBQStDLGNBQTlELENBQUw7QUFBQSxHQUhiLEVBSVcsVUFBQVosQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ1csUUFBRixLQUFlWCxDQUFDLENBQUNZLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsY0FBNUIsR0FBNkMsZ0JBQTVELENBQUw7QUFBQSxHQUpaLENBQUo7QUFBQSxDQVh1QixFQWtCeEIsVUFBQVosQ0FBQztBQUFBLFNBQUksQ0FBRUEsQ0FBQyxDQUFDUyxPQUFGLElBQWEsQ0FBQ1QsQ0FBQyxDQUFDUSxPQUFqQixJQUE2QlIsQ0FBQyxDQUFDVSxNQUFoQyxLQUEyQ2xCLEdBQTNDLGlKQU1IRSxXQU5HLEVBT1csVUFBQU0sQ0FBQztBQUFBLFdBQU1BLENBQUMsQ0FBQ1MsT0FBRixJQUFhVCxDQUFDLENBQUNVLE1BQWhCLEdBQTBCLE1BQTFCLEdBQW1DLEVBQXhDO0FBQUEsR0FQWixFQVFRLFVBQUFWLENBQUM7QUFBQSxXQUFNQSxDQUFDLENBQUNTLE9BQUYsSUFBYVQsQ0FBQyxDQUFDVSxNQUFoQixHQUEwQixHQUExQixHQUFnQyxLQUFyQztBQUFBLEdBUlQsQ0FBSjtBQUFBLENBbEJ1QixDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7XG5cdGdsb2JhbFN0eWxlcywgSWNvbldyYXBwZXIsIEljb25TdHlsZSwgYmFzZSwgYnV0dG9uU3R5bGVcbn0gZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIC8qKiBTdHlsZXMgdGhlIENvbnRhaW5lciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbiAgLyoqIFN0eWxlcyB0aGUgYnV0dG9ucyAqL1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG1hcmdpbjogJHtwID0+IChwLmlubGluZSA/IFwiNXB4IDBcIiA6IFwiNXB4XCIpfTtcbiAgICAke3AgPT4gcC5pbmxpbmUgJiYgY3NzYFxuICAgICY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgfVxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJhZGl1czogLjNyZW0gMCAwIC4zcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIC4zcmVtIC4zcmVtIDA7XG4gICAgfVxuICBgfVxuICB9XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCdG5MYWJlbCA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHN0YXRpYztcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuYnV0dG9uYFxuICAvKiogR2xvYmFsIFN0eWxlcyAqL1xuICAke2dsb2JhbFN0eWxlc307XG5cblxuICAvKiogUGVyLWNvbXBvbmVuZXQgcGFyZW50IHN0eWxlcyAqL1xuICAke2Jhc2V9XG4gICR7cCA9PiBJY29uU3R5bGUocCl9O1xuICAke3AgPT4gcC5wcmltYXJ5ICYmICFwLnNlY29uZGFyeSAmJiBidXR0b25TdHlsZShcInByaW1hcnlcIil9O1xuXHQke3AgPT4gcC5zZWNvbmRhcnkgJiYgIXAucHJpbWFyeSAmJiBidXR0b25TdHlsZShcInNlY29uZGFyeVwiKX07XG5cbiAgJHtwID0+ICgocC5yb3VuZGVkICYmICFwLnNxdWFyZWQpIHx8IHAuY2lyY2xlKSAmJiBjc3NgJntcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIHBhZGRpbmc6IGNhbGMoLjM3NWVtIC0gMXB4KSAxZW07XG4gICAgcGFkZGluZy1yaWdodDogJHtwID0+IChwLmljb25OYW1lICYmIChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjFlbSAhaW1wb3J0YW50XCIgOiBcIjAgIWltcG9ydGFudFwiKSl9O1xuICAgIHBhZGRpbmctbGVmdDogJHtwID0+IChwLmljb25OYW1lICYmIChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjAgIWltcG9ydGFudFwiIDogXCIxZW0gIWltcG9ydGFudFwiKSl9O1xuICB9YH1cblxuICAke3AgPT4gKChwLnNxdWFyZWQgJiYgIXAucm91bmRlZCkgfHwgcC5jaXJjbGUpICYmIGNzc2Ame1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IC43NWVtICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxuICAgICR7SWNvbldyYXBwZXJ9IHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cCA9PiAoKHAuc3F1YXJlZCB8fCBwLmNpcmNsZSkgPyBcIm5vbmVcIiA6IFwiXCIpfTtcbiAgICAgIHBhZGRpbmc6ICR7cCA9PiAoKHAuc3F1YXJlZCB8fCBwLmNpcmNsZSkgPyBcIjBcIiA6IFwiLjc1XCIpfTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfWB9XG5cbmA7XG4iXX0=