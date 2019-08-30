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
export var css_tabsslider = css(["background-color:#EEEEEE;border-radius:8px;display:inline-flex;div,li{text-decoration:none;position:relative;z-index:1;transition-duration:0.6s;}"]);
/**
 * Styled-Component
 * @name TabsList
 * @see Tabs (components/Tabs)
 * @description <Tabs> child ordered list
 */

export var TabsList = styled.ol.withConfig({
  displayName: "styles__TabsList",
  componentId: "o7g3x3-0"
})(["display:inline-flex;position:relative;padding-left:0;", ";border-radius:.3rem;font-weight:400;background:none;"], function (_ref) {
  var slider = _ref.slider;
  return slider ? "margin: auto" : "margin: 1rem 0";
});
/**
 * Styled-Component
 * @name Selector
 * @see Tabs (components/Tabs)
 * @description <Tabs> slider Selector
 */

export var Selector = styled.div.withConfig({
  displayName: "styles__Selector",
  componentId: "o7g3x3-1"
})(["position:absolute !important;background-color:#FFFFFF;color:", ";border:solid 1px rgba(0,0,0,0.1);border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.2) !important;left:0;bottom:2px;top:2px;z-index:1;transition-duration:0.6s;transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);width:", "px;left:", "px;"], function (p) {
  return p.primary || p.secondary ? "white" : "rgba(0,0,0,.6)";
}, function (p) {
  return p.width - 2;
}, function (p) {
  return p.left;
});
/**
 * Styled-Component
 * @name TabsContent
 * @see Tabs (components/Tabs)
 * @description <Tabs> child, displays content
 */

export var TabsContent = styled.div.withConfig({
  displayName: "styles__TabsContent",
  componentId: "o7g3x3-2"
})(["position:relative;margin:auto;padding:1.1rem;border:solid 1px rgba(0,0,0,0.1);border-radius:.3rem;background:rgb(255,255,255);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);*{margin:auto;}"]);
/* ******************************Tab**************************** */

/**
 * Styled-Component CSS
 * @name TabBase
 * @see Tabs (components/Tabs)
 * @description <Tab> base styles
 *
 * @param {object} globalStyles global styles
 */

export var css_tabbase = css(["", ";align-self:center;position:relative;display:flex;vertical-align:baseline;height:2.5em;max-height:3em;min-height:1em;margin:0;padding:calc(.375em - 1px) 2em;border:none;box-shadow:none;border-radius:.3rem;-moz-transform:none;-webkit-transform:none;transform:none;color:rgba(0,0,0,.6);font-style:normal;font-weight:500;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;cursor:pointer;list-style:none;outline:0;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;user-select:none;white-space:nowrap;&:first-of-type{margin-right:.36em;}&:last-of-type{margin-left:.36em;}&:not(:first-of-type):not(:last-of-type){margin:0 .36em;}&:hover{", " color:rgba(0,0,0,.8);}&:active,&:focus{outline:none;}"], globalStyles, function (p) {
  return !p.underline && !p.underlineAll && !p.slider && css(["background-color:rgba(224,225,226,1);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border:solid 1px rgba(0,0,0,0.1);"]);
});
/**
 * Styled-Component
 * @name TabLabel
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> label
 */

export var css_slider = css(["height:1.75em;margin:2px !important;padding:0 20px;font-weight:400;&:active,&:focus{transition:all .6s linear;color:black;}&:not(:first-of-type):before{content:\" | \";position:absolute;color:rgba(0,0,0,.1);top:1px;left:-4px;opacity:1;transition:all .6s linear;}&[current=true] + &:before,&[current=true]:before{opacity:0;}"]);
/**
 * Styled-Component
 * @name TabLabel
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> label
 */

export var TabLabel = styled.span.withConfig({
  displayName: "styles__TabLabel",
  componentId: "o7g3x3-3"
})(["display:block;position:static;vertical-align:middle;margin:auto;"]);
/**
 * Styled-Component
 * @name IconWrapper
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> icon wrapper
 */

export var IconWrapper = styled.span.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "o7g3x3-4"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJkZWZhdWx0VGhlbWUiLCJjc3NfdGFic2Jhc2UiLCJjc3NfdGFic3NsaWRlciIsIlRhYnNMaXN0Iiwib2wiLCJzbGlkZXIiLCJTZWxlY3RvciIsImRpdiIsInAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwid2lkdGgiLCJsZWZ0IiwiVGFic0NvbnRlbnQiLCJjc3NfdGFiYmFzZSIsInVuZGVybGluZSIsInVuZGVybGluZUFsbCIsImNzc19zbGlkZXIiLCJUYWJMYWJlbCIsInNwYW4iLCJJY29uV3JhcHBlciIsImNzc190YWJpY29ucyIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYmN1cnJlbnQiLCJ0YWJTdHlsZSIsInR5cGUiLCJjb2xvciIsIkNPTE9SIiwiYmdDb2xvciIsIkJHX0NPTE9SIiwiY3VycmVudFRhYiIsImNzc190YWJyb3VuZGVkIiwiY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsVUFBckI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHNCQUF6QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsY0FBN0I7QUFHQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNQyxZQUFZLEdBQUdKLEdBQUgsWUFFdEJFLFlBRnNCLENBQWxCO0FBS1AsT0FBTyxJQUFNRyxjQUFjLEdBQUdMLEdBQUgsdUpBQXBCO0FBY1A7Ozs7Ozs7QUFNQSxPQUFPLElBQU1NLFFBQVEsR0FBR1AsTUFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLHVIQUtsQjtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdB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QUFDQyxJQUFELEVBQVU7QUFDakMsTUFBTUMsS0FBSyxHQUFHNUIsWUFBWSxDQUFDNkIsS0FBYixDQUFtQkYsSUFBbkIsQ0FBZDtBQUNBLE1BQU1HLE9BQU8sR0FBRzlCLFlBQVksQ0FBQytCLFFBQWIsQ0FBc0JKLElBQXRCLENBQWhCO0FBQ0EsU0FBTzlCLEdBQVAsb0pBQ1UsVUFBQVcsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ3dCLFVBQUYsR0FBZUosS0FBZixHQUF1QixFQUE1QjtBQUFBLEdBRFgsRUFFZSxVQUFBcEIsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ3dCLFVBQUYsR0FBZUYsT0FBZixHQUF5QixFQUE5QjtBQUFBLEdBRmhCLEVBSVdoQyxJQUFJLENBQUM4QixLQUFELEVBQVEsR0FBUixDQUpmLEVBS2dCRSxPQUxoQixFQVFnQkEsT0FSaEIsRUFTeUJBLE9BVHpCLEVBVXdCQSxPQVZ4QjtBQWFBLENBaEJNO0FBa0JQOzs7Ozs7Ozs7QUFRQSxPQUFPLElBQU1HLGNBQWMsR0FBR3BDLEdBQUgseUJBQXBCO0FBSVA7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTXFDLHVCQUF1QixHQUFHckMsR0FBSCwwSkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqVGFiR3JvdXAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYnNCYXNlXG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsU3R5bGVzIGdsb2JhbCBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJzYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJzc2xpZGVyID0gY3NzYFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG5cdGRpdiwgbGkge1xuXHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdC8qKiBkaXNwbGF5OmlubGluZS1ibG9jazsgKi9cblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHR6LWluZGV4OjE7XG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO1xuXHR9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYnNMaXN0XG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gY2hpbGQgb3JkZXJlZCBsaXN0XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzTGlzdCA9IHN0eWxlZC5vbGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXG5cdCR7KHsgc2xpZGVyIH0pID0+IChzbGlkZXIgPyBcIm1hcmdpbjogYXV0b1wiIDogXCJtYXJnaW46IDFyZW0gMFwiKX07XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0YmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgU2VsZWN0b3JcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzPiBzbGlkZXIgU2VsZWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdGNvbG9yOiAke3AgPT4gKChwLnByaW1hcnkgfHwgcC5zZWNvbmRhcnkpID8gXCJ3aGl0ZVwiIDogXCJyZ2JhKDAsMCwwLC42KVwiKX07XG5cdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjIpICFpbXBvcnRhbnQ7XG5cdGxlZnQ6IDA7XG5cdGJvdHRvbTogMnB4O1xuXHR0b3A6IDJweDtcblx0ei1pbmRleDogMTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG5cdHdpZHRoOiAke3AgPT4gcC53aWR0aCAtIDJ9cHg7XG5cdGxlZnQ6ICR7cCA9PiBwLmxlZnR9cHg7XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYnNDb250ZW50XG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gY2hpbGQsIGRpc3BsYXlzIGNvbnRlbnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYnNDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdG1hcmdpbjogYXV0bztcblx0cGFkZGluZzogMS4xcmVtO1xuXHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXG5cdGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMzQsMzYsMzgsLjE1KTtcblxuXHQvKiogZml4IGZvciByYW5kb20gTWFyZ2luIFRPRE86IGZpbmQgc291cmNlIG9mIG1hcmdpbiBvbiA8cD4gdGFncyAqL1xuXHQqIHtcblx0XHRtYXJnaW46IGF1dG87XG5cdH1cbmA7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlRhYioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgVGFiQmFzZVxuICogQHNlZSBUYWJzIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsU3R5bGVzIGdsb2JhbCBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJiYXNlID0gY3NzYFxuXHQvKiogR2xvYmFsIFN0eWxlcyAqL1xuXHQke2dsb2JhbFN0eWxlc307XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTtcblxuXHRoZWlnaHQ6IDIuNWVtO1xuXHRtYXgtaGVpZ2h0OiAzZW07XG5cdG1pbi1oZWlnaHQ6IDFlbTtcblxuXHRtYXJnaW46MDtcblx0cGFkZGluZzogY2FsYyguMzc1ZW0gLSAxcHgpIDJlbTtcblxuXHRib3JkZXI6IG5vbmU7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXHQtbW96LXRyYW5zZm9ybTogbm9uZTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG5cdHRyYW5zZm9ybTogbm9uZTtcblxuXHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XG5cblx0Zm9udC1zdHlsZTpub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHR0ZXh0LXNoYWRvdzpub25lO1xuXHR0ZXh0LXRyYW5zZm9ybTpub25lO1xuXG5cdGN1cnNvcjpwb2ludGVyO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRvdXRsaW5lOjA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGVhc2UsYmFja2dyb3VuZC1jb2xvciAuMXMgZWFzZSxjb2xvciAuMXMgZWFzZSxib3gtc2hhZG93IC4xcyBlYXNlO1xuXHR1c2VyLXNlbGVjdDpub25lO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG5cdCY6Zmlyc3Qtb2YtdHlwZSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAuMzZlbTtcblx0fVx0XG5cblx0JjpsYXN0LW9mLXR5cGUge1xuXHRcdG1hcmdpbi1sZWZ0OiAuMzZlbTtcblx0fVx0XG5cblx0Jjpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG5cdFx0bWFyZ2luOiAwIC4zNmVtO1xuXHR9XHRcblx0XG5cdCY6aG92ZXIge1xuXHRcdCR7cCA9PiAoIXAudW5kZXJsaW5lICYmICFwLnVuZGVybGluZUFsbCAmJiAhcC5zbGlkZXIpICYmIGNzc2Bcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cdFx0XHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdFx0YH1cblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuOCk7XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBUYWJMYWJlbFxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicy5UYWI+IGxhYmVsXG4gKi9cbmV4cG9ydCBjb25zdCBjc3Nfc2xpZGVyID0gY3NzYFxuXHRoZWlnaHQ6IDEuNzVlbTtcblx0bWFyZ2luOiAycHggIWltcG9ydGFudDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXG5cdCY6YWN0aXZlLFxuXHQmOmZvY3VzIHtcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjZzIGxpbmVhcjtcblx0XHRjb2xvcjogYmxhY2s7XG5cdH1cblx0XG5cdCY6bm90KDpmaXJzdC1vZi10eXBlKTpiZWZvcmV7XG5cdFx0Y29udGVudDogXCIgfCBcIjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7IFxuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC4xKTtcblx0XHR0b3A6IDFweDtcblx0XHRsZWZ0OiAtNHB4O1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0dHJhbnNpdGlvbjogYWxsIC42cyBsaW5lYXI7XG5cdH1cblx0XG5cdCZbY3VycmVudD10cnVlXSArICY6YmVmb3JlLFxuXHQmW2N1cnJlbnQ9dHJ1ZV06YmVmb3JlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblxuYDtcbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFiTGFiZWxcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBsYWJlbFxuICovXG5leHBvcnQgY29uc3QgVGFiTGFiZWwgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdG1hcmdpbjogYXV0bztcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgSWNvbldyYXBwZXJcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBpY29uIHdyYXBwZXJcbiAqL1xuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgMCB0cmFuc3BhcmVudCBpbnNldDtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFiSWNvbnNcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYilcbiAqIEBkZXNjcmlwdGlvbiA8VGFicy5UYWI+IEljb25cbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJpY29ucyA9IGNzc2BcbiAgZGlzcGxheTogJHtwID0+IChwLmljb25OYW1lID8gXCJpbmxpbmUtZmxleFwiIDogXCJpbmxpbmUtYmxvY2tcIil9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwicm93LXJldmVyc2VcIiA6IFwiYXV0b1wiKX07XG5cbiAgLyoqIGNoYW5nZXMgSWNvbldyYXBwZXIgKi9cbiAgJHtJY29uV3JhcHBlcn0ge1xuICAgIG1hcmdpbjogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjAgLjRlbSAwIDBcIiA6IFwiMCAwIDAgLjRlbVwiKX07XG4gIH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHNob3dJY29uT25seU9uQWN0aXZlXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IHNob3dzIHRoZSBpY29uIG9ubHkgd2hlbiBBY3RpdmVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gSWNvbldyYXBwZXIgQ1NTLWluLUpTXG4gKi9cbmV4cG9ydCBjb25zdCBjc3Nfc2hvd2ljb25vbmx5b25hY3RpdmUgPSBjc3NgXG5cdCY6bm90KDpob3ZlcikgPiAke0ljb25XcmFwcGVyfSB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdG9wYWNpdHk6IDA7XG5cblx0XHRtYXJnaW4tcmlnaHQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwiLTE1cHhcIiA6IFwiaW5pdGlhbFwiKX1cblx0XHRtYXJnaW4tbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi0xNXB4XCIgOiBcImluaXRpYWxcIil9XG5cdH1cblx0Jjpob3ZlciA+ICR7SWNvbldyYXBwZXJ9IHtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0bWFyZ2luLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcIjBcIiA6IFwiaW5oZXJpdFwiKX1cblx0XHRtYXJnaW4tbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjBcIiA6IFwiaW5oZXJpdFwiKX1cblx0XHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC41cywgbWFyZ2luLXJpZ2h0IDAuMXMsIG1hcmdpbi1sZWZ0IDAuMXMgbGluZWFyO1xuXHR9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJDdXJyZW50XG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IHNob3dzIHRoZSBBY3RpdmUgdGFiXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiY3VycmVudCA9IGNzc2Bcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdGNvbG9yOiAke3AgPT4gKChwLnByaW1hcnkgfHwgcC5zZWNvbmRhcnkpID8gXCJ3aGl0ZVwiIDogXCJyZ2JhKDAsMCwwLC42KVwiKX07XG5cdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHQmOjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiA5OSU7XG5cdFx0XHRsZWZ0OiA1MCU7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuXHRcdFx0XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0d2lkdGg6IC42ZW07XG5cdFx0XHRoZWlnaHQ6IC42ZW07XG5cblx0XHRcdG1hcmdpbjogLjVweCAwIDA7XG5cdFx0XHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRcdGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0XHRcblx0XHRcdHotaW5kZXg6IDE7XG5cdFx0fVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiU3R5bGVcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gU3R5bGVzIHRoZSB0YWJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYlN0eWxlID0gKHR5cGUpID0+IHtcblx0Y29uc3QgY29sb3IgPSBkZWZhdWx0VGhlbWUuQ09MT1JbdHlwZV07XG5cdGNvbnN0IGJnQ29sb3IgPSBkZWZhdWx0VGhlbWUuQkdfQ09MT1JbdHlwZV07XG5cdHJldHVybiBjc3NgJntcblx0XHRjb2xvcjogJHtwID0+IChwLmN1cnJlbnRUYWIgPyBjb2xvciA6IFwiXCIpfTtcblx0XHRiYWNrZ3JvdW5kOiAke3AgPT4gKHAuY3VycmVudFRhYiA/IGJnQ29sb3IgOiBcIlwiKX07XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJHtyZ2JhKGNvbG9yLCAwLjgpfTtcblx0XHRcdGJhY2tncm91bmQ6ICR7YmdDb2xvcn07XG5cdFx0fVxuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGJhY2tncm91bmQ6ICR7YmdDb2xvcn07XG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAke2JnQ29sb3J9O1xuXHRcdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAke2JnQ29sb3J9O1xuXHRcdH1cblx0fWA7XG59O1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJSb3VuZGVkXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IFN0eWxlcyB0aGUgdGFic1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFicm91bmRlZCA9IGNzc2Bcblx0Ym9yZGVyLXJhZGl1czogM3JlbTtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYlJvdW5kZWRcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gU3R5bGVzIHRoZSB0YWJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJjdXJyZW50dW5kZXJsaW5lID0gY3NzYFxuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogMDtcblxuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuXHRcdGJvcmRlcjogbm9uZTtcbiAgfVxuYDtcbiJdfQ==