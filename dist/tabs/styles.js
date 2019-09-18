import styled, { css } from "styled-components";
import { rgba } from "polished";
import { globalStyles, base } from "../ui/styles/globals";
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
})(["position:absolute !important;background-color:#FFFFFF;color:", ";border-radius:7px;box-shadow:0 2px 10px rgba(0,0,0,.1) !important;left:2px;bottom:2px;top:2px;z-index:1;transition-duration:0.6s;transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);width:", "px;left:", "px;"], function (p) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJiYXNlIiwiZGVmYXVsdFRoZW1lIiwiY3NzX3RhYnNiYXNlIiwiY3NzX3RhYnNzbGlkZXIiLCJUYWJzTGlzdCIsIm9sIiwic2xpZGVyIiwiU2VsZWN0b3IiLCJkaXYiLCJwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsIndpZHRoIiwibGVmdCIsIlRhYnNDb250ZW50IiwiY3NzX3RhYmJhc2UiLCJ1bmRlcmxpbmUiLCJ1bmRlcmxpbmVBbGwiLCJjc3Nfc2xpZGVyIiwiVGFiTGFiZWwiLCJzcGFuIiwiSWNvbldyYXBwZXIiLCJjc3NfdGFiaWNvbnMiLCJpY29uTmFtZSIsImljb25Qb3NpdGlvbiIsImNzc19zaG93aWNvbm9ubHlvbmFjdGl2ZSIsImNzc190YWJjdXJyZW50IiwidGFiU3R5bGUiLCJ0eXBlIiwiY29sb3IiLCJDT0xPUiIsImJnQ29sb3IiLCJCR19DT0xPUiIsImN1cnJlbnRUYWIiLCJjc3NfdGFicm91bmRlZCIsImNzc190YWJjdXJyZW50dW5kZXJsaW5lIl0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSxNQUFQLElBQWlCQyxHQUFqQixRQUE0QixtQkFBNUI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFVBQXJCO0FBQ0EsU0FBU0MsWUFBVCxFQUF1QkMsSUFBdkIsUUFBbUMsc0JBQW5DO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixjQUE3QjtBQUdBOztBQUVBOzs7Ozs7Ozs7QUFRQSxPQUFPLElBQU1DLFlBQVksR0FBR0wsR0FBSCxZQUV0QkUsWUFGc0IsQ0FBbEI7QUFLUCxPQUFPLElBQU1JLGNBQWMsR0FBR04sR0FBSCx1SkFBcEI7QUFjUDs7Ozs7OztBQU1BLE9BQU8sSUFBTU8sUUFBUSxHQUFHUixNQUFNLENBQUNTLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUhBS2xCO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFI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QVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUNqQyxNQUFNQyxLQUFLLEdBQUc1QixZQUFZLENBQUM2QixLQUFiLENBQW1CRixJQUFuQixDQUFkO0FBQ0EsTUFBTUcsT0FBTyxHQUFHOUIsWUFBWSxDQUFDK0IsUUFBYixDQUFzQkosSUFBdEIsQ0FBaEI7QUFDQSxTQUFPL0IsR0FBUCxvSkFDVSxVQUFBWSxDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDd0IsVUFBRixHQUFlSixLQUFmLEdBQXVCLEVBQTVCO0FBQUEsR0FEWCxFQUVlLFVBQUFwQixDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDd0IsVUFBRixHQUFlRixPQUFmLEdBQXlCLEVBQTlCO0FBQUEsR0FGaEIsRUFJV2pDLElBQUksQ0FBQytCLEtBQUQsRUFBUSxHQUFSLENBSmYsRUFLZ0JFLE9BTGhCLEVBUWdCQSxPQVJoQixFQVN5QkEsT0FUekIsRUFVd0JBLE9BVnhCO0FBYUEsQ0FoQk07QUFrQlA7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTUcsY0FBYyxHQUFHckMsR0FBSCx5QkFBcEI7QUFJUDs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNc0MsdUJBQXVCLEdBQUd0QyxHQUFILDBKQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcbmltcG9ydCB7IGdsb2JhbFN0eWxlcywgYmFzZSB9IGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqVGFiR3JvdXAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYnNCYXNlXG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsU3R5bGVzIGdsb2JhbCBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJzYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJzc2xpZGVyID0gY3NzYFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG5cdGRpdiwgbGkge1xuXHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdC8qKiBkaXNwbGF5OmlubGluZS1ibG9jazsgKi9cblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHR6LWluZGV4OjE7XG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO1xuXHR9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYnNMaXN0XG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gY2hpbGQgb3JkZXJlZCBsaXN0XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzTGlzdCA9IHN0eWxlZC5vbGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXG5cdCR7KHsgc2xpZGVyIH0pID0+IChzbGlkZXIgPyBcIm1hcmdpbjogYXV0b1wiIDogXCJtYXJnaW46IDFyZW0gMFwiKX07XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0YmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgU2VsZWN0b3JcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzPiBzbGlkZXIgU2VsZWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IFNlbGVjdG9yID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdGNvbG9yOiAke3AgPT4gKChwLnByaW1hcnkgfHwgcC5zZWNvbmRhcnkpID8gXCJ3aGl0ZVwiIDogXCJyZ2JhKDAsMCwwLC42KVwiKX07XG5cdC8qIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTsgKi9cblx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEpICFpbXBvcnRhbnQ7XG5cdGxlZnQ6IDJweDtcblx0Ym90dG9tOiAycHg7XG5cdHRvcDogMnB4O1xuXHR6LWluZGV4OiAxO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOjAuNnM7XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcblx0d2lkdGg6ICR7cCA9PiBwLndpZHRoIC0gMn1weDtcblx0bGVmdDogJHtwID0+IHAubGVmdH1weDtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFic0NvbnRlbnRcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzPiBjaGlsZCwgZGlzcGxheXMgY29udGVudFxuICovXG5leHBvcnQgY29uc3QgVGFic0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0bWFyZ2luOiBhdXRvO1xuXHRwYWRkaW5nOiAxLjFyZW07XG5cdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0Ym9yZGVyLXJhZGl1czogLjNyZW07XG5cblx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXG5cdC8qKiBmaXggZm9yIHJhbmRvbSBNYXJnaW4gVE9ETzogZmluZCBzb3VyY2Ugb2YgbWFyZ2luIG9uIDxwPiB0YWdzICovXG5cdCoge1xuXHRcdG1hcmdpbjogYXV0bztcblx0fVxuYDtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqVGFiKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSBUYWJCYXNlXG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBiYXNlIHN0eWxlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxTdHlsZXMgZ2xvYmFsIHN0eWxlc1xuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYmJhc2UgPSBjc3NgXG5cdC8qKiBHbG9iYWwgU3R5bGVzICovXG5cdCR7Z2xvYmFsU3R5bGVzfTtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO1xuXG5cdGhlaWdodDogMi41ZW07XG5cdG1heC1oZWlnaHQ6IDNlbTtcblx0bWluLWhlaWdodDogMWVtO1xuXG5cdG1hcmdpbjowO1xuXHRwYWRkaW5nOiBjYWxjKC4zNzVlbSAtIDFweCkgMmVtO1xuXG5cdGJvcmRlcjogbm9uZTtcblx0Ym94LXNoYWRvdzogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogLjNyZW07XG5cdC1tb3otdHJhbnNmb3JtOiBub25lO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcblx0dHJhbnNmb3JtOiBub25lO1xuXG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblxuXHRmb250LXN0eWxlOm5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdHRleHQtc2hhZG93Om5vbmU7XG5cdHRleHQtdHJhbnNmb3JtOm5vbmU7XG5cblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdG91dGxpbmU6MDtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgZWFzZSxiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlLGNvbG9yIC4xcyBlYXNlLGJveC1zaGFkb3cgLjFzIGVhc2U7XG5cdHVzZXItc2VsZWN0Om5vbmU7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblx0JjpmaXJzdC1vZi10eXBlIHtcblx0XHRtYXJnaW4tcmlnaHQ6IC4zNmVtO1xuXHR9XHRcblxuXHQmOmxhc3Qtb2YtdHlwZSB7XG5cdFx0bWFyZ2luLWxlZnQ6IC4zNmVtO1xuXHR9XHRcblxuXHQmOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpIHtcblx0XHRtYXJnaW46IDAgLjM2ZW07XG5cdH1cdFxuXHRcblx0Jjpob3ZlciB7XG5cdFx0JHtwID0+ICghcC51bmRlcmxpbmUgJiYgIXAudW5kZXJsaW5lQWxsICYmICFwLnNsaWRlcikgJiYgY3NzYFxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRcdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMzQsMzYsMzgsLjE1KTtcblx0XHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRgfVxuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYkxhYmVsXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gbGFiZWxcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc19zbGlkZXIgPSBjc3NgXG5cdGhlaWdodDogMS43NWVtO1xuXHRtYXJnaW46IDJweCAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0JjphY3RpdmUsXG5cdCY6Zm9jdXMge1xuXHRcdHRyYW5zaXRpb246IGFsbCAuNnMgbGluZWFyO1xuXHRcdGNvbG9yOiBibGFjaztcblx0fVxuXHRcblx0Jjpub3QoOmZpcnN0LW9mLXR5cGUpOmJlZm9yZXtcblx0XHRjb250ZW50OiBcIiB8IFwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsLjEpO1xuXHRcdHRvcDogMXB4O1xuXHRcdGxlZnQ6IC00cHg7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjZzIGxpbmVhcjtcblx0fVxuXHRcblx0JltjdXJyZW50PXRydWVdICsgJjpiZWZvcmUsXG5cdCZbY3VycmVudD10cnVlXTpiZWZvcmUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblxuXG5gO1xuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBUYWJMYWJlbFxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicy5UYWI+IGxhYmVsXG4gKi9cbmV4cG9ydCBjb25zdCBUYWJMYWJlbCA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHN0YXRpYztcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0bWFyZ2luOiBhdXRvO1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBJY29uV3JhcHBlclxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicy5UYWI+IGljb24gd3JhcHBlclxuICovXG5leHBvcnQgY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBUYWJJY29uc1xuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFiKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gSWNvblxuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYmljb25zID0gY3NzYFxuICBkaXNwbGF5OiAke3AgPT4gKHAuaWNvbk5hbWUgPyBcImlubGluZS1mbGV4XCIgOiBcImlubGluZS1ibG9ja1wiKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCJyb3ctcmV2ZXJzZVwiIDogXCJhdXRvXCIpfTtcblxuICAvKiogY2hhbmdlcyBJY29uV3JhcHBlciAqL1xuICAke0ljb25XcmFwcGVyfSB7XG4gICAgbWFyZ2luOiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMCAuNGVtIDAgMFwiIDogXCIwIDAgMCAuNGVtXCIpfTtcbiAgfVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgc2hvd0ljb25Pbmx5T25BY3RpdmVcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gc2hvd3MgdGhlIGljb24gb25seSB3aGVuIEFjdGl2ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBJY29uV3JhcHBlciBDU1MtaW4tSlNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc19zaG93aWNvbm9ubHlvbmFjdGl2ZSA9IGNzc2Bcblx0Jjpub3QoOmhvdmVyKSA+ICR7SWNvbldyYXBwZXJ9IHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0b3BhY2l0eTogMDtcblxuXHRcdG1hcmdpbi1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCItMTVweFwiIDogXCJpbml0aWFsXCIpfVxuXHRcdG1hcmdpbi1sZWZ0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLTE1cHhcIiA6IFwiaW5pdGlhbFwiKX1cblx0fVxuXHQmOmhvdmVyID4gJHtJY29uV3JhcHBlcn0ge1xuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdFx0b3BhY2l0eTogMTtcblx0XHRtYXJnaW4tcmlnaHQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwiMFwiIDogXCJpbmhlcml0XCIpfVxuXHRcdG1hcmdpbi1sZWZ0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMFwiIDogXCJpbmhlcml0XCIpfVxuXHRcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjVzLCBtYXJnaW4tcmlnaHQgMC4xcywgbWFyZ2luLWxlZnQgMC4xcyBsaW5lYXI7XG5cdH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYkN1cnJlbnRcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gc2hvd3MgdGhlIEFjdGl2ZSB0YWJcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJjdXJyZW50ID0gY3NzYFxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0Y29sb3I6ICR7cCA9PiAoKHAucHJpbWFyeSB8fCBwLnNlY29uZGFyeSkgPyBcIndoaXRlXCIgOiBcInJnYmEoMCwwLDAsLjYpXCIpfTtcblx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cdFx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDk5JTtcblx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHR3aWR0aDogLjZlbTtcblx0XHRcdGhlaWdodDogLjZlbTtcblxuXHRcdFx0bWFyZ2luOiAuNXB4IDAgMDtcblx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgyMjQsMjI1LDIyNiwxKTtcblxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRcdFxuXHRcdFx0ei1pbmRleDogMTtcblx0XHR9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJTdHlsZVxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBTdHlsZXMgdGhlIHRhYnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgY29uc3QgdGFiU3R5bGUgPSAodHlwZSkgPT4ge1xuXHRjb25zdCBjb2xvciA9IGRlZmF1bHRUaGVtZS5DT0xPUlt0eXBlXTtcblx0Y29uc3QgYmdDb2xvciA9IGRlZmF1bHRUaGVtZS5CR19DT0xPUlt0eXBlXTtcblx0cmV0dXJuIGNzc2Ame1xuXHRcdGNvbG9yOiAke3AgPT4gKHAuY3VycmVudFRhYiA/IGNvbG9yIDogXCJcIil9O1xuXHRcdGJhY2tncm91bmQ6ICR7cCA9PiAocC5jdXJyZW50VGFiID8gYmdDb2xvciA6IFwiXCIpfTtcblx0XHQmOmhvdmVyIHtcblx0XHRcdGNvbG9yOiAke3JnYmEoY29sb3IsIDAuOCl9O1xuXHRcdFx0YmFja2dyb3VuZDogJHtiZ0NvbG9yfTtcblx0XHR9XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0YmFja2dyb3VuZDogJHtiZ0NvbG9yfTtcblx0XHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICR7YmdDb2xvcn07XG5cdFx0XHRib3JkZXItcmlnaHQtY29sb3I6ICR7YmdDb2xvcn07XG5cdFx0fVxuXHR9YDtcbn07XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYlJvdW5kZWRcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gU3R5bGVzIHRoZSB0YWJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJyb3VuZGVkID0gY3NzYFxuXHRib3JkZXItcmFkaXVzOiAzcmVtO1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiUm91bmRlZFxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBTdHlsZXMgdGhlIHRhYnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUgPSBjc3NgXG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0Ym94LXNoYWRvdzogbm9uZTtcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XG5cdFx0Ym9yZGVyOiBub25lO1xuICB9XG5gO1xuIl19