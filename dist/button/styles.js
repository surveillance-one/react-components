import styled, { css } from "styled-components";
import { rgba, darken } from "polished";
import globalStyles from "../ui/styles/globals";
import { defaultTheme } from "../ui/themes";
/**
 * Styled components for Button.
 */

/**
 * Styled-Component
 * @name btnLabel
 * @see Button (components/Button)
 * @description child of <button> that holds the label position
 *
 * @param {boolean} squared p => p.squared
 */

export var BtnLabel = styled.span.withConfig({
  displayName: "styles__BtnLabel",
  componentId: "ht1bzm-0"
})(["display:block;position:static;"]);
/**
 * Styled-Component
 * @name iconWrapper
 * @see Button (components/Button)
 * @description child of <button> that holds the the icons
 *
 * @param {string} iconPosition p => p.iconPosition
 * @param {boolean} squared p => p.squared
 * @param {boolean} circle p => p.circle
 */

export var IconWrapper = styled.span.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "ht1bzm-1"
})(["display:inline-flex;text-align:center;background-color:rgba(0,0,0,.1);box-shadow:-1px 0 0 0 transparent inset;padding:.75em;"]);
/**
 * Styled-Component CSS
 * @name ButtonBase
 * @see Button (components/Button)
 *
 * @description <button> base styles
 */

export var css_buttonbase = css(["", ";padding:calc(.375em - 1px) .75em;&,&:link,&:visited{cursor:pointer;position:relative;min-height:1em;height:2.5em;max-height:3em;outline:0;border:none;border:solid rgba(0,0,0,.1) 1px;vertical-align:baseline;margin:0;text-transform:none;text-shadow:none;font-weight:500;font-style:normal;text-align:center;text-decoration:none;user-select:none;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;white-space:nowrap;overflow:hidden;color:", ";box-shadow:", ";border-radius:.3rem;background-color:", ";}&:hover{color:", ";border-color:", "}&:active,&:focus{outline:none;}&::after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;transition:all .4s;}&:disabled{cursor:not-allowed;transition:initial;transform:initial;}"], globalStyles, function (p) {
  return p.theme.color || "black";
}, function (p) {
  return p.theme["default-box-shadow"] || "0 1px 2px 0 rgba(34,36,38,.15)";
}, function (p) {
  return p.theme["default-bg-lightgray"] || "lightgray";
}, function (p) {
  return p.theme["hover-color"] || "lightgray";
}, darken("0.2", "#dbdbdb"));
export var css_buttonanimations = css(["&:active{transform:translateY(1px);}"]);
/**
 * Styled-Component CSS
 * @name buttonStyle
 * @see Button (components/Button)
 * @description <Button> Styles the Button
 *
 * @param {string} type
 */

export var buttonStyle = function buttonStyle(type) {
  var color = defaultTheme.COLOR[type];
  var bgColor = defaultTheme.BG_COLOR[type];
  return css(["&{background:", ";color:", ";border:solid ", " 1px;&:hover{color:", ";border-color:", "}", "{background-color:", ";}}"], bgColor, rgba(color, 0.9), darken("0.05", bgColor), color, darken("0.1", bgColor), IconWrapper, type === "secondary" ? "rgba(165,165,165,.1)" : "");
};
export var css_buttonrounded = css(["&{border-radius:3rem;padding:calc(.375em - 1px) 1em;padding-right:", ";padding-left:", ";}"], function (p) {
  return p.iconName && (p.iconPosition === "left" ? "1em !important" : "0 !important");
}, function (p) {
  return p.iconName && (p.iconPosition === "left" ? "0 !important" : "1em !important");
});
export var css_buttonsquared = css(["&{justify-content:center;padding:.75em !important;display:inline-flex;margin:0;", "{background:", ";padding:", ";margin:0;display:block;}}"], IconWrapper, function (p) {
  return p.squared || p.circle ? "none" : "";
}, function (p) {
  return p.squared || p.circle ? "0" : ".75";
});
export var css_buttoncircle = css(["", ";", ";"], css_buttonrounded, css_buttonsquared);
export var css_buttonicons = css(["align-items:center;justify-content:center;display:", ";flex-flow:", ";padding-right:", ";padding-left:", ";", "{border-radius:", ";margin:", ";}"], function (p) {
  return p.iconName ? "inline-flex" : "inline-block";
}, function (p) {
  return p.iconPosition === "left" ? "row-reverse" : "auto";
}, function (p) {
  return p.iconPosition === "left" ? ".75em" : "0";
}, function (p) {
  return p.iconPosition === "left" ? "0" : ".75em";
}, IconWrapper, function (p) {
  return p.iconPosition === "left" ? ".3rem 0 0 .3rem" : "0 .3rem .3rem 0";
}, function (p) {
  return p.iconPosition === "left" ? "0 .75em 0 0" : "0 0 0 .75em";
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYnV0dG9uL3N0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwicmdiYSIsImRhcmtlbiIsImdsb2JhbFN0eWxlcyIsImRlZmF1bHRUaGVtZSIsIkJ0bkxhYmVsIiwic3BhbiIsIkljb25XcmFwcGVyIiwiY3NzX2J1dHRvbmJhc2UiLCJwIiwidGhlbWUiLCJjb2xvciIsImNzc19idXR0b25hbmltYXRpb25zIiwiYnV0dG9uU3R5bGUiLCJ0eXBlIiwiQ09MT1IiLCJiZ0NvbG9yIiwiQkdfQ09MT1IiLCJjc3NfYnV0dG9ucm91bmRlZCIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX2J1dHRvbnNxdWFyZWQiLCJzcXVhcmVkIiwiY2lyY2xlIiwiY3NzX2J1dHRvbmNpcmNsZSIsImNzc19idXR0b25pY29ucyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxJQUFpQkMsR0FBakIsUUFBNEIsbUJBQTVCO0FBQ0EsU0FBU0MsSUFBVCxFQUFlQyxNQUFmLFFBQTZCLFVBQTdCO0FBRUEsT0FBT0MsWUFBUCxNQUF5QixzQkFBekI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGNBQTdCO0FBRUE7Ozs7QUFJQTs7Ozs7Ozs7O0FBUUEsT0FBTyxJQUFNQyxRQUFRLEdBQUdOLE1BQU0sQ0FBQ08sSUFBVjtBQUFBO0FBQUE7QUFBQSxzQ0FBZDtBQUtQOzs7Ozs7Ozs7OztBQVVBLE9BQU8sSUFBTUMsV0FBVyxHQUFHUixNQUFNLENBQUNPLElBQVY7QUFBQTtBQUFBO0FBQUEsb0lBQWpCO0FBU1A7Ozs7Ozs7O0FBT0EsT0FBTyxJQUFNRSxjQUFjLEdBQUdSLEdBQUgsZzBCQUV2QkcsWUFGdUIsRUE4QmQsVUFBQU0sQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLElBQWlCLE9BQXJCO0FBQUEsQ0E5QmEsRUErQlQsVUFBQUYsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsS0FBRixDQUFRLG9CQUFS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LE1BQW5CLEdBQTRCLGFBQTVCLEdBQTRDLGFBQWpEO0FBQUEsQ0FYYSxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyByZ2JhLCBkYXJrZW4gfSBmcm9tIFwicG9saXNoZWRcIjtcblxuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vdWkvc3R5bGVzL2dsb2JhbHNcIjtcbmltcG9ydCB7IGRlZmF1bHRUaGVtZSB9IGZyb20gXCIuLi91aS90aGVtZXNcIjtcblxuLyoqXG4gKiBTdHlsZWQgY29tcG9uZW50cyBmb3IgQnV0dG9uLlxuICovXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgYnRuTGFiZWxcbiAqIEBzZWUgQnV0dG9uIChjb21wb25lbnRzL0J1dHRvbilcbiAqIEBkZXNjcmlwdGlvbiBjaGlsZCBvZiA8YnV0dG9uPiB0aGF0IGhvbGRzIHRoZSBsYWJlbCBwb3NpdGlvblxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3F1YXJlZCBwID0+IHAuc3F1YXJlZFxuICovXG5leHBvcnQgY29uc3QgQnRuTGFiZWwgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIGljb25XcmFwcGVyXG4gKiBAc2VlIEJ1dHRvbiAoY29tcG9uZW50cy9CdXR0b24pXG4gKiBAZGVzY3JpcHRpb24gY2hpbGQgb2YgPGJ1dHRvbj4gdGhhdCBob2xkcyB0aGUgdGhlIGljb25zXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGljb25Qb3NpdGlvbiBwID0+IHAuaWNvblBvc2l0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNxdWFyZWQgcCA9PiBwLnNxdWFyZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2lyY2xlIHAgPT4gcC5jaXJjbGVcbiAqL1xuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjEpO1xuICBib3gtc2hhZG93OiAtMXB4IDAgMCAwIHRyYW5zcGFyZW50IGluc2V0O1xuICBwYWRkaW5nOiAuNzVlbTtcbiAgXG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSBCdXR0b25CYXNlXG4gKiBAc2VlIEJ1dHRvbiAoY29tcG9uZW50cy9CdXR0b24pXG4gKlxuICogQGRlc2NyaXB0aW9uIDxidXR0b24+IGJhc2Ugc3R5bGVzXG4gKi9cbmV4cG9ydCBjb25zdCBjc3NfYnV0dG9uYmFzZSA9IGNzc2BcbiAgLyoqIEdsb2JhbCBTdHlsZXMgKi9cbiAgJHtnbG9iYWxTdHlsZXN9O1xuXG4gIC8qKiBQZXItY29tcG9uZW5ldCBwYXJlbnQgc3R5bGVzICovXG4gIHBhZGRpbmc6IGNhbGMoLjM3NWVtIC0gMXB4KSAuNzVlbTtcbiAgJixcbiAgJjpsaW5rLFxuICAmOnZpc2l0ZWQge1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OjFlbTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIG1heC1oZWlnaHQ6IDNlbTtcbiAgICBvdXRsaW5lOjA7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCByZ2JhKDAsMCwwLC4xKSAxcHg7XG4gICAgdmVydGljYWwtYWxpZ246YmFzZWxpbmU7XG4gICAgbWFyZ2luOjA7XG4gICAgdGV4dC10cmFuc2Zvcm06bm9uZTtcbiAgICB0ZXh0LXNoYWRvdzpub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTpub3JtYWw7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xcyBlYXNlLGJhY2tncm91bmQtY29sb3IgLjFzIGVhc2UsY29sb3IgLjFzIGVhc2UsYm94LXNoYWRvdyAuMXMgZWFzZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBjb2xvcjogJHtwID0+IHAudGhlbWUuY29sb3IgfHwgXCJibGFja1wifTtcbiAgICBib3gtc2hhZG93OiAke3AgPT4gcC50aGVtZVtcImRlZmF1bHQtYm94LXNoYWRvd1wiXSB8fCBcIjAgMXB4IDJweCAwIHJnYmEoMzQsMzYsMzgsLjE1KVwifTtcbiAgICBib3JkZXItcmFkaXVzOiAuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3AgPT4gcC50aGVtZVtcImRlZmF1bHQtYmctbGlnaHRncmF5XCJdIHx8IFwibGlnaHRncmF5XCJ9O1xuICB9XG4gIC8qKlxuICAqIFBzZXVkbyBDbGFzc2VzXG4gICogSE9WRVIgLSBBQ1RJVkUgLSBGT0NVUyAtIEFGVEVSIC0gRElTQUJMRURcbiAgKi8gXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAke3AgPT4gcC50aGVtZVtcImhvdmVyLWNvbG9yXCJdIHx8IFwibGlnaHRncmF5XCJ9O1xuICAgIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oXCIwLjJcIiwgXCIjZGJkYmRiXCIpfVxuICB9XG5cbiAgJjphY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB0cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcblxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgY3NzX2J1dHRvbmFuaW1hdGlvbnMgPSBjc3NgXG4gICY6YWN0aXZle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICB9XG5gO1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnQgQ1NTXG4gKiBAbmFtZSBidXR0b25TdHlsZVxuICogQHNlZSBCdXR0b24gKGNvbXBvbmVudHMvQnV0dG9uKVxuICogQGRlc2NyaXB0aW9uIDxCdXR0b24+IFN0eWxlcyB0aGUgQnV0dG9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGJ1dHRvblN0eWxlID0gKHR5cGUpID0+IHtcblx0Y29uc3QgY29sb3IgPSBkZWZhdWx0VGhlbWUuQ09MT1JbdHlwZV07XG5cdGNvbnN0IGJnQ29sb3IgPSBkZWZhdWx0VGhlbWUuQkdfQ09MT1JbdHlwZV07XG5cdHJldHVybiBjc3NgJntcblx0XHRiYWNrZ3JvdW5kOiAke2JnQ29sb3J9O1xuXHRcdGNvbG9yOiAke3JnYmEoY29sb3IsIDAuOSl9O1xuICAgIGJvcmRlcjogc29saWQgJHtkYXJrZW4oXCIwLjA1XCIsIGJnQ29sb3IpfSAxcHg7XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJHtjb2xvcn07XG4gICAgICBib3JkZXItY29sb3I6ICR7ZGFya2VuKFwiMC4xXCIsIGJnQ29sb3IpfVxuXHRcdH1cbiAgICAke0ljb25XcmFwcGVyfSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3R5cGUgPT09IFwic2Vjb25kYXJ5XCIgPyBcInJnYmEoMTY1LDE2NSwxNjUsLjEpXCIgOiBcIlwifTtcbiAgICB9XG5cdH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IGNzc19idXR0b25yb3VuZGVkID0gY3NzYCZ7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIHBhZGRpbmc6IGNhbGMoLjM3NWVtIC0gMXB4KSAxZW07XG4gIHBhZGRpbmctcmlnaHQ6ICR7cCA9PiAocC5pY29uTmFtZSAmJiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIxZW0gIWltcG9ydGFudFwiIDogXCIwICFpbXBvcnRhbnRcIikpfTtcbiAgcGFkZGluZy1sZWZ0OiAke3AgPT4gKHAuaWNvbk5hbWUgJiYgKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMCAhaW1wb3J0YW50XCIgOiBcIjFlbSAhaW1wb3J0YW50XCIpKX07XG59YDtcblxuZXhwb3J0IGNvbnN0IGNzc19idXR0b25zcXVhcmVkID0gY3NzYCZ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAuNzVlbSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiAwO1xuICBcbiAgJHtJY29uV3JhcHBlcn0ge1xuICAgIGJhY2tncm91bmQ6ICR7cCA9PiAoKHAuc3F1YXJlZCB8fCBwLmNpcmNsZSkgPyBcIm5vbmVcIiA6IFwiXCIpfTtcbiAgICBwYWRkaW5nOiAke3AgPT4gKChwLnNxdWFyZWQgfHwgcC5jaXJjbGUpID8gXCIwXCIgOiBcIi43NVwiKX07XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59YDtcblxuZXhwb3J0IGNvbnN0IGNzc19idXR0b25jaXJjbGUgPSBjc3NgXG4gICR7Y3NzX2J1dHRvbnJvdW5kZWR9O1xuICAke2Nzc19idXR0b25zcXVhcmVkfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBjc3NfYnV0dG9uaWNvbnMgPSBjc3NgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiAke3AgPT4gKHAuaWNvbk5hbWUgPyBcImlubGluZS1mbGV4XCIgOiBcImlubGluZS1ibG9ja1wiKX07XG4gIGZsZXgtZmxvdzogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcInJvdy1yZXZlcnNlXCIgOiBcImF1dG9cIil9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLjc1ZW1cIiA6IFwiMFwiKX07XG4gIHBhZGRpbmctbGVmdDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjBcIiA6IFwiLjc1ZW1cIil9O1xuXG4gIC8qKiBjaGFuZ2VzIGljb25XcmFwcGVyICovXG4gICR7SWNvbldyYXBwZXJ9IHtcbiAgICBib3JkZXItcmFkaXVzOiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLjNyZW0gMCAwIC4zcmVtXCIgOiBcIjAgLjNyZW0gLjNyZW0gMFwiKX07XG4gICAgbWFyZ2luOiAke3AgPT4gKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMCAuNzVlbSAwIDBcIiA6IFwiMCAwIDAgLjc1ZW1cIil9O1xuICB9XG5gO1xuIl19