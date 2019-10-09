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
  return (p.squared && !p.rounded || p.circle) && css(["&{justify-content:center;padding:.75em !important;display:inline-flex;margin:0;", "{background:", ";border:", ";padding:", ";margin:0;display:block;}}"], IconWrapper, function (p) {
    return p.squared || p.circle ? "none" : "";
  }, function (p) {
    return p.squared || p.circle ? "none" : "";
  }, function (p) {
    return p.squared || p.circle ? "0" : ".75";
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYnV0dG9uL3N0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwiZ2xvYmFsU3R5bGVzIiwiSWNvbldyYXBwZXIiLCJJY29uU3R5bGUiLCJiYXNlIiwiYnV0dG9uU3R5bGUiLCJCdXR0b25Hcm91cFN0eWxlZCIsImRpdiIsInAiLCJpbmxpbmUiLCJCdG5MYWJlbCIsInNwYW4iLCJCdXR0b25Db250YWluZXIiLCJidXR0b24iLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwicm91bmRlZCIsInNxdWFyZWQiLCJjaXJjbGUiLCJpY29uTmFtZSIsImljb25Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxJQUFpQkMsR0FBakIsUUFBNEIsbUJBQTVCO0FBRUEsU0FDQ0MsWUFERCxFQUNlQyxXQURmLEVBQzRCQyxTQUQ1QixFQUN1Q0MsSUFEdkMsRUFDNkNDLFdBRDdDLFFBRU8sc0JBRlA7QUFJQSxPQUFPLElBQU1DLGlCQUFpQixHQUFHUCxNQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEVBUWhCLFVBQUFDLENBQUM7QUFBQSxTQUFLQSxDQUFDLENBQUNDLE1BQUYsR0FBVyxPQUFYLEdBQXFCLEtBQTFCO0FBQUEsQ0FSZSxFQVN4QixVQUFBRCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxNQUFGLElBQVlULEdBQVosdUxBQUo7QUFBQSxDQVR1QixDQUF2QjtBQTBCUCxPQUFPLElBQU1VLFFBQVEsR0FBR1gsTUFBTSxDQUFDWSxJQUFWO0FBQUE7QUFBQTtBQUFBLHNDQUFkO0FBS1AsT0FBTyxJQUFNQyxlQUFlLEdBQUdiLE1BQU0sQ0FBQ2MsTUFBVjtBQUFBO0FBQUE7QUFBQSwyQ0FFeEJaLFlBRndCLEVBTXhCRyxJQU53QixFQU94QixVQUFBSSxDQUFDO0FBQUEsU0FBSUwsU0FBUyxDQUFDSyxDQUFELENBQWI7QUFBQSxDQVB1QixFQVF4QixVQUFBQSxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDTSxPQUFGLElBQWEsQ0FBQ04sQ0FBQyxDQUFDTyxTQUFoQixJQUE2QlYsV0FBVyxDQUFDLFNBQUQsQ0FBNUM7QUFBQSxDQVJ1QixFQVN6QixVQUFBRyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDTyxTQUFGLElBQWUsQ0FBQ1AsQ0FBQyxDQUFDTSxPQUFsQixJQUE2QlQsV0FBVyxDQUFDLFdBQUQsQ0FBNUM7QUFBQSxDQVR3QixFQVd4QixVQUFBRyxDQUFDO0FBQUEsU0FBSSxDQUFFQSxDQUFDLENBQUNRLE9BQUYsSUFBYSxDQUFDUixDQUFDLENBQUNTLE9BQWpCLElBQTZCVCxDQUFDLENBQUNVLE1BQWhDLEtBQTJDbEIsR0FBM0MsaUdBR1ksVUFBQVEsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ1csUUFBRixLQUFlWCxDQUFDLENBQUNZLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsZ0JBQTVCLEdBQStDLGNBQTlELENBQUw7QUFBQSxHQUhiLEVBSVcsVUFBQVosQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ1csUUFBRixLQUFlWCxDQUFDLENBQUNZLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsY0FBNUIsR0FBNkMsZ0JBQTVELENBQUw7QUFBQSxHQUpaLENBQUo7QUFBQSxDQVh1QixFQWtCeEIsVUFBQVosQ0FBQztBQUFBLFNBQUksQ0FBRUEsQ0FBQyxDQUFDUyxPQUFGLElBQWEsQ0FBQ1QsQ0FBQyxDQUFDUSxPQUFqQixJQUE2QlIsQ0FBQyxDQUFDVSxNQUFoQyxLQUEyQ2xCLEdBQTNDLDZKQU1IRSxXQU5HLEVBT1csVUFBQU0sQ0FBQztBQUFBLFdBQU1BLENBQUMsQ0FBQ1MsT0FBRixJQUFhVCxDQUFDLENBQUNVLE1BQWhCLEdBQTBCLE1BQTFCLEdBQW1DLEVBQXhDO0FBQUEsR0FQWixFQVFPLFVBQUFWLENBQUM7QUFBQSxXQUFNQSxDQUFDLENBQUNTLE9BQUYsSUFBYVQsQ0FBQyxDQUFDVSxNQUFoQixHQUEwQixNQUExQixHQUFtQyxFQUF4QztBQUFBLEdBUlIsRUFTUSxVQUFBVixDQUFDO0FBQUEsV0FBTUEsQ0FBQyxDQUFDUyxPQUFGLElBQWFULENBQUMsQ0FBQ1UsTUFBaEIsR0FBMEIsR0FBMUIsR0FBZ0MsS0FBckM7QUFBQSxHQVRULENBQUo7QUFBQSxDQWxCdUIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQge1xuXHRnbG9iYWxTdHlsZXMsIEljb25XcmFwcGVyLCBJY29uU3R5bGUsIGJhc2UsIGJ1dHRvblN0eWxlXG59IGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXBTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAvKiogU3R5bGVzIHRoZSBDb250YWluZXIgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgXG4gIC8qKiBTdHlsZXMgdGhlIGJ1dHRvbnMgKi9cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBtYXJnaW46ICR7cCA9PiAocC5pbmxpbmUgPyBcIjVweCAwXCIgOiBcIjVweFwiKX07XG4gICAgJHtwID0+IHAuaW5saW5lICYmIGNzc2BcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtIDAgMCAuM3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAuM3JlbSAuM3JlbSAwO1xuICAgIH1cbiAgYH1cbiAgfVxuYDtcblxuXG5leHBvcnQgY29uc3QgQnRuTGFiZWwgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgLyoqIEdsb2JhbCBTdHlsZXMgKi9cbiAgJHtnbG9iYWxTdHlsZXN9O1xuXG5cbiAgLyoqIFBlci1jb21wb25lbmV0IHBhcmVudCBzdHlsZXMgKi9cbiAgJHtiYXNlfVxuICAke3AgPT4gSWNvblN0eWxlKHApfTtcbiAgJHtwID0+IHAucHJpbWFyeSAmJiAhcC5zZWNvbmRhcnkgJiYgYnV0dG9uU3R5bGUoXCJwcmltYXJ5XCIpfTtcblx0JHtwID0+IHAuc2Vjb25kYXJ5ICYmICFwLnByaW1hcnkgJiYgYnV0dG9uU3R5bGUoXCJzZWNvbmRhcnlcIil9O1xuXG4gICR7cCA9PiAoKHAucm91bmRlZCAmJiAhcC5zcXVhcmVkKSB8fCBwLmNpcmNsZSkgJiYgY3NzYCZ7XG4gICAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgICBwYWRkaW5nOiBjYWxjKC4zNzVlbSAtIDFweCkgMWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7cCA9PiAocC5pY29uTmFtZSAmJiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIxZW0gIWltcG9ydGFudFwiIDogXCIwICFpbXBvcnRhbnRcIikpfTtcbiAgICBwYWRkaW5nLWxlZnQ6ICR7cCA9PiAocC5pY29uTmFtZSAmJiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwICFpbXBvcnRhbnRcIiA6IFwiMWVtICFpbXBvcnRhbnRcIikpfTtcbiAgfWB9XG5cbiAgJHtwID0+ICgocC5zcXVhcmVkICYmICFwLnJvdW5kZWQpIHx8IHAuY2lyY2xlKSAmJiBjc3NgJntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNzVlbSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICAke0ljb25XcmFwcGVyfSB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3AgPT4gKChwLnNxdWFyZWQgfHwgcC5jaXJjbGUpID8gXCJub25lXCIgOiBcIlwiKX07XG4gICAgICBib3JkZXI6ICR7cCA9PiAoKHAuc3F1YXJlZCB8fCBwLmNpcmNsZSkgPyBcIm5vbmVcIiA6IFwiXCIpfTtcbiAgICAgIHBhZGRpbmc6ICR7cCA9PiAoKHAuc3F1YXJlZCB8fCBwLmNpcmNsZSkgPyBcIjBcIiA6IFwiLjc1XCIpfTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfWB9XG5cbmA7XG4iXX0=