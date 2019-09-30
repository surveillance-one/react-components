import styled, { css } from "styled-components";
import { rgba } from "polished";
import { globalStyles, base } from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";
export var TabListContainer = styled.div.withConfig({
  displayName: "styles__TabListContainer",
  componentId: "o7g3x3-0"
})(["", ";"], globalStyles);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJiYXNlIiwiZGVmYXVsdFRoZW1lIiwiVGFiTGlzdENvbnRhaW5lciIsImRpdiIsIlRhYnNMaXN0Iiwib2wiLCJwIiwic2xpZGVyIiwiU2VsZWN0b3IiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwid2lkdGgiLCJsZWZ0IiwiVGFic0NvbnRlbnQiLCJjc3NfdGFiYmFzZSIsInVuZGVybGluZSIsInVuZGVybGluZUFsbCIsImNzc19zbGlkZXIiLCJUYWJMYWJlbCIsInNwYW4iLCJJY29uV3JhcHBlciIsImNzc190YWJpY29ucyIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYmN1cnJlbnQiLCJ0YWJTdHlsZSIsInR5cGUiLCJjb2xvciIsIkNPTE9SIiwiYmdDb2xvciIsIkJHX0NPTE9SIiwiY3VycmVudFRhYiIsImNzc190YWJyb3VuZGVkIiwiY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsVUFBckI7QUFDQSxTQUFTQyxZQUFULEVBQXVCQyxJQUF2QixRQUFtQyxzQkFBbkM7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGNBQTdCO0FBRUEsT0FBTyxJQUFNQyxnQkFBZ0IsR0FBR04sTUFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLGNBRXpCSixZQUZ5QixDQUF0QjtBQUtQLE9BQU8sSUFBTUssUUFBUSxHQUFHUixNQUFNLENBQUNTLEVBQVY7QUFBQTtBQUFBO0FBQUEsb0lBU2xCLFVBQUFDLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLE1BQUYsc1JBQUo7QUFBQSxDQVRpQixDQUFkO0FBeUJQLE9BQU8sSUFBTUMsUUFB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QUFBLFdBQUtBLENBQUMsQ0FBQzBCLFVBQUYsR0FBZUosS0FBZixHQUF1QixFQUE1QjtBQUFBLEdBRFgsRUFFZSxVQUFBdEIsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQzBCLFVBQUYsR0FBZUYsT0FBZixHQUF5QixFQUE5QjtBQUFBLEdBRmhCLEVBSVdoQyxJQUFJLENBQUM4QixLQUFELEVBQVEsR0FBUixDQUpmLEVBS2dCRSxPQUxoQixFQVFnQkEsT0FSaEIsRUFTeUJBLE9BVHpCLEVBVXdCQSxPQVZ4QjtBQWFBLENBaEJNO0FBa0JQLE9BQU8sSUFBTUcsY0FBYyxHQUFHcEMsR0FBSCx5QkFBcEI7QUFLUCxPQUFPLElBQU1xQyx1QkFBdUIsR0FBR3JDLEdBQUgsMEpBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gXCJwb2xpc2hlZFwiO1xuaW1wb3J0IHsgZ2xvYmFsU3R5bGVzLCBiYXNlIH0gZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vdWkvdGhlbWVzXCI7XG5cbmV4cG9ydCBjb25zdCBUYWJMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0XHQvKiogR2xvYmFsIFN0eWxlcyAqL1xuXHRcdCR7Z2xvYmFsU3R5bGVzfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUYWJzTGlzdCA9IHN0eWxlZC5vbGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXHRtYXJnaW46IDFyZW0gMFxuXG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHQke3AgPT4gcC5zbGlkZXIgJiYgYFxuXHRcdG1hcmdpbjogYXV0b1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG5cdFx0ZGl2LCBsaSB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdC8qKiBkaXNwbGF5OmlubGluZS1ibG9jazsgKi9cblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDoxO1xuXHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO1xuXHRcdH1cblx0YH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRjb2xvcjogJHtwID0+ICgocC5wcmltYXJ5IHx8IHAuc2Vjb25kYXJ5KSA/IFwid2hpdGVcIiA6IFwicmdiYSgwLDAsMCwuNilcIil9O1xuXHQvKiBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7ICovXG5cdGJvcmRlci1yYWRpdXM6IDdweDtcblx0Ym94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLC4xKSAhaW1wb3J0YW50O1xuXHRsZWZ0OiAycHg7XG5cdGJvdHRvbTogMnB4O1xuXHR0b3A6IDJweDtcblx0ei1pbmRleDogMTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG5cdHdpZHRoOiAke3AgPT4gcC53aWR0aCAtIDJ9cHg7XG5cdGxlZnQ6ICR7cCA9PiBwLmxlZnR9cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVGFic0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0bWFyZ2luOiBhdXRvO1xuXHRwYWRkaW5nOiAxLjFyZW07XG5cdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0Ym9yZGVyLXJhZGl1czogLjNyZW07XG5cblx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXG5cdC8qKiBmaXggZm9yIHJhbmRvbSBNYXJnaW4gVE9ETzogZmluZCBzb3VyY2Ugb2YgbWFyZ2luIG9uIDxwPiB0YWdzICovXG5cdCoge1xuXHRcdG1hcmdpbjogYXV0bztcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJiYXNlID0gY3NzYFxuXHQvKiogR2xvYmFsIFN0eWxlcyAqL1xuXHQke2dsb2JhbFN0eWxlc307XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTtcblxuXHRoZWlnaHQ6IDIuNWVtO1xuXHRtYXgtaGVpZ2h0OiAzZW07XG5cdG1pbi1oZWlnaHQ6IDFlbTtcblxuXHRtYXJnaW46MDtcblx0cGFkZGluZzogY2FsYyguMzc1ZW0gLSAxcHgpIDJlbTtcblxuXHRib3JkZXI6IG5vbmU7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXHQtbW96LXRyYW5zZm9ybTogbm9uZTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG5cdHRyYW5zZm9ybTogbm9uZTtcblxuXHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XG5cblx0Zm9udC1zdHlsZTpub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHR0ZXh0LXNoYWRvdzpub25lO1xuXHR0ZXh0LXRyYW5zZm9ybTpub25lO1xuXG5cdGN1cnNvcjpwb2ludGVyO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRvdXRsaW5lOjA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGVhc2UsYmFja2dyb3VuZC1jb2xvciAuMXMgZWFzZSxjb2xvciAuMXMgZWFzZSxib3gtc2hhZG93IC4xcyBlYXNlO1xuXHR1c2VyLXNlbGVjdDpub25lO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG5cdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAuMzZlbTtcblx0fVx0XG5cblx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdG1hcmdpbi1sZWZ0OiAuMzZlbTtcblx0fVx0XG5cblx0Jjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG5cdFx0bWFyZ2luOiAwIC4zNmVtO1xuXHR9XHRcblx0XG5cdCY6aG92ZXIge1xuXHRcdCR7cCA9PiAoIXAudW5kZXJsaW5lICYmICFwLnVuZGVybGluZUFsbCAmJiAhcC5zbGlkZXIpICYmIGNzc2Bcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cdFx0XHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdFx0YH1cblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuOCk7XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGNzc19zbGlkZXIgPSBjc3NgXG5cdGhlaWdodDogMS43NWVtO1xuXHRtYXJnaW46IDJweCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0JjphY3RpdmUsXG5cdCY6Zm9jdXMge1xuXHRcdHRyYW5zaXRpb246IGFsbCAuNnMgbGluZWFyO1xuXHRcdGNvbG9yOiBibGFjaztcblx0fVxuXHRcblx0Jjpub3QoOmZpcnN0LW9mLXR5cGUpOmJlZm9yZXtcblx0XHRjb250ZW50OiBcIiB8IFwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsLjEpO1xuXHRcdHRvcDogMXB4O1xuXHRcdGxlZnQ6IC00cHg7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjZzIGxpbmVhcjtcblx0fVxuXHRcblx0JltjdXJyZW50PXRydWVdICsgJjpiZWZvcmUsXG5cdCZbY3VycmVudD10cnVlXTpiZWZvcmUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWJMYWJlbCA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHN0YXRpYztcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0bWFyZ2luOiBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgMCB0cmFuc3BhcmVudCBpbnNldDtcbmA7XG5cbmV4cG9ydCBjb25zdCBjc3NfdGFiaWNvbnMgPSBjc3NgXG4gIGRpc3BsYXk6ICR7cCA9PiAocC5pY29uTmFtZSA/IFwiaW5saW5lLWZsZXhcIiA6IFwiaW5saW5lLWJsb2NrXCIpfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcInJvdy1yZXZlcnNlXCIgOiBcImF1dG9cIil9O1xuXG4gIC8qKiBjaGFuZ2VzIEljb25XcmFwcGVyICovXG4gICR7SWNvbldyYXBwZXJ9IHtcbiAgICBtYXJnaW46ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwIC40ZW0gMCAwXCIgOiBcIjAgMCAwIC40ZW1cIil9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgY3NzX3Nob3dpY29ub25seW9uYWN0aXZlID0gY3NzYFxuXHQmOm5vdCg6aG92ZXIpID4gJHtJY29uV3JhcHBlcn0ge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRvcGFjaXR5OiAwO1xuXG5cdFx0bWFyZ2luLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcIi0xNXB4XCIgOiBcImluaXRpYWxcIil9XG5cdFx0bWFyZ2luLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCItMTVweFwiIDogXCJpbml0aWFsXCIpfVxuXHR9XG5cdCY6aG92ZXIgPiAke0ljb25XcmFwcGVyfSB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdG1hcmdpbi1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCIwXCIgOiBcImluaGVyaXRcIil9XG5cdFx0bWFyZ2luLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwXCIgOiBcImluaGVyaXRcIil9XG5cdFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuNXMsIG1hcmdpbi1yaWdodCAwLjFzLCBtYXJnaW4tbGVmdCAwLjFzIGxpbmVhcjtcblx0fVxuYDtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJjdXJyZW50ID0gY3NzYFxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0Y29sb3I6ICR7cCA9PiAoKHAucHJpbWFyeSB8fCBwLnNlY29uZGFyeSkgPyBcIndoaXRlXCIgOiBcInJnYmEoMCwwLDAsLjYpXCIpfTtcblx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cdFx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDk5JTtcblx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHR3aWR0aDogLjZlbTtcblx0XHRcdGhlaWdodDogLjZlbTtcblxuXHRcdFx0bWFyZ2luOiAuNXB4IDAgMDtcblx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgyMjQsMjI1LDIyNiwxKTtcblxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRcdFxuXHRcdFx0ei1pbmRleDogMTtcblx0XHR9XG5gO1xuXG5leHBvcnQgY29uc3QgdGFiU3R5bGUgPSAodHlwZSkgPT4ge1xuXHRjb25zdCBjb2xvciA9IGRlZmF1bHRUaGVtZS5DT0xPUlt0eXBlXTtcblx0Y29uc3QgYmdDb2xvciA9IGRlZmF1bHRUaGVtZS5CR19DT0xPUlt0eXBlXTtcblx0cmV0dXJuIGNzc2Ame1xuXHRcdGNvbG9yOiAke3AgPT4gKHAuY3VycmVudFRhYiA/IGNvbG9yIDogXCJcIil9O1xuXHRcdGJhY2tncm91bmQ6ICR7cCA9PiAocC5jdXJyZW50VGFiID8gYmdDb2xvciA6IFwiXCIpfTtcblx0XHQmOmhvdmVyIHtcblx0XHRcdGNvbG9yOiAke3JnYmEoY29sb3IsIDAuOCl9O1xuXHRcdFx0YmFja2dyb3VuZDogJHtiZ0NvbG9yfTtcblx0XHR9XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtiZ0NvbG9yfTtcblx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICR7YmdDb2xvcn07XG5cdFx0XHRib3JkZXItcmlnaHQtY29sb3I6ICR7YmdDb2xvcn07XG5cdFx0fVxuXHR9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjc3NfdGFicm91bmRlZCA9IGNzc2Bcblx0Ym9yZGVyLXJhZGl1czogM3JlbTtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IGNzc190YWJjdXJyZW50dW5kZXJsaW5lID0gY3NzYFxuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogMDtcblxuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuXHRcdGJvcmRlcjogbm9uZTtcbiAgfVxuYDtcbiJdfQ==