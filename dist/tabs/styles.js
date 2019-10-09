import styled, { css } from "styled-components";
import { rgba } from "polished";
import { globalStyles, base } from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";
export var TabListContainer = styled.div.withConfig({
  displayName: "styles__TabListContainer",
  componentId: "o7g3x3-0"
})(["", ";&&{display:flex;}"], globalStyles);
export var TabsList = styled.ol.withConfig({
  displayName: "styles__TabsList",
  componentId: "o7g3x3-1"
})(["display:inline-flex;position:relative;padding-left:0;margin:1rem 0 border-radius:.3rem;font-weight:400;background:none;", ""], function (p) {
  return p.slider && "\n\t\tmargin: auto\n\t\tbackground-color: #EEEEEE;\n\t\tborder-radius: 8px;\n\t\tdisplay: inline-flex;\n\n\t\tdiv, li {\n\t\t\ttext-decoration:none;\n\t\t\t/** display:inline-block; */\n\t\t\tposition:relative;\n\t\t\tz-index:1;\n\t\t\ttransition-duration:0.6s;\n\t\t}\n\t";
});
export var Selector = styled.div.withConfig({
  displayName: "styles__Selector",
  componentId: "o7g3x3-2"
})(["position:absolute !important;background-color:#FFFFFF;color:", ";border-radius:7px;box-shadow:0 2px 10px rgba(0,0,0,.1) !important;left:2px;bottom:2px;top:2px;z-index:1;transition-duration:0.6s;transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);width:", "px;left:", "px;"], function (p) {
  return p.primary || p.secondary ? "white" : "rgba(0,0,0,.6)";
}, function (p) {
  return p.width - 2;
}, function (p) {
  return p.left;
});
export var TabsContent = styled.div.withConfig({
  displayName: "styles__TabsContent",
  componentId: "o7g3x3-3"
})(["position:relative;margin:auto;padding:1.1rem;border:solid 1px rgba(0,0,0,0.1);border-radius:.3rem;background:rgb(255,255,255);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);*{margin:auto;}"]);
export var css_tabbase = css(["", ";align-self:center;position:relative;display:flex;vertical-align:baseline;height:2.5em;max-height:3em;min-height:1em;margin:0;padding:calc(.375em - 1px) 2em;border:none;box-shadow:none;border-radius:.3rem;-moz-transform:none;-webkit-transform:none;transform:none;color:rgba(0,0,0,.6);font-style:normal;font-weight:500;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;cursor:pointer;list-style:none;outline:0;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;user-select:none;white-space:nowrap;&:first-of-type{margin-right:.36em;}&:last-of-type{margin-left:.36em;}&:not(:first-of-type):not(:last-of-type){margin:0 .36em;}&:hover{", " color:rgba(0,0,0,.8);}&:active,&:focus{outline:none;}"], globalStyles, function (p) {
  return !p.underline && !p.underlineAll && !p.slider && css(["background-color:rgba(224,225,226,1);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border:solid 1px rgba(0,0,0,0.1);"]);
});
export var css_slider = css(["height:1.75em;margin:2px !important;padding:0 20px;font-weight:400;&:active,&:focus{transition:all .6s linear;color:black;}&:not(:first-of-type):before{content:\" | \";position:absolute;color:rgba(0,0,0,.1);top:1px;left:-4px;opacity:1;transition:all .6s linear;}&[current=true] + &:before,&[current=true]:before{opacity:0;}"]);
export var TabLabel = styled.span.withConfig({
  displayName: "styles__TabLabel",
  componentId: "o7g3x3-4"
})(["display:block;position:static;vertical-align:middle;margin:auto;"]);
export var IconWrapper = styled.span.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "o7g3x3-5"
})(["display:table-cell;text-align:center;box-shadow:-1px 0 0 0 transparent inset;"]);
export var css_tabicons = css(["display:", ";align-items:center;justify-content:center;flex-flow:", ";", "{margin:", ";}"], function (p) {
  return p.iconName ? "inline-flex" : "inline-block";
}, function (p) {
  return p.iconPosition === "left" ? "row-reverse" : "auto";
}, IconWrapper, function (p) {
  return p.iconPosition === "left" ? "0 .4em 0 0" : "0 0 0 .4em";
});
export var css_showicononlyonactive = css(["&:not(:hover) > ", "{visibility:hidden;opacity:0;margin-right:", " margin-left:", "}&:hover > ", "{visibility:visible;opacity:1;margin-right:", " margin-left:", " transition:visibility 0.5s,opacity 0.5s,margin-right 0.1s,margin-left 0.1s linear;}"], IconWrapper, function (p) {
  return p.iconPosition === "right" ? "-15px" : "initial";
}, function (p) {
  return p.iconPosition === "left" ? "-15px" : "initial";
}, IconWrapper, function (p) {
  return p.iconPosition === "right" ? "0" : "inherit";
}, function (p) {
  return p.iconPosition === "left" ? "0" : "inherit";
});
export var css_tabcurrent = css(["background:rgba(224,225,226,1);color:", ";box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border:solid 1px rgba(0,0,0,0.1);&::after{content:\"\";position:absolute;top:99%;left:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);box-sizing:border-box;width:.6em;height:.6em;margin:.5px 0 0;border-bottom:solid 1px rgba(224,225,226,1);border-right:solid 1px rgba(224,225,226,1);background:rgba(224,225,226,1);z-index:1;}"], function (p) {
  return p.primary || p.secondary ? "white" : "rgba(0,0,0,.6)";
});
export var tabStyle = function tabStyle(type) {
  var color = defaultTheme.COLOR[type];
  var bgColor = defaultTheme.BG_COLOR[type];
  return css(["&{color:", ";background:", ";&:hover{color:", ";background:", ";}&::after{background:", ";border-bottom-color:", ";border-right-color:", ";}}"], function (p) {
    return p.currentTab ? color : "";
  }, function (p) {
    return p.currentTab ? bgColor : "";
  }, rgba(color, 0.8), bgColor, bgColor, bgColor, bgColor);
};
export var css_tabrounded = css(["border-radius:3rem;"]);
export var css_tabcurrentunderline = css(["color:black;font-weight:700;border-bottom:1px solid black;border-radius:0;&:hover{background:none;box-shadow:none;color:rgba(0,0,0,.6);border:none;}"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJiYXNlIiwiZGVmYXVsdFRoZW1lIiwiVGFiTGlzdENvbnRhaW5lciIsImRpdiIsIlRhYnNMaXN0Iiwib2wiLCJwIiwic2xpZGVyIiwiU2VsZWN0b3IiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwid2lkdGgiLCJsZWZ0IiwiVGFic0NvbnRlbnQiLCJjc3NfdGFiYmFzZSIsInVuZGVybGluZSIsInVuZGVybGluZUFsbCIsImNzc19zbGlkZXIiLCJUYWJMYWJlbCIsInNwYW4iLCJJY29uV3JhcHBlciIsImNzc190YWJpY29ucyIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYmN1cnJlbnQiLCJ0YWJTdHlsZSIsInR5cGUiLCJjb2xvciIsIkNPTE9SIiwiYmdDb2xvciIsIkJHX0NPTE9SIiwiY3VycmVudFRhYiIsImNzc190YWJyb3VuZGVkIiwiY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsVUFBckI7QUFDQSxTQUFTQyxZQUFULEVBQXVCQyxJQUF2QixRQUFtQyxzQkFBbkM7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGNBQTdCO0FBRUEsT0FBTyxJQUFNQyxnQkFBZ0IsR0FBR04sTUFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtCQUV6QkosWUFGeUIsQ0FBdEI7QUFRUCxPQUFPLElBQU1LLFFBQVEsR0FBR1IsTUFBTSxDQUFDUyxFQUFWO0FBQUE7QUFBQTtBQUFBLG9JQVNsQixVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxNQUFGLHNSQUFKO0FBQUEsQ0FUaUIsQ0FBZDtBQXlCUCxPQUFPLElBQU1DLFFB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QUFBQSxXQUFLQSxDQUFDLENBQUMwQixVQUFGLEdBQWVKLEtBQWYsR0FBdUIsRUFBNUI7QUFBQSxHQURYLEVBRWUsVUFBQXRCLENBQUM7QUFBQSxXQUFLQSxDQUFDLENBQUMwQixVQUFGLEdBQWVGLE9BQWYsR0FBeUIsRUFBOUI7QUFBQSxHQUZoQixFQUlXaEMsSUFBSSxDQUFDOEIsS0FBRCxFQUFRLEdBQVIsQ0FKZixFQUtnQkUsT0FMaEIsRUFRZ0JBLE9BUmhCLEVBU3lCQSxPQVR6QixFQVV3QkEsT0FWeEI7QUFhQSxDQWhCTTtBQWtCUCxPQUFPLElBQU1HLGNBQWMsR0FBR3BDLEdBQUgseUJBQXBCO0FBS1AsT0FBTyxJQUFNcUMsdUJBQXVCLEdBQUdyQyxHQUFILDBKQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcbmltcG9ydCB7IGdsb2JhbFN0eWxlcywgYmFzZSB9IGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuXG5leHBvcnQgY29uc3QgVGFiTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdFx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0XHQke2dsb2JhbFN0eWxlc307XG5cdFx0JiYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhYnNMaXN0ID0gc3R5bGVkLm9sYFxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdG1hcmdpbjogMXJlbSAwXG5cblx0Ym9yZGVyLXJhZGl1czogLjNyZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdCR7cCA9PiBwLnNsaWRlciAmJiBgXG5cdFx0bWFyZ2luOiBhdXRvXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cblx0XHRkaXYsIGxpIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdFx0LyoqIGRpc3BsYXk6aW5saW5lLWJsb2NrOyAqL1xuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XG5cdFx0XHR6LWluZGV4OjE7XG5cdFx0XHR0cmFuc2l0aW9uLWR1cmF0aW9uOjAuNnM7XG5cdFx0fVxuXHRgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdGNvbG9yOiAke3AgPT4gKChwLnByaW1hcnkgfHwgcC5zZWNvbmRhcnkpID8gXCJ3aGl0ZVwiIDogXCJyZ2JhKDAsMCwwLC42KVwiKX07XG5cdC8qIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTsgKi9cblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEpICFpbXBvcnRhbnQ7XG5cdGxlZnQ6IDJweDtcblx0Ym90dG9tOiAycHg7XG5cdHRvcDogMnB4O1xuXHR6LWluZGV4OiAxO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOjAuNnM7XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcblx0d2lkdGg6ICR7cCA9PiBwLndpZHRoIC0gMn1weDtcblx0bGVmdDogJHtwID0+IHAubGVmdH1weDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUYWJzQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRtYXJnaW46IGF1dG87XG5cdHBhZGRpbmc6IDEuMXJlbTtcblx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuXHRib3JkZXItcmFkaXVzOiAuM3JlbTtcblxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cblx0LyoqIGZpeCBmb3IgcmFuZG9tIE1hcmdpbiBUT0RPOiBmaW5kIHNvdXJjZSBvZiBtYXJnaW4gb24gPHA+IHRhZ3MgKi9cblx0KiB7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgY3NzX3RhYmJhc2UgPSBjc3NgXG5cdC8qKiBHbG9iYWwgU3R5bGVzICovXG5cdCR7Z2xvYmFsU3R5bGVzfTtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO1xuXG5cdGhlaWdodDogMi41ZW07XG5cdG1heC1oZWlnaHQ6IDNlbTtcblx0bWluLWhlaWdodDogMWVtO1xuXG5cdG1hcmdpbjowO1xuXHRwYWRkaW5nOiBjYWxjKC4zNzVlbSAtIDFweCkgMmVtO1xuXG5cdGJvcmRlcjogbm9uZTtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogLjNyZW07XG5cdC1tb3otdHJhbnNmb3JtOiBub25lO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcblx0dHJhbnNmb3JtOiBub25lO1xuXG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblxuXHRmb250LXN0eWxlOm5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdHRleHQtc2hhZG93Om5vbmU7XG5cdHRleHQtdHJhbnNmb3JtOm5vbmU7XG5cblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdG91dGxpbmU6MDtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgZWFzZSxiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlLGNvbG9yIC4xcyBlYXNlLGJveC1zaGFkb3cgLjFzIGVhc2U7XG5cdHVzZXItc2VsZWN0Om5vbmU7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRtYXJnaW4tcmlnaHQ6IC4zNmVtO1xuXHR9XHRcblxuXHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0bWFyZ2luLWxlZnQ6IC4zNmVtO1xuXHR9XHRcblxuXHQmOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpIHtcblx0XHRtYXJnaW46IDAgLjM2ZW07XG5cdH1cdFxuXHRcblx0Jjpob3ZlciB7XG5cdFx0JHtwID0+ICghcC51bmRlcmxpbmUgJiYgIXAudW5kZXJsaW5lQWxsICYmICFwLnNsaWRlcikgJiYgY3NzYFxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMzQsMzYsMzgsLjE1KTtcblx0XHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRgfVxuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgY3NzX3NsaWRlciA9IGNzc2Bcblx0aGVpZ2h0OiAxLjc1ZW07XG5cdG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblxuXHQmOmFjdGl2ZSxcblx0Jjpmb2N1cyB7XG5cdFx0dHJhbnNpdGlvbjogYWxsIC42cyBsaW5lYXI7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cdFxuXHQmOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6IFwiIHwgXCI7XG5cdFx0cG9zaXRpb246IGFic29sdXRlOyBcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuMSk7XG5cdFx0dG9wOiAxcHg7XG5cdFx0bGVmdDogLTRweDtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zaXRpb246IGFsbCAuNnMgbGluZWFyO1xuXHR9XG5cdFxuXHQmW2N1cnJlbnQ9dHJ1ZV0gKyAmOmJlZm9yZSxcblx0JltjdXJyZW50PXRydWVdOmJlZm9yZSB7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhYkxhYmVsID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogc3RhdGljO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW46IGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xuYDtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJpY29ucyA9IGNzc2BcbiAgZGlzcGxheTogJHtwID0+IChwLmljb25OYW1lID8gXCJpbmxpbmUtZmxleFwiIDogXCJpbmxpbmUtYmxvY2tcIil9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwicm93LXJldmVyc2VcIiA6IFwiYXV0b1wiKX07XG5cbiAgLyoqIGNoYW5nZXMgSWNvbldyYXBwZXIgKi9cbiAgJHtJY29uV3JhcHBlcn0ge1xuICAgIG1hcmdpbjogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjAgLjRlbSAwIDBcIiA6IFwiMCAwIDAgLjRlbVwiKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBjc3Nfc2hvd2ljb25vbmx5b25hY3RpdmUgPSBjc3NgXG5cdCY6bm90KDpob3ZlcikgPiAke0ljb25XcmFwcGVyfSB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdG9wYWNpdHk6IDA7XG5cblx0XHRtYXJnaW4tcmlnaHQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwiLTE1cHhcIiA6IFwiaW5pdGlhbFwiKX1cblx0XHRtYXJnaW4tbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi0xNXB4XCIgOiBcImluaXRpYWxcIil9XG5cdH1cblx0Jjpob3ZlciA+ICR7SWNvbldyYXBwZXJ9IHtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0bWFyZ2luLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcIjBcIiA6IFwiaW5oZXJpdFwiKX1cblx0XHRtYXJnaW4tbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjBcIiA6IFwiaW5oZXJpdFwiKX1cblx0XHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC41cywgbWFyZ2luLXJpZ2h0IDAuMXMsIG1hcmdpbi1sZWZ0IDAuMXMgbGluZWFyO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgY3NzX3RhYmN1cnJlbnQgPSBjc3NgXG5cdFx0YmFja2dyb3VuZDogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRjb2xvcjogJHtwID0+ICgocC5wcmltYXJ5IHx8IHAuc2Vjb25kYXJ5KSA/IFwid2hpdGVcIiA6IFwicmdiYSgwLDAsMCwuNilcIil9O1xuXHRcdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMzQsMzYsMzgsLjE1KTtcblx0XHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogOTklO1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHdpZHRoOiAuNmVtO1xuXHRcdFx0aGVpZ2h0OiAuNmVtO1xuXG5cdFx0XHRtYXJnaW46IC41cHggMCAwO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0XHRib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdFx0XG5cdFx0XHR6LWluZGV4OiAxO1xuXHRcdH1cbmA7XG5cbmV4cG9ydCBjb25zdCB0YWJTdHlsZSA9ICh0eXBlKSA9PiB7XG5cdGNvbnN0IGNvbG9yID0gZGVmYXVsdFRoZW1lLkNPTE9SW3R5cGVdO1xuXHRjb25zdCBiZ0NvbG9yID0gZGVmYXVsdFRoZW1lLkJHX0NPTE9SW3R5cGVdO1xuXHRyZXR1cm4gY3NzYCZ7XG5cdFx0Y29sb3I6ICR7cCA9PiAocC5jdXJyZW50VGFiID8gY29sb3IgOiBcIlwiKX07XG5cdFx0YmFja2dyb3VuZDogJHtwID0+IChwLmN1cnJlbnRUYWIgPyBiZ0NvbG9yIDogXCJcIil9O1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y29sb3I6ICR7cmdiYShjb2xvciwgMC44KX07XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2JnQ29sb3J9O1xuXHRcdH1cblx0XHQmOjphZnRlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2JnQ29sb3J9O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogJHtiZ0NvbG9yfTtcblx0XHRcdGJvcmRlci1yaWdodC1jb2xvcjogJHtiZ0NvbG9yfTtcblx0XHR9XG5cdH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJyb3VuZGVkID0gY3NzYFxuXHRib3JkZXItcmFkaXVzOiAzcmVtO1xuYDtcblxuXG5leHBvcnQgY29uc3QgY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUgPSBjc3NgXG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XG5cdFx0Ym9yZGVyOiBub25lO1xuICB9XG5gO1xuIl19