import styled, { css } from "styled-components";
import { rgba } from "polished";
import globalStyles from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";
/* *****************************TabGroup**************************** */

/**
 * Styled-Component CSS
 * @name TabsBase
 * @see Tabs (components/Tabs)
 * @description <Tabs> base styles
 *
 * @param {object} globalStyles global styles
 */

export var css_tabsbase = css(["", ";"], globalStyles);
/**
 * Styled-Component
 * @name TabsList
 * @see Tabs (components/Tabs)
 * @description <Tabs> child ordered list
 */

export var TabsList = styled.ol.withConfig({
  displayName: "styles__TabsList",
  componentId: "sc-1y5cqme-0"
})(["display:flex;position:relative;padding-left:0;margin:1rem 0;border-radius:.3rem;font-weight:400;background:none;"]);
/**
 * Styled-Component
 * @name TabsContent
 * @see Tabs (components/Tabs)
 * @description <Tabs> child, displays content
 */

export var TabsContent = styled.div.withConfig({
  displayName: "styles__TabsContent",
  componentId: "sc-1y5cqme-1"
})(["position:relative;margin:1rem 0;padding:1.1rem;border:solid 1px rgba(0,0,0,0.1);border-radius:.3rem;background:rgb(255,255,255);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);*{margin:auto;}"]);
/* ******************************Tab**************************** */

/**
 * Styled-Component CSS
 * @name TabBase
 * @see Tabs (components/Tabs)
 * @description <Tab> base styles
 *
 * @param {object} globalStyles global styles
 */

export var css_tabbase = css(["", ";align-self:center;position:relative;display:flex;vertical-align:baseline;height:2.5em;max-height:3em;min-height:1em;margin:0;padding:calc(.375em - 1px) .75em;border:none;box-shadow:none;border-radius:.3rem;color:rgba(0,0,0,.6);font-style:normal;font-weight:500;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;cursor:pointer;list-style:none;outline:0;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;user-select:none;white-space:nowrap;&:first-child{margin-right:.36em;}&:last-child{margin-left:.36em;}&:not(:first-child):not(:last-child){margin:0 .36em;}&:hover{", " color:rgba(0,0,0,.8);}&:active,&:focus{outline:none;}"], globalStyles, function (p) {
  return !p.underline && !p.underlineAll && css(["background-color:rgba(224,225,226,1);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border:solid 1px rgba(0,0,0,0.1);"]);
});
/**
 * Styled-Component
 * @name TabLabel
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> label
 */

export var TabLabel = styled.span.withConfig({
  displayName: "styles__TabLabel",
  componentId: "sc-1y5cqme-2"
})(["display:block;position:static;vertical-align:middle;margin:auto;"]);
/**
 * Styled-Component
 * @name IconWrapper
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> icon wrapper
 */

export var IconWrapper = styled.span.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-1y5cqme-3"
})(["display:table-cell;text-align:center;box-shadow:-1px 0 0 0 transparent inset;"]);
/**
 * Styled-Component
 * @name TabIcons
 * @see Tab (components/Tab)
 * @description <Tabs.Tab> Icon
 */

export var css_tabicons = css(["display:", ";align-items:center;justify-content:center;flex-flow:", ";", "{margin:", ";}"], function (p) {
  return p.iconName ? "inline-flex" : "inline-block";
}, function (p) {
  return p.iconPosition === "left" ? "row-reverse" : "auto";
}, IconWrapper, function (p) {
  return p.iconPosition === "left" ? "0 .4em 0 0" : "0 0 0 .4em";
});
/**
 * Styled-Component CSS
 * @name showIconOnlyOnActive
 * @see Tab (components/Tabs)
 * @description <Tab> shows the icon only when Active
 *
 * @param {object} IconWrapper CSS-in-JS
 */

export var css_showicononlyonactive = css(["&:not(:hover) > ", "{visibility:hidden;opacity:0;margin-right:", " margin-left:", "}&:hover > ", "{visibility:visible;opacity:1;margin-right:", " margin-left:", " transition:visibility 0.5s,opacity 0.5s,margin-right 0.1s,margin-left 0.1s linear;}"], IconWrapper, function (p) {
  return p.iconPosition === "right" ? "-15px" : "initial";
}, function (p) {
  return p.iconPosition === "left" ? "-15px" : "initial";
}, IconWrapper, function (p) {
  return p.iconPosition === "right" ? "0" : "inherit";
}, function (p) {
  return p.iconPosition === "left" ? "0" : "inherit";
});
/**
 * Styled-Component CSS
 * @name tabCurrent
 * @see Tab (components/Tabs)
 * @description <Tab> shows the Active tab
 */

export var css_tabcurrent = css(["background:rgba(224,225,226,1);color:", ";box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border:solid 1px rgba(0,0,0,0.1);&::after{content:\"\";position:absolute;top:99%;left:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);box-sizing:border-box;width:.6em;height:.6em;margin:.5px 0 0;border-bottom:solid 1px rgba(224,225,226,1);border-right:solid 1px rgba(224,225,226,1);background:rgba(224,225,226,1);z-index:1;}"], function (p) {
  return p.primary || p.secondary ? "white" : "rgba(0,0,0,.6)";
});
/**
 * Styled-Component CSS
 * @name tabStyle
 * @see Tab (components/Tabs)
 * @description <Tab> Styles the tabs
 *
 * @param {string} type
 */

export var tabStyle = function tabStyle(type) {
  var color = defaultTheme.COLOR[type];
  var bgColor = defaultTheme.BG_COLOR[type];
  return css(["&{color:", ";background:", ";&:hover{color:", ";background:", ";}&::after{background:", ";border-bottom-color:", ";border-right-color:", ";}}"], function (p) {
    return p.currentTab ? color : "";
  }, function (p) {
    return p.currentTab ? bgColor : "";
  }, rgba(color, 0.8), bgColor, bgColor, bgColor, bgColor);
};
/**
 * Styled-Component CSS
 * @name tabRounded
 * @see Tab (components/Tabs)
 * @description <Tab> Styles the tabs
 *
 * @param {string} type
 */

export var css_tabrounded = css(["border-radius:3rem;"]);
/**
 * Styled-Component CSS
 * @name tabRounded
 * @see Tab (components/Tabs)
 * @description <Tab> Styles the tabs
 *
 * @param {string} type
 */

export var css_tabcurrentunderline = css(["color:black;font-weight:700;border-bottom:1px solid black;border-radius:0;&:hover{background:none;box-shadow:none;color:rgba(0,0,0,.6);border:none;}"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJkZWZhdWx0VGhlbWUiLCJjc3NfdGFic2Jhc2UiLCJUYWJzTGlzdCIsIm9sIiwiVGFic0NvbnRlbnQiLCJkaXYiLCJjc3NfdGFiYmFzZSIsInAiLCJ1bmRlcmxpbmUiLCJ1bmRlcmxpbmVBbGwiLCJUYWJMYWJlbCIsInNwYW4iLCJJY29uV3JhcHBlciIsImNzc190YWJpY29ucyIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYmN1cnJlbnQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGFiU3R5bGUiLCJ0eXBlIiwiY29sb3IiLCJDT0xPUiIsImJnQ29sb3IiLCJCR19DT0xPUiIsImN1cnJlbnRUYWIiLCJjc3NfdGFicm91bmRlZCIsImNzc190YWJjdXJyZW50dW5kZXJsaW5lIl0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSxNQUFQLElBQWlCQyxHQUFqQixRQUE0QixtQkFBNUI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFVBQXJCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixzQkFBekI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGNBQTdCO0FBRUE7O0FBRUE7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTUMsWUFBWSxHQUFHSixHQUFILFlBRXRCRSxZQUZzQixDQUFsQjtBQUtQOzs7Ozs7O0FBTUEsT0FBTyxJQUFNRyxRQUFRLEdBQUdOLE1BQU0sQ0FBQ08sRUFBVjtBQUFBO0FBQUE7QUFBQSx3SEFBZDtBQWFQOzs7Ozs7O0FBTUEsT0FBTyxJQUFNQyxXQUFXLEdBQUdSLE1BQU0sQ0FBQ1MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpTUFBakI7QUFrQlA7O0FBRUE7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTUMsV0FBVyxHQUFHVCxHQUFILDRyQkFFckJFLFlBRnFCLEVBK0NwQixV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c3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcbmltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vdWkvdGhlbWVzXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqVGFiR3JvdXAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYnNCYXNlXG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsU3R5bGVzIGdsb2JhbCBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJzYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBUYWJzTGlzdFxuICogQHNlZSBUYWJzIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnM+IGNoaWxkIG9yZGVyZWQgbGlzdFxuICovXG5leHBvcnQgY29uc3QgVGFic0xpc3QgPSBzdHlsZWQub2xgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXG5cdG1hcmdpbjogMXJlbSAwO1xuXHRib3JkZXItcmFkaXVzOiAuM3JlbTtcblxuXHRmb250LXdlaWdodDogNDAwO1xuXG5cdGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYnNDb250ZW50XG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gY2hpbGQsIGRpc3BsYXlzIGNvbnRlbnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYnNDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdG1hcmdpbjogMXJlbSAwO1xuXHRwYWRkaW5nOiAxLjFyZW07XG5cdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0Ym9yZGVyLXJhZGl1czogLjNyZW07XG5cblx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXG5cdC8qKiBmaXggZm9yIHJhbmRvbSBNYXJnaW4gVE9ETzogZmluZCBzb3VyY2Ugb2YgbWFyZ2luIG9uIDxwPiB0YWdzICovXG5cdCoge1xuXHRcdG1hcmdpbjogYXV0bztcblx0fVxuXG5gO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipUYWIqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYkJhc2VcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IGJhc2Ugc3R5bGVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbFN0eWxlcyBnbG9iYWwgc3R5bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0dmVydGljYWwtYWxpZ246YmFzZWxpbmU7XG5cblx0aGVpZ2h0OiAyLjVlbTtcblx0bWF4LWhlaWdodDogM2VtO1xuXHRtaW4taGVpZ2h0OiAxZW07XG5cblx0bWFyZ2luOjA7XG5cdHBhZGRpbmc6IGNhbGMoLjM3NWVtIC0gMXB4KSAuNzVlbTtcblxuXHRib3JkZXI6IG5vbmU7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXHRcblx0Y29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuXG5cdGZvbnQtc3R5bGU6bm9ybWFsO1xuXHRmb250LXdlaWdodDogNTAwO1xuXG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0dGV4dC1zaGFkb3c6bm9uZTtcblx0dGV4dC10cmFuc2Zvcm06bm9uZTtcblxuXHRjdXJzb3I6cG9pbnRlcjtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0b3V0bGluZTowO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcyBlYXNlLGJhY2tncm91bmQtY29sb3IgLjFzIGVhc2UsY29sb3IgLjFzIGVhc2UsYm94LXNoYWRvdyAuMXMgZWFzZTtcblx0dXNlci1zZWxlY3Q6bm9uZTtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuXHQmOmZpcnN0LWNoaWxkIHtcblx0XHRtYXJnaW4tcmlnaHQ6IC4zNmVtO1xuXHR9XG5cdCY6bGFzdC1jaGlsZCB7XG5cdFx0bWFyZ2luLWxlZnQ6IC4zNmVtO1xuXHR9XG5cdCY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG5cdFx0bWFyZ2luOiAwIC4zNmVtO1xuXHR9XHRcblx0XG5cdCY6aG92ZXIge1xuXHRcdCR7cCA9PiAoIXAudW5kZXJsaW5lICYmICFwLnVuZGVybGluZUFsbCkgJiYgY3NzYFxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRgfVxuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYkxhYmVsXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gbGFiZWxcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYkxhYmVsID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogc3RhdGljO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW46IGF1dG87XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIEljb25XcmFwcGVyXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gaWNvbiB3cmFwcGVyXG4gKi9cbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXG4gIC8qKiBwYWRkaW5nOiAuNzVlbTsgKi9cblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBUYWJJY29uc1xuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFiKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gSWNvblxuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYmljb25zID0gY3NzYFxuICBkaXNwbGF5OiAke3AgPT4gKHAuaWNvbk5hbWUgPyBcImlubGluZS1mbGV4XCIgOiBcImlubGluZS1ibG9ja1wiKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCJyb3ctcmV2ZXJzZVwiIDogXCJhdXRvXCIpfTtcblx0XG4gIC8qKiBwYWRkaW5nLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLjc1ZW1cIiA6IFwiMFwiKX07ICovXG4gIC8qKiBwYWRkaW5nLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwXCIgOiBcIi43NWVtXCIpfTsgKi9cblxuICAvKiogY2hhbmdlcyBJY29uV3JhcHBlciAqL1xuICAke0ljb25XcmFwcGVyfSB7XG4gICAgbWFyZ2luOiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMCAuNGVtIDAgMFwiIDogXCIwIDAgMCAuNGVtXCIpfTtcbiAgfVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgc2hvd0ljb25Pbmx5T25BY3RpdmVcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gc2hvd3MgdGhlIGljb24gb25seSB3aGVuIEFjdGl2ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBJY29uV3JhcHBlciBDU1MtaW4tSlNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc19zaG93aWNvbm9ubHlvbmFjdGl2ZSA9IGNzc2Bcblx0Jjpub3QoOmhvdmVyKSA+ICR7SWNvbldyYXBwZXJ9IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0b3BhY2l0eTogMDtcblxuXHRcdG1hcmdpbi1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCItMTVweFwiIDogXCJpbml0aWFsXCIpfVxuXHRcdG1hcmdpbi1sZWZ0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLTE1cHhcIiA6IFwiaW5pdGlhbFwiKX1cblx0fVxuXHQmOmhvdmVyID4gJHtJY29uV3JhcHBlcn0ge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0b3BhY2l0eTogMTtcblx0XHRtYXJnaW4tcmlnaHQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwiMFwiIDogXCJpbmhlcml0XCIpfVxuXHRcdG1hcmdpbi1sZWZ0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMFwiIDogXCJpbmhlcml0XCIpfVxuXHRcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjVzLCBtYXJnaW4tcmlnaHQgMC4xcywgbWFyZ2luLWxlZnQgMC4xcyBsaW5lYXI7XG5cdH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYkN1cnJlbnRcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gc2hvd3MgdGhlIEFjdGl2ZSB0YWJcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJjdXJyZW50ID0gY3NzYFxuXHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRjb2xvcjogJHtwID0+ICgocC5wcmltYXJ5IHx8IHAuc2Vjb25kYXJ5KSA/IFwid2hpdGVcIiA6IFwicmdiYSgwLDAsMCwuNilcIil9O1xuXHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblxuXHQmOjphZnRlciB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA5OSU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHR3aWR0aDogLjZlbTtcblx0XHRoZWlnaHQ6IC42ZW07XG5cblx0XHRtYXJnaW46IC41cHggMCAwO1xuXHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdFxuXHRcdHotaW5kZXg6IDE7XG5cdH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYlN0eWxlXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IFN0eWxlcyB0aGUgdGFic1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJTdHlsZSA9ICh0eXBlKSA9PiB7XG5cdGNvbnN0IGNvbG9yID0gZGVmYXVsdFRoZW1lLkNPTE9SW3R5cGVdO1xuXHRjb25zdCBiZ0NvbG9yID0gZGVmYXVsdFRoZW1lLkJHX0NPTE9SW3R5cGVdO1xuXHRyZXR1cm4gY3NzYCZ7XG5cdFx0Y29sb3I6ICR7cCA9PiAocC5jdXJyZW50VGFiID8gY29sb3IgOiBcIlwiKX07XG5cdFx0YmFja2dyb3VuZDogJHtwID0+IChwLmN1cnJlbnRUYWIgPyBiZ0NvbG9yIDogXCJcIil9O1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y29sb3I6ICR7cmdiYShjb2xvciwgMC44KX07XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2JnQ29sb3J9O1xuXHRcdH1cblx0XHQmOjphZnRlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2JnQ29sb3J9O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogJHtiZ0NvbG9yfTtcblx0XHRcdGJvcmRlci1yaWdodC1jb2xvcjogJHtiZ0NvbG9yfTtcblx0XHR9XG5cdH1gO1xufTtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiUm91bmRlZFxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBTdHlsZXMgdGhlIHRhYnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYnJvdW5kZWQgPSBjc3NgXG5cdGJvcmRlci1yYWRpdXM6IDNyZW07XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJSb3VuZGVkXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IFN0eWxlcyB0aGUgdGFic1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiY3VycmVudHVuZGVybGluZSA9IGNzc2Bcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblx0XHRib3JkZXI6IG5vbmU7XG4gIH1cbmA7XG4iXX0=