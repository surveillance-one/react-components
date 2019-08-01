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
export var css_tabsslider = css(["background-color:#EEEEEE;border-radius:5px;display:inline-flex;div,li{text-decoration:none;position:relative;z-index:1;transition-duration:0.6s;}"]);
/**
 * Styled-Component
 * @name TabsList
 * @see Tabs (components/Tabs)
 * @description <Tabs> child ordered list
 */

export var TabsList = styled.ol.withConfig({
  displayName: "styles__TabsList",
  componentId: "sc-1y5cqme-0"
})(["display:inline-flex;position:relative;padding-left:0;margin:1rem 0;border-radius:.3rem;font-weight:400;background:none;"]);
export var Selector = styled.div.withConfig({
  displayName: "styles__Selector",
  componentId: "sc-1y5cqme-1"
})(["position:absolute !important;background-color:#FFFFFF;color:", ";border:solid 1px rgba(0,0,0,0.1);border-radius:5px;box-shadow:0 2px 10px rgba(0,0,0,.2) !important;left:0;bottom:2px;top:2px;z-index:1;transition-duration:0.6s;transition-timing-function:cubic-bezier(0.68,-0.55,0.265,1.55);width:", "px;left:", "px;"], function (p) {
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
  componentId: "sc-1y5cqme-2"
})(["", ";"], function (p) {
  return !p.slider && css(["position:relative;margin:1rem 0;padding:1.1rem;border:solid 1px rgba(0,0,0,0.1);border-radius:.3rem;background:rgb(255,255,255);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);*{margin:auto;}"]);
});
/* ******************************Tab**************************** */

/**
 * Styled-Component CSS
 * @name TabBase
 * @see Tabs (components/Tabs)
 * @description <Tab> base styles
 *
 * @param {object} globalStyles global styles
 */

export var css_tabbase = css(["", ";align-self:center;position:relative;display:flex;vertical-align:baseline;height:2.5em;max-height:3em;min-height:1em;margin:0;padding:calc(.375em - 1px) 2em;border:none;box-shadow:none;border-radius:.3rem;color:rgba(0,0,0,.6);font-style:normal;font-weight:500;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;cursor:pointer;list-style:none;outline:0;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;user-select:none;white-space:nowrap;&:not(:first-of-type):not(:last-of-tpye){margin:0 .36em;}&:hover{", " color:rgba(0,0,0,.8);}&:active,&:focus{outline:none;}"], globalStyles, function (p) {
  return !p.underline && !p.underlineAll && !p.slider && css(["background-color:rgba(224,225,226,1);box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border:solid 1px rgba(0,0,0,0.1);"]);
});
/**
 * Styled-Component
 * @name TabLabel
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> label
 */

export var css_slider = css(["height:1.75em;margin:2px;padding:0 20px;font-weight:400;&:active,&:focus{transition:all .6s linear;color:black;}&:not(:first-of-type):before{content:\" | \";position:absolute;color:rgba(0,0,0,.1);top:1px;left:-4px;}&[current=true]:before{content:'';}&[current=true] + &:before{content:'';}"]);
/**
 * Styled-Component
 * @name TabLabel
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> label
 */

export var TabLabel = styled.span.withConfig({
  displayName: "styles__TabLabel",
  componentId: "sc-1y5cqme-3"
})(["display:block;position:static;vertical-align:middle;margin:auto;"]);
/**
 * Styled-Component
 * @name IconWrapper
 * @see Tab (components/Tabs)
 * @description <Tabs.Tab> icon wrapper
 */

export var IconWrapper = styled.span.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-1y5cqme-4"
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

export var css_tabcurrent = css(["", ";"], function (p) {
  return !p.slider && css(["background:rgba(224,225,226,1);color:", ";box-shadow:0 1px 2px 0 rgba(34,36,38,.15);border:solid 1px rgba(0,0,0,0.1);&::after{content:\"\";position:absolute;top:99%;left:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);box-sizing:border-box;width:.6em;height:.6em;margin:.5px 0 0;border-bottom:solid 1px rgba(224,225,226,1);border-right:solid 1px rgba(224,225,226,1);background:rgba(224,225,226,1);z-index:1;}"], function (p) {
    return p.primary || p.secondary ? "white" : "rgba(0,0,0,.6)";
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJkZWZhdWx0VGhlbWUiLCJjc3NfdGFic2Jhc2UiLCJjc3NfdGFic3NsaWRlciIsIlRhYnNMaXN0Iiwib2wiLCJTZWxlY3RvciIsImRpdiIsInAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwid2lkdGgiLCJsZWZ0IiwiVGFic0NvbnRlbnQiLCJzbGlkZXIiLCJjc3NfdGFiYmFzZSIsInVuZGVybGluZSIsInVuZGVybGluZUFsbCIsImNzc19zbGlkZXIiLCJUYWJMYWJlbCIsInNwYW4iLCJJY29uV3JhcHBlciIsImNzc190YWJpY29ucyIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYmN1cnJlbnQiLCJ0YWJTdHlsZSIsInR5cGUiLCJjb2xvciIsIkNPTE9SIiwiYmdDb2xvciIsIkJHX0NPTE9SIiwiY3VycmVudFRhYiIsImNzc190YWJyb3VuZGVkIiwiY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsVUFBckI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHNCQUF6QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsY0FBN0I7QUFFQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNQyxZQUFZLEdBQUdKLEdBQUgsWUFFdEJFLFlBRnNCLENBQWxCO0FBS1AsT0FBTyxJQUFNRyxjQUFjLEdBQUdMLEdBQUgsdUpBQXBCO0FBY1A7Ozs7Ozs7QUFNQSxPQUFPLElBQU1NLFFBQVEsR0FBR1AsTUFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLCtIQUFkO0FBYVAsT0FBTyxJQUFNQyxRQUFRLEdBQUdULE1BQU0sQ0FBQ1UsR0FBVjtBQUFB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QUEsQ0FIdUIsQ0FBcEI7QUE4QlA7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTWlCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUNqQyxNQUFNQyxLQUFLLEdBQUc1QixZQUFZLENBQUM2QixLQUFiLENBQW1CRixJQUFuQixDQUFkO0FBQ0EsTUFBTUcsT0FBTyxHQUFHOUIsWUFBWSxDQUFDK0IsUUFBYixDQUFzQkosSUFBdEIsQ0FBaEI7QUFDQSxTQUFPOUIsR0FBUCxvSkFDVSxVQUFBVSxDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDeUIsVUFBRixHQUFlSixLQUFmLEdBQXVCLEVBQTVCO0FBQUEsR0FEWCxFQUVlLFVBQUFyQixDQUFDO0FBQUEsV0FBS0EsQ0FBQyxDQUFDeUIsVUFBRixHQUFlRixPQUFmLEdBQXlCLEVBQTlCO0FBQUEsR0FGaEIsRUFJV2hDLElBQUksQ0FBQzhCLEtBQUQsRUFBUSxHQUFSLENBSmYsRUFLZ0JFLE9BTGhCLEVBUWdCQSxPQVJoQixFQVN5QkEsT0FUekIsRUFVd0JBLE9BVnhCO0FBYUEsQ0FoQk07QUFrQlA7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTUcsY0FBYyxHQUFHcEMsR0FBSCx5QkFBcEI7QUFJUDs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNcUMsdUJBQXVCLEdBQUdyQyxHQUFILDBKQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcbmltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vdWkvdGhlbWVzXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqVGFiR3JvdXAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYnNCYXNlXG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsU3R5bGVzIGdsb2JhbCBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJzYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJzc2xpZGVyID0gY3NzYFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG5cdFx0ZGl2LCBsaSB7XG5cdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0XHRcdC8qKiBkaXNwbGF5OmlubGluZS1ibG9jazsgKi9cblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHRcdFx0ei1pbmRleDoxO1xuXHRcdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO1xuXHRcdH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFic0xpc3RcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzPiBjaGlsZCBvcmRlcmVkIGxpc3RcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYnNMaXN0ID0gc3R5bGVkLm9sYFxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cblx0bWFyZ2luOiAxcmVtIDA7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0YmFja2dyb3VuZDogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRjb2xvcjogJHtwID0+ICgocC5wcmltYXJ5IHx8IHAuc2Vjb25kYXJ5KSA/IFwid2hpdGVcIiA6IFwicmdiYSgwLDAsMCwuNilcIil9O1xuXHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLC4yKSAhaW1wb3J0YW50O1xuXHRsZWZ0OiAwO1xuXHRib3R0b206IDJweDtcblx0dG9wOiAycHg7XG5cdHotaW5kZXg6IDE7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246MC42cztcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuXHR3aWR0aDogJHtwID0+IHAud2lkdGggLSAyfXB4O1xuXHRsZWZ0OiAke3AgPT4gcC5sZWZ0fXB4O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBUYWJzQ29udGVudFxuICogQHNlZSBUYWJzIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnM+IGNoaWxkLCBkaXNwbGF5cyBjb250ZW50XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cblx0JHtwID0+ICFwLnNsaWRlciAmJiBjc3NgXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdFx0bWFyZ2luOiAxcmVtIDA7XG5cdFx0cGFkZGluZzogMS4xcmVtO1xuXHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRib3JkZXItcmFkaXVzOiAuM3JlbTtcblxuXHRcdGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XG5cdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXG5cdFx0LyoqIGZpeCBmb3IgcmFuZG9tIE1hcmdpbiBUT0RPOiBmaW5kIHNvdXJjZSBvZiBtYXJnaW4gb24gPHA+IHRhZ3MgKi9cblx0XHQqIHtcblx0XHRcdG1hcmdpbjogYXV0bztcblx0XHR9XG5cblx0YH07XG5gO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipUYWIqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYkJhc2VcbiAqIEBzZWUgVGFicyAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IGJhc2Ugc3R5bGVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbFN0eWxlcyBnbG9iYWwgc3R5bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogZmxleDtcblx0dmVydGljYWwtYWxpZ246YmFzZWxpbmU7XG5cblx0aGVpZ2h0OiAyLjVlbTtcblx0bWF4LWhlaWdodDogM2VtO1xuXHRtaW4taGVpZ2h0OiAxZW07XG5cblx0bWFyZ2luOjA7XG5cdHBhZGRpbmc6IGNhbGMoLjM3NWVtIC0gMXB4KSAyZW07XG5cblx0Ym9yZGVyOiBub25lO1xuXHRib3gtc2hhZG93OiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAuM3JlbTtcblx0XG5cdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblxuXHRmb250LXN0eWxlOm5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdHRleHQtc2hhZG93Om5vbmU7XG5cdHRleHQtdHJhbnNmb3JtOm5vbmU7XG5cblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdG91dGxpbmU6MDtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgZWFzZSxiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlLGNvbG9yIC4xcyBlYXNlLGJveC1zaGFkb3cgLjFzIGVhc2U7XG5cdHVzZXItc2VsZWN0Om5vbmU7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblxuXHQmOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXRweWUpIHtcblx0XHRtYXJnaW46IDAgLjM2ZW07XG5cdH1cdFxuXHRcblx0Jjpob3ZlciB7XG5cdFx0JHtwID0+ICghcC51bmRlcmxpbmUgJiYgIXAudW5kZXJsaW5lQWxsICYmICFwLnNsaWRlcikgJiYgY3NzYFxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXHRcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwwLDAsMC4xKTtcblx0XHRgfVxuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC44KTtcbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYkxhYmVsXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gbGFiZWxcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc19zbGlkZXIgPSBjc3NgXG5cdGhlaWdodDogMS43NWVtO1xuXHRtYXJnaW46IDJweDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHQmOmFjdGl2ZSxcblx0Jjpmb2N1cyB7XG5cdFx0dHJhbnNpdGlvbjogYWxsIC42cyBsaW5lYXI7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cdFxuXHQmOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6IFwiIHwgXCI7XG5cdFx0cG9zaXRpb246IGFic29sdXRlOyBcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuMSk7XG5cdFx0dG9wOiAxcHg7XG5cdFx0bGVmdDogLTRweDtcblx0fVxuXHRcblx0JltjdXJyZW50PXRydWVdOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdH1cblx0XG5cdCZbY3VycmVudD10cnVlXSArICY6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnJztcblx0fVxuYDtcbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFiTGFiZWxcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBsYWJlbFxuICovXG5leHBvcnQgY29uc3QgVGFiTGFiZWwgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdG1hcmdpbjogYXV0bztcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgSWNvbldyYXBwZXJcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBpY29uIHdyYXBwZXJcbiAqL1xuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cbiAgLyoqIHBhZGRpbmc6IC43NWVtOyAqL1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgMCB0cmFuc3BhcmVudCBpbnNldDtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFiSWNvbnNcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYilcbiAqIEBkZXNjcmlwdGlvbiA8VGFicy5UYWI+IEljb25cbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJpY29ucyA9IGNzc2BcbiAgZGlzcGxheTogJHtwID0+IChwLmljb25OYW1lID8gXCJpbmxpbmUtZmxleFwiIDogXCJpbmxpbmUtYmxvY2tcIil9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwicm93LXJldmVyc2VcIiA6IFwiYXV0b1wiKX07XG5cdFxuICAvKiogcGFkZGluZy1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi43NWVtXCIgOiBcIjBcIil9OyAqL1xuICAvKiogcGFkZGluZy1sZWZ0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMFwiIDogXCIuNzVlbVwiKX07ICovXG5cbiAgLyoqIGNoYW5nZXMgSWNvbldyYXBwZXIgKi9cbiAgJHtJY29uV3JhcHBlcn0ge1xuICAgIG1hcmdpbjogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjAgLjRlbSAwIDBcIiA6IFwiMCAwIDAgLjRlbVwiKX07XG4gIH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHNob3dJY29uT25seU9uQWN0aXZlXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IHNob3dzIHRoZSBpY29uIG9ubHkgd2hlbiBBY3RpdmVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gSWNvbldyYXBwZXIgQ1NTLWluLUpTXG4gKi9cbmV4cG9ydCBjb25zdCBjc3Nfc2hvd2ljb25vbmx5b25hY3RpdmUgPSBjc3NgXG5cdCY6bm90KDpob3ZlcikgPiAke0ljb25XcmFwcGVyfSB7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdG9wYWNpdHk6IDA7XG5cblx0XHRtYXJnaW4tcmlnaHQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwicmlnaHRcIiA/IFwiLTE1cHhcIiA6IFwiaW5pdGlhbFwiKX1cblx0XHRtYXJnaW4tbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi0xNXB4XCIgOiBcImluaXRpYWxcIil9XG5cdH1cblx0Jjpob3ZlciA+ICR7SWNvbldyYXBwZXJ9IHtcblx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHRcdG9wYWNpdHk6IDE7XG5cdFx0bWFyZ2luLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcIjBcIiA6IFwiaW5oZXJpdFwiKX1cblx0XHRtYXJnaW4tbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjBcIiA6IFwiaW5oZXJpdFwiKX1cblx0XHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC41cywgbWFyZ2luLXJpZ2h0IDAuMXMsIG1hcmdpbi1sZWZ0IDAuMXMgbGluZWFyO1xuXHR9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJDdXJyZW50XG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IHNob3dzIHRoZSBBY3RpdmUgdGFiXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiY3VycmVudCA9IGNzc2BcblxuXG5cdCR7cCA9PiAhcC5zbGlkZXIgJiYgY3NzYFxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0Y29sb3I6ICR7cCA9PiAoKHAucHJpbWFyeSB8fCBwLnNlY29uZGFyeSkgPyBcIndoaXRlXCIgOiBcInJnYmEoMCwwLDAsLjYpXCIpfTtcblx0XHRib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cdFx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0b3A6IDk5JTtcblx0XHRcdGxlZnQ6IDUwJTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG5cdFx0XHRcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHR3aWR0aDogLjZlbTtcblx0XHRcdGhlaWdodDogLjZlbTtcblxuXHRcdFx0bWFyZ2luOiAuNXB4IDAgMDtcblx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgyMjQsMjI1LDIyNiwxKTtcblxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRcdFxuXHRcdFx0ei1pbmRleDogMTtcblx0XHR9XG5cdGB9O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiU3R5bGVcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gU3R5bGVzIHRoZSB0YWJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYlN0eWxlID0gKHR5cGUpID0+IHtcblx0Y29uc3QgY29sb3IgPSBkZWZhdWx0VGhlbWUuQ09MT1JbdHlwZV07XG5cdGNvbnN0IGJnQ29sb3IgPSBkZWZhdWx0VGhlbWUuQkdfQ09MT1JbdHlwZV07XG5cdHJldHVybiBjc3NgJntcblx0XHRjb2xvcjogJHtwID0+IChwLmN1cnJlbnRUYWIgPyBjb2xvciA6IFwiXCIpfTtcblx0XHRiYWNrZ3JvdW5kOiAke3AgPT4gKHAuY3VycmVudFRhYiA/IGJnQ29sb3IgOiBcIlwiKX07XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJHtyZ2JhKGNvbG9yLCAwLjgpfTtcblx0XHRcdGJhY2tncm91bmQ6ICR7YmdDb2xvcn07XG5cdFx0fVxuXHRcdCY6OmFmdGVyIHtcblx0XHRcdGJhY2tncm91bmQ6ICR7YmdDb2xvcn07XG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAke2JnQ29sb3J9O1xuXHRcdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiAke2JnQ29sb3J9O1xuXHRcdH1cblx0fWA7XG59O1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJSb3VuZGVkXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IFN0eWxlcyB0aGUgdGFic1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFicm91bmRlZCA9IGNzc2Bcblx0Ym9yZGVyLXJhZGl1czogM3JlbTtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYlJvdW5kZWRcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gU3R5bGVzIHRoZSB0YWJzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJjdXJyZW50dW5kZXJsaW5lID0gY3NzYFxuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcblx0Ym9yZGVyLXJhZGl1czogMDtcblxuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuXHRcdGJvcmRlcjogbm9uZTtcbiAgfVxuYDtcbiJdfQ==