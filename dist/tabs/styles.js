import styled, { css } from "styled-components";
import { rgba } from "polished";
import globalStyles from "ui/styles/globals";
import { defaultTheme } from "ui/themes";
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
})(["position:relative;margin:1rem 0;padding:1.1rem;border:solid 1px #f0f0f0;border-radius:.3rem;background:rgb(255,255,255);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);*{margin:auto;}"]);
/* ******************************Tab**************************** */

/**
 * Styled-Component CSS
 * @name TabBase
 * @see Tabs (components/Tabs)
 * @description <Tab> base styles
 *
 * @param {object} globalStyles global styles
 */

export var css_tabbase = css(["", ";align-self:center;position:relative;display:flex;vertical-align:baseline;height:2.5em;max-height:3em;min-height:1em;margin:0;padding:calc(.375em - 1px) .75em;border:none;box-shadow:none;border-radius:.3rem;color:rgba(0,0,0,.6);font-style:normal;font-weight:500;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;cursor:pointer;list-style:none;outline:0;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;user-select:none;white-space:nowrap;&:first-child{margin-right:.36em;}&:last-child{margin-left:.36em;}&:not(:first-child):not(:last-child){margin:0 .36em;}&:hover{background-color:rgba(224,225,226,1);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);color:rgba(0,0,0,.6);}&:active,&:focus{outline:none;}"], globalStyles);
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

export var css_tabcurrent = css(["background:rgba(224,225,226,1);color:rgba(0,0,0,.6);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);&::after{content:\"\";position:absolute;top:99%;left:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);box-sizing:border-box;width:.6em;height:.6em;margin:.5px 0 0;border-bottom:solid 1px rgba(224,225,226,1);border-right:solid 1px rgba(224,225,226,1);background:rgba(224,225,226,1);z-index:1;}"]);
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

export var css_tabcurrentunderline = css(["color:black;font-weight:700;border-bottom:1px solid black;border-radius:0;"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJkZWZhdWx0VGhlbWUiLCJjc3NfdGFic2Jhc2UiLCJUYWJzTGlzdCIsIm9sIiwiVGFic0NvbnRlbnQiLCJkaXYiLCJjc3NfdGFiYmFzZSIsIlRhYkxhYmVsIiwic3BhbiIsIkljb25XcmFwcGVyIiwiY3NzX3RhYmljb25zIiwicCIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYmN1cnJlbnQiLCJ0YWJTdHlsZSIsInR5cGUiLCJjb2xvciIsIkNPTE9SIiwiYmdDb2xvciIsIkJHX0NPTE9SIiwiY3VycmVudFRhYiIsImNzc190YWJyb3VuZGVkIiwiY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsVUFBckI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLG1CQUF6QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsV0FBN0I7QUFFQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNQyxZQUFZLEdBQUdKLEdBQUgsWUFFdEJFLFlBRnNCLENBQWxCO0FBS1A7Ozs7Ozs7QUFNQSxPQUFPLElBQU1HLFFBQVEsR0FBR04sTUFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLHdIQUFkO0FBYVA7Ozs7Ozs7QUFNQSxPQUFPLElBQU1DLFdBQVcsR0FBR1IsTUFBTSxDQUFDUyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlMQUFqQjtBQWtCUDs7QUFFQTs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNQyxXQUFXLEdBQUdULEdBQUgsc3dCQUVyQkUsWUFGcUIsQ0FBakI7QUF5RFA7Ozs7Ozs7QUFNQSxPQUFPLElBQU1RLFFBQVEsR0FBR1gsTUFBTSxDQUFDWSxJQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUFkO0FBT1A7Ozs7Ozs7QUFNQSxPQUFPLElBQU1DLFdBQVcsR0FBR2IsTUFBTSxDQUFDWSxJQUFWO0FBQUE7QUFBQTtBQUFBLHFGQUFqQjtBQVdQOzs7Ozs7O0FBTUEsT0FBTyxJQUFNRSxZQUFZLEdBQUdiLEdBQUgsK0ZBQ1osVUFBQWMsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ0MsUUFBRixHQUFhLGFBQWIsR0FBNkIsY0FBbEM7QUFBQSxDQURXLEVBSVYsVUFBQUQsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ0UsWUFBRixLQUFtQixNQUFuQixHQUE0QixhQUE1QixHQUE0QyxNQUFqRDtBQUFBLENBSlMsRUFVckJKLFdBVnFCLEVBV1gsVUFBQUUsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ0UsWUFBRixLQUFtQixNQUFuQixHQUE0QixZQUE1QixHQUEyQyxZQUFoRDtBQUFBLENBWFUsQ0FBbEI7QUFlUDs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNQyx3QkFBd0IsR0FBR2pCLEdBQUgsNlBBQ2xCWSxXQURrQixFQUtuQixVQUFBRSxDQUFDO0FBQUEsU0FBS0EsQ0FBQyxDQUFDRSxZQUFGLEtBQW1CLE9BQW5CLEdBQTZCLE9BQTdCLEdBQXVDLFNBQTVDO0FBQUEsQ0FMa0IsRUFNcEIsVUFBQUYsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ0UsWUFBRixLQUFtQixNQUFuQixHQUE0QixPQUE1QixHQUFzQyxTQUEzQztBQUFBLENBTm1CLEVBUXhCSixXQVJ3QixFQVduQixVQUFBRSxDQUFDO0FBQUEsU0FBS0EsQ0FBQyxDQUFDRSxZQUFGLEtBQW1CLE9BQW5CLEdBQTZCLEdBQTdCLEdBQW1DLFNBQXhDO0FBQUEsQ0FYa0IsRUFZcEIsVUFBQUYsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ0UsWUFBRixLQUFtQixNQUFuQixHQUE0QixHQUE1QixHQUFrQyxTQUF2QztBQUFBLENBWm1CLENBQTlCO0FBaUJQOzs7Ozs7O0FBTUEsT0FBTyxJQUFNRSxjQUFjLEdBQUdsQixHQUFILHFaQUFwQjtBQTBCUDs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNbUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2pDLE1BQU1DLEtBQUssR0FBR2xCLFlBQVksQ0FBQ21CLEtBQWIsQ0FBbUJGLElBQW5CLENBQWQ7QUFDQSxNQUFNRyxPQUFPLEdBQUdwQixZQUFZLENBQUNxQixRQUFiLENBQXNCSixJQUF0QixDQUFoQjtBQUNBLFNBQU9wQixHQUFQLG9KQUNVLFVBQUFjLENBQUM7QUFBQSxXQUFLQSxDQUFDLENBQUNXLFVBQUYsR0FBZUosS0FBZixHQUF1QixFQUE1QjtBQUFBLEdBRFgsRUFFZSxVQUFBUCxDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDVyxVQUFGLEdBQWVGLE9BQWYsR0FBeUIsRUFBOUI7QUFBQSxHQUZoQixFQUlXdEIsSUFBSSxDQUFDb0IsS0FBRCxFQUFRLEdBQVIsQ0FKZixFQUtnQkUsT0FMaEIsRUFRZ0JBLE9BUmhCLEVBU3lCQSxPQVR6QixFQVV3QkEsT0FWeEI7QUFhQSxDQWhCTTtBQWtCUDs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNRyxjQUFjLEdBQUcxQixHQUFILHlCQUFwQjtBQUlQOzs7Ozs7Ozs7QUFRQSxPQUFPLElBQU0yQix1QkFBdUIsR0FBRzNCLEdBQUgsZ0ZBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgcmdiYSB9IGZyb20gXCJwb2xpc2hlZFwiO1xuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwidWkvc3R5bGVzL2dsb2JhbHNcIjtcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gXCJ1aS90aGVtZXNcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKipUYWJHcm91cCoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgVGFic0Jhc2VcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzPiBiYXNlIHN0eWxlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxTdHlsZXMgZ2xvYmFsIHN0eWxlc1xuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYnNiYXNlID0gY3NzYFxuXHQvKiogR2xvYmFsIFN0eWxlcyAqL1xuXHQke2dsb2JhbFN0eWxlc307XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYnNMaXN0XG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gY2hpbGQgb3JkZXJlZCBsaXN0XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzTGlzdCA9IHN0eWxlZC5vbGBcblx0ZGlzcGxheTogZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cblx0bWFyZ2luOiAxcmVtIDA7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0YmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFic0NvbnRlbnRcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzPiBjaGlsZCwgZGlzcGxheXMgY29udGVudFxuICovXG5leHBvcnQgY29uc3QgVGFic0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0bWFyZ2luOiAxcmVtIDA7XG5cdHBhZGRpbmc6IDEuMXJlbTtcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2YwZjBmMDtcblx0Ym9yZGVyLXJhZGl1czogLjNyZW07XG5cblx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXG5cdC8qKiBmaXggZm9yIHJhbmRvbSBNYXJnaW4gVE9ETzogZmluZCBzb3VyY2Ugb2YgbWFyZ2luIG9uIDxwPiB0YWdzICovXG5cdCoge1xuXHRcdG1hcmdpbjogYXV0bztcblx0fVxuXG5gO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipUYWIqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYkJhc2VcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IGJhc2Ugc3R5bGVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbFN0eWxlcyBnbG9iYWwgc3R5bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0dmVydGljYWwtYWxpZ246YmFzZWxpbmU7XG5cblx0aGVpZ2h0OiAyLjVlbTtcblx0bWF4LWhlaWdodDogM2VtO1xuXHRtaW4taGVpZ2h0OiAxZW07XG5cblx0bWFyZ2luOjA7XG5cdHBhZGRpbmc6IGNhbGMoLjM3NWVtIC0gMXB4KSAuNzVlbTtcblxuXHRib3JkZXI6IG5vbmU7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXHRjb2xvcjogcmdiYSgwLDAsMCwuNik7XG5cblx0Zm9udC1zdHlsZTpub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHR0ZXh0LXNoYWRvdzpub25lO1xuXHR0ZXh0LXRyYW5zZm9ybTpub25lO1xuXG5cdGN1cnNvcjpwb2ludGVyO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRvdXRsaW5lOjA7XG5cdHRyYW5zaXRpb246IG9wYWNpdHkgLjFzIGVhc2UsYmFja2dyb3VuZC1jb2xvciAuMXMgZWFzZSxjb2xvciAuMXMgZWFzZSxib3gtc2hhZG93IC4xcyBlYXNlO1xuXHR1c2VyLXNlbGVjdDpub25lO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG5cdCY6Zmlyc3QtY2hpbGQge1xuXHRcdG1hcmdpbi1yaWdodDogLjM2ZW07XG5cdH1cblx0JjpsYXN0LWNoaWxkIHtcblx0XHRtYXJnaW4tbGVmdDogLjM2ZW07XG5cdH1cblx0Jjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcblx0XHRtYXJnaW46IDAgLjM2ZW07XG5cdH1cdFxuXHRcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuICB9XG5cbiAgJjphY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFiTGFiZWxcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBsYWJlbFxuICovXG5leHBvcnQgY29uc3QgVGFiTGFiZWwgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdG1hcmdpbjogYXV0bztcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgSWNvbldyYXBwZXJcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBpY29uIHdyYXBwZXJcbiAqL1xuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cbiAgLyoqIHBhZGRpbmc6IC43NWVtOyAqL1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuXG4gIGJveC1zaGFkb3c6IC0xcHggMCAwIDAgdHJhbnNwYXJlbnQgaW5zZXQ7XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYkljb25zXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWIpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBJY29uXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiaWNvbnMgPSBjc3NgXG4gIGRpc3BsYXk6ICR7cCA9PiAocC5pY29uTmFtZSA/IFwiaW5saW5lLWZsZXhcIiA6IFwiaW5saW5lLWJsb2NrXCIpfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcInJvdy1yZXZlcnNlXCIgOiBcImF1dG9cIil9O1xuXHRcbiAgLyoqIHBhZGRpbmctcmlnaHQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIuNzVlbVwiIDogXCIwXCIpfTsgKi9cbiAgLyoqIHBhZGRpbmctbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjBcIiA6IFwiLjc1ZW1cIil9OyAqL1xuXG4gIC8qKiBjaGFuZ2VzIEljb25XcmFwcGVyICovXG4gICR7SWNvbldyYXBwZXJ9IHtcbiAgICBtYXJnaW46ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwIC40ZW0gMCAwXCIgOiBcIjAgMCAwIC40ZW1cIil9O1xuICB9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSBzaG93SWNvbk9ubHlPbkFjdGl2ZVxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBzaG93cyB0aGUgaWNvbiBvbmx5IHdoZW4gQWN0aXZlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IEljb25XcmFwcGVyIENTUy1pbi1KU1xuICovXG5leHBvcnQgY29uc3QgY3NzX3Nob3dpY29ub25seW9uYWN0aXZlID0gY3NzYFxuXHQmOm5vdCg6aG92ZXIpID4gJHtJY29uV3JhcHBlcn0ge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRvcGFjaXR5OiAwO1xuXG5cdFx0bWFyZ2luLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcIi0xNXB4XCIgOiBcImluaXRpYWxcIil9XG5cdFx0bWFyZ2luLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCItMTVweFwiIDogXCJpbml0aWFsXCIpfVxuXHR9XG5cdCY6aG92ZXIgPiAke0ljb25XcmFwcGVyfSB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdG1hcmdpbi1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCIwXCIgOiBcImluaGVyaXRcIil9XG5cdFx0bWFyZ2luLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwXCIgOiBcImluaGVyaXRcIil9XG5cdFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuNXMsIG1hcmdpbi1yaWdodCAwLjFzLCBtYXJnaW4tbGVmdCAwLjFzIGxpbmVhcjtcblx0fVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiQ3VycmVudFxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBzaG93cyB0aGUgQWN0aXZlIHRhYlxuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYmN1cnJlbnQgPSBjc3NgXG5cdGJhY2tncm91bmQ6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXG5cdCY6OmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDk5JTtcblx0XHRsZWZ0OiA1MCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcblx0XHRcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdHdpZHRoOiAuNmVtO1xuXHRcdGhlaWdodDogLjZlbTtcblxuXHRcdG1hcmdpbjogLjVweCAwIDA7XG5cdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgyMjQsMjI1LDIyNiwxKTtcblxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0XG5cdFx0ei1pbmRleDogMTtcblx0fVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiU3R5bGVcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gU3R5bGVzIHRoZSB0YWJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYlN0eWxlID0gKHR5cGUpID0+IHtcblx0Y29uc3QgY29sb3IgPSBkZWZhdWx0VGhlbWUuQ09MT1JbdHlwZV07XG5cdGNvbnN0IGJnQ29sb3IgPSBkZWZhdWx0VGhlbWUuQkdfQ09MT1JbdHlwZV07XG5cdHJldHVybiBjc3NgJntcblx0XHRjb2xvcjogJHtwID0+IChwLmN1cnJlbnRUYWIgPyBjb2xvciA6IFwiXCIpfTtcblx0XHRiYWNrZ3JvdW5kOiAke3AgPT4gKHAuY3VycmVudFRhYiA/IGJnQ29sb3IgOiBcIlwiKX07XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJHtyZ2JhKGNvbG9yLCAwLjgpfTtcblx0XHRcdGJhY2tncm91bmQ6ICR7YmdDb2xvcn07XG5cdFx0fVxuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGJhY2tncm91bmQ6ICR7YmdDb2xvcn07XG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAke2JnQ29sb3J9O1xuXHRcdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAke2JnQ29sb3J9O1xuXHRcdH1cblx0fWA7XG59O1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJSb3VuZGVkXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IFN0eWxlcyB0aGUgdGFic1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFicm91bmRlZCA9IGNzc2Bcblx0Ym9yZGVyLXJhZGl1czogM3JlbTtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYlJvdW5kZWRcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gU3R5bGVzIHRoZSB0YWJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJjdXJyZW50dW5kZXJsaW5lID0gY3NzYFxuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogMDtcbmA7XG4iXX0=