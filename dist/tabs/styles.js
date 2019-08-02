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
  componentId: "sc-1y5cqme-0"
})(["display:inline-flex;position:relative;padding-left:0;margin:1rem 0;border-radius:.3rem;font-weight:400;background:none;"]);
/**
 * Styled-Component
 * @name Selector
 * @see Tabs (components/Tabs)
 * @description <Tabs> slider Selector
 */

export var Selector = styled.div.withConfig({
  displayName: "styles__Selector",
  componentId: "sc-1y5cqme-1"
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
  componentId: "sc-1y5cqme-2"
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

export var css_tabbase = css(["", ";align-self:center;position:relative;display:flex;vertical-align:baseline;height:2.5em;max-height:3em;min-height:1em;margin:0;padding:calc(.375em - 1px) 2em;border:none;box-shadow:none;border-radius:.3rem;color:rgba(0,0,0,.6);font-style:normal;font-weight:500;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;cursor:pointer;list-style:none;outline:0;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;user-select:none;white-space:nowrap;&:first-of-type{margin-right:.36em;}&:last-of-type{margin-left:.36em;}&:not(:first-of-type):not(:last-of-type){margin:0 .36em;}&:hover{", " color:rgba(0,0,0,.8);}&:active,&:focus{outline:none;}"], globalStyles, function (p) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsInJnYmEiLCJnbG9iYWxTdHlsZXMiLCJkZWZhdWx0VGhlbWUiLCJjc3NfdGFic2Jhc2UiLCJjc3NfdGFic3NsaWRlciIsIlRhYnNMaXN0Iiwib2wiLCJTZWxlY3RvciIsImRpdiIsInAiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwid2lkdGgiLCJsZWZ0IiwiVGFic0NvbnRlbnQiLCJjc3NfdGFiYmFzZSIsInVuZGVybGluZSIsInVuZGVybGluZUFsbCIsInNsaWRlciIsImNzc19zbGlkZXIiLCJUYWJMYWJlbCIsInNwYW4iLCJJY29uV3JhcHBlciIsImNzc190YWJpY29ucyIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYmN1cnJlbnQiLCJ0YWJTdHlsZSIsInR5cGUiLCJjb2xvciIsIkNPTE9SIiwiYmdDb2xvciIsIkJHX0NPTE9SIiwiY3VycmVudFRhYiIsImNzc190YWJyb3VuZGVkIiwiY3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsVUFBckI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHNCQUF6QjtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsY0FBN0I7QUFHQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNQyxZQUFZLEdBQUdKLEdBQUgsWUFFdEJFLFlBRnNCLENBQWxCO0FBS1AsT0FBTyxJQUFNRyxjQUFjLEdBQUdMLEdBQUgsdUpBQXBCO0FBY1A7Ozs7Ozs7QUFNQSxPQUFPLElBQU1NLFFBQVEsR0FBR1AsTUFBTSxDQUFDUSxFQUFWO0FBQUE7QUFBQTtBQUFBLCtIQUFkO0FBYVA7Ozs7Ozs7QUFNQSxPQUFPLElBQU1DLFFBQVEsR0FBR1QsTUFBTSxDQUFD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QUNBLE1BQU1HLE9BQU8sR0FBRzlCLFlBQVksQ0FBQytCLFFBQWIsQ0FBc0JKLElBQXRCLENBQWhCO0FBQ0EsU0FBTzlCLEdBQVAsb0pBQ1UsVUFBQVUsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ3lCLFVBQUYsR0FBZUosS0FBZixHQUF1QixFQUE1QjtBQUFBLEdBRFgsRUFFZSxVQUFBckIsQ0FBQztBQUFBLFdBQUtBLENBQUMsQ0FBQ3lCLFVBQUYsR0FBZUYsT0FBZixHQUF5QixFQUE5QjtBQUFBLEdBRmhCLEVBSVdoQyxJQUFJLENBQUM4QixLQUFELEVBQVEsR0FBUixDQUpmLEVBS2dCRSxPQUxoQixFQVFnQkEsT0FSaEIsRUFTeUJBLE9BVHpCLEVBVXdCQSxPQVZ4QjtBQWFBLENBaEJNO0FBa0JQOzs7Ozs7Ozs7QUFRQSxPQUFPLElBQU1HLGNBQWMsR0FBR3BDLEdBQUgseUJBQXBCO0FBSVA7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTXFDLHVCQUF1QixHQUFHckMsR0FBSCwwSkFBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gXCIuLi91aS9zdHlsZXMvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqVGFiR3JvdXAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIFRhYnNCYXNlXG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsU3R5bGVzIGdsb2JhbCBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJzYmFzZSA9IGNzc2Bcblx0LyoqIEdsb2JhbCBTdHlsZXMgKi9cblx0JHtnbG9iYWxTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGNvbnN0IGNzc190YWJzc2xpZGVyID0gY3NzYFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG5cdGRpdiwgbGkge1xuXHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHRcdC8qKiBkaXNwbGF5OmlubGluZS1ibG9jazsgKi9cblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0XHR6LWluZGV4OjE7XG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO1xuXHR9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYnNMaXN0XG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gY2hpbGQgb3JkZXJlZCBsaXN0XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzTGlzdCA9IHN0eWxlZC5vbGBcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXG5cdG1hcmdpbjogMXJlbSAwO1xuXHRib3JkZXItcmFkaXVzOiAuM3JlbTtcblxuXHRmb250LXdlaWdodDogNDAwO1xuXG5cdGJhY2tncm91bmQ6IG5vbmU7XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFNlbGVjdG9yXG4gKiBAc2VlIFRhYnMgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFicz4gc2xpZGVyIFNlbGVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRjb2xvcjogJHtwID0+ICgocC5wcmltYXJ5IHx8IHAuc2Vjb25kYXJ5KSA/IFwid2hpdGVcIiA6IFwicmdiYSgwLDAsMCwuNilcIil9O1xuXHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Ym94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLC4yKSAhaW1wb3J0YW50O1xuXHRsZWZ0OiAwO1xuXHRib3R0b206IDJweDtcblx0dG9wOiAycHg7XG5cdHotaW5kZXg6IDE7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246MC42cztcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xuXHR3aWR0aDogJHtwID0+IHAud2lkdGggLSAyfXB4O1xuXHRsZWZ0OiAke3AgPT4gcC5sZWZ0fXB4O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBUYWJzQ29udGVudFxuICogQHNlZSBUYWJzIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnM+IGNoaWxkLCBkaXNwbGF5cyBjb250ZW50XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXHRtYXJnaW46IDFyZW0gMDtcblx0cGFkZGluZzogMS4xcmVtO1xuXHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXG5cdGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMzQsMzYsMzgsLjE1KTtcblxuXHQvKiogZml4IGZvciByYW5kb20gTWFyZ2luIFRPRE86IGZpbmQgc291cmNlIG9mIG1hcmdpbiBvbiA8cD4gdGFncyAqL1xuXHQqIHtcblx0XHRtYXJnaW46IGF1dG87XG5cdH1cbmA7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlRhYioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgVGFiQmFzZVxuICogQHNlZSBUYWJzIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYj4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsU3R5bGVzIGdsb2JhbCBzdHlsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGNzc190YWJiYXNlID0gY3NzYFxuXHQvKiogR2xvYmFsIFN0eWxlcyAqL1xuXHQke2dsb2JhbFN0eWxlc307XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHR2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTtcblxuXHRoZWlnaHQ6IDIuNWVtO1xuXHRtYXgtaGVpZ2h0OiAzZW07XG5cdG1pbi1oZWlnaHQ6IDFlbTtcblxuXHRtYXJnaW46MDtcblx0cGFkZGluZzogY2FsYyguMzc1ZW0gLSAxcHgpIDJlbTtcblxuXHRib3JkZXI6IG5vbmU7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuXHRcblx0Y29sb3I6IHJnYmEoMCwwLDAsLjYpO1xuXG5cdGZvbnQtc3R5bGU6bm9ybWFsO1xuXHRmb250LXdlaWdodDogNTAwO1xuXG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0dGV4dC1zaGFkb3c6bm9uZTtcblx0dGV4dC10cmFuc2Zvcm06bm9uZTtcblxuXHRjdXJzb3I6cG9pbnRlcjtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0b3V0bGluZTowO1xuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcyBlYXNlLGJhY2tncm91bmQtY29sb3IgLjFzIGVhc2UsY29sb3IgLjFzIGVhc2UsYm94LXNoYWRvdyAuMXMgZWFzZTtcblx0dXNlci1zZWxlY3Q6bm9uZTtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuXHQmOmZpcnN0LW9mLXR5cGUge1xuXHRcdG1hcmdpbi1yaWdodDogLjM2ZW07XG5cdH1cdFxuXG5cdCY6bGFzdC1vZi10eXBlIHtcblx0XHRtYXJnaW4tbGVmdDogLjM2ZW07XG5cdH1cdFxuXG5cdCY6bm90KDpmaXJzdC1vZi10eXBlKTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuXHRcdG1hcmdpbjogMCAuMzZlbTtcblx0fVx0XG5cdFxuXHQmOmhvdmVyIHtcblx0XHQke3AgPT4gKCFwLnVuZGVybGluZSAmJiAhcC51bmRlcmxpbmVBbGwgJiYgIXAuc2xpZGVyKSAmJiBjc3NgXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgzNCwzNiwzOCwuMTUpO1xuXHRcdFx0Ym9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjEpO1xuXHRcdGB9XG5cdFx0Y29sb3I6IHJnYmEoMCwwLDAsLjgpO1xuICB9XG5cbiAgJjphY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgVGFiTGFiZWxcbiAqIEBzZWUgVGFiIChjb21wb25lbnRzL1RhYnMpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBsYWJlbFxuICovXG5leHBvcnQgY29uc3QgY3NzX3NsaWRlciA9IGNzc2Bcblx0aGVpZ2h0OiAxLjc1ZW07XG5cdG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblxuXHQmOmFjdGl2ZSxcblx0Jjpmb2N1cyB7XG5cdFx0dHJhbnNpdGlvbjogYWxsIC42cyBsaW5lYXI7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cdFxuXHQmOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6IFwiIHwgXCI7XG5cdFx0cG9zaXRpb246IGFic29sdXRlOyBcblx0XHRjb2xvcjogcmdiYSgwLDAsMCwuMSk7XG5cdFx0dG9wOiAxcHg7XG5cdFx0bGVmdDogLTRweDtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zaXRpb246IGFsbCAuNnMgbGluZWFyO1xuXHR9XG5cdFxuXHQmW2N1cnJlbnQ9dHJ1ZV0gKyAmOmJlZm9yZSxcblx0JltjdXJyZW50PXRydWVdOmJlZm9yZSB7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxuXG5cbmA7XG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYkxhYmVsXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gbGFiZWxcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYkxhYmVsID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogc3RhdGljO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW46IGF1dG87XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIEljb25XcmFwcGVyXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWJzLlRhYj4gaWNvbiB3cmFwcGVyXG4gKi9cbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IC0xcHggMCAwIDAgdHJhbnNwYXJlbnQgaW5zZXQ7XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIFRhYkljb25zXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWIpXG4gKiBAZGVzY3JpcHRpb24gPFRhYnMuVGFiPiBJY29uXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiaWNvbnMgPSBjc3NgXG4gIGRpc3BsYXk6ICR7cCA9PiAocC5pY29uTmFtZSA/IFwiaW5saW5lLWZsZXhcIiA6IFwiaW5saW5lLWJsb2NrXCIpfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcInJvdy1yZXZlcnNlXCIgOiBcImF1dG9cIil9O1xuXG4gIC8qKiBjaGFuZ2VzIEljb25XcmFwcGVyICovXG4gICR7SWNvbldyYXBwZXJ9IHtcbiAgICBtYXJnaW46ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwIC40ZW0gMCAwXCIgOiBcIjAgMCAwIC40ZW1cIil9O1xuICB9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSBzaG93SWNvbk9ubHlPbkFjdGl2ZVxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBzaG93cyB0aGUgaWNvbiBvbmx5IHdoZW4gQWN0aXZlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IEljb25XcmFwcGVyIENTUy1pbi1KU1xuICovXG5leHBvcnQgY29uc3QgY3NzX3Nob3dpY29ub25seW9uYWN0aXZlID0gY3NzYFxuXHQmOm5vdCg6aG92ZXIpID4gJHtJY29uV3JhcHBlcn0ge1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRvcGFjaXR5OiAwO1xuXG5cdFx0bWFyZ2luLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcInJpZ2h0XCIgPyBcIi0xNXB4XCIgOiBcImluaXRpYWxcIil9XG5cdFx0bWFyZ2luLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCItMTVweFwiIDogXCJpbml0aWFsXCIpfVxuXHR9XG5cdCY6aG92ZXIgPiAke0ljb25XcmFwcGVyfSB7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdG1hcmdpbi1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJyaWdodFwiID8gXCIwXCIgOiBcImluaGVyaXRcIil9XG5cdFx0bWFyZ2luLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwXCIgOiBcImluaGVyaXRcIil9XG5cdFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuNXMsIG1hcmdpbi1yaWdodCAwLjFzLCBtYXJnaW4tbGVmdCAwLjFzIGxpbmVhcjtcblx0fVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiQ3VycmVudFxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBzaG93cyB0aGUgQWN0aXZlIHRhYlxuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYmN1cnJlbnQgPSBjc3NgXG5cdFx0YmFja2dyb3VuZDogcmdiYSgyMjQsMjI1LDIyNiwxKTtcblx0XHRjb2xvcjogJHtwID0+ICgocC5wcmltYXJ5IHx8IHAuc2Vjb25kYXJ5KSA/IFwid2hpdGVcIiA6IFwicmdiYSgwLDAsMCwuNilcIil9O1xuXHRcdGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMzQsMzYsMzgsLjE1KTtcblx0XHRib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMSk7XG5cdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogOTklO1xuXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcblx0XHRcdFxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdHdpZHRoOiAuNmVtO1xuXHRcdFx0aGVpZ2h0OiAuNmVtO1xuXG5cdFx0XHRtYXJnaW46IC41cHggMCAwO1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjI0LDIyNSwyMjYsMSk7XG5cdFx0XHRib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDIyNCwyMjUsMjI2LDEpO1xuXHRcdFx0XG5cdFx0XHR6LWluZGV4OiAxO1xuXHRcdH1cbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIHRhYlN0eWxlXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IFN0eWxlcyB0aGUgdGFic1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJTdHlsZSA9ICh0eXBlKSA9PiB7XG5cdGNvbnN0IGNvbG9yID0gZGVmYXVsdFRoZW1lLkNPTE9SW3R5cGVdO1xuXHRjb25zdCBiZ0NvbG9yID0gZGVmYXVsdFRoZW1lLkJHX0NPTE9SW3R5cGVdO1xuXHRyZXR1cm4gY3NzYCZ7XG5cdFx0Y29sb3I6ICR7cCA9PiAocC5jdXJyZW50VGFiID8gY29sb3IgOiBcIlwiKX07XG5cdFx0YmFja2dyb3VuZDogJHtwID0+IChwLmN1cnJlbnRUYWIgPyBiZ0NvbG9yIDogXCJcIil9O1xuXHRcdCY6aG92ZXIge1xuXHRcdFx0Y29sb3I6ICR7cmdiYShjb2xvciwgMC44KX07XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2JnQ29sb3J9O1xuXHRcdH1cblx0XHQmOjphZnRlciB7XG5cdFx0XHRiYWNrZ3JvdW5kOiAke2JnQ29sb3J9O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogJHtiZ0NvbG9yfTtcblx0XHRcdGJvcmRlci1yaWdodC1jb2xvcjogJHtiZ0NvbG9yfTtcblx0XHR9XG5cdH1gO1xufTtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgdGFiUm91bmRlZFxuICogQHNlZSBUYWIgKGNvbXBvbmVudHMvVGFicylcbiAqIEBkZXNjcmlwdGlvbiA8VGFiPiBTdHlsZXMgdGhlIHRhYnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgY29uc3QgY3NzX3RhYnJvdW5kZWQgPSBjc3NgXG5cdGJvcmRlci1yYWRpdXM6IDNyZW07XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSB0YWJSb3VuZGVkXG4gKiBAc2VlIFRhYiAoY29tcG9uZW50cy9UYWJzKVxuICogQGRlc2NyaXB0aW9uIDxUYWI+IFN0eWxlcyB0aGUgdGFic1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfdGFiY3VycmVudHVuZGVybGluZSA9IGNzc2Bcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG5cblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogbm9uZTtcblx0XHRib3gtc2hhZG93OiBub25lO1xuXHRcdGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcblx0XHRib3JkZXI6IG5vbmU7XG4gIH1cbmA7XG4iXX0=