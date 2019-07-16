import styled, { css } from "styled-components";
import { rgba } from "polished";
import globalStyles from "ui/styles/globals";
import { defaultTheme } from "ui/themes";
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

export var css_buttonbase = css(["", ";padding:calc(.375em - 1px) .75em;&,&:link,&:visited{cursor:pointer;position:relative;min-height:1em;height:2.5em;max-height:3em;outline:0;border:none;vertical-align:baseline;margin:0;text-transform:none;text-shadow:none;font-weight:500;font-style:normal;text-align:center;text-decoration:none;user-select:none;transition:opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease;white-space:nowrap;overflow:hidden;color:", ";box-shadow:", ";border-radius:.3rem;background-color:", ";}&:hover{color:", ";}&:active,&:focus{outline:none;}&::after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;transition:all .4s;}&:disabled{cursor:not-allowed;transition:initial;transform:initial;}&:active{transform:translateY(2px);}"], globalStyles, function (p) {
  return p.theme.color || "black";
}, function (p) {
  return p.theme["default-box-shadow"] || "0 1px 2px 0 rgba(34,36,38,.15)";
}, function (p) {
  return p.theme["default-bg-lightgray"] || "lightgray";
}, function (p) {
  return p.theme["hover-color"] || "lightgray";
});
export var css_buttonanimations = css(["&:active{transform:translateY(2px);}"]);
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
  return css(["&{background:", ";color:", ";&:hover{color:", ";}", "{background-color:", ";}}"], bgColor, color, rgba(color, 0.8), IconWrapper, type === "secondary" ? "rgba(165,165,165,.1)" : "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYnV0dG9uL3N0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwicmdiYSIsImdsb2JhbFN0eWxlcyIsImRlZmF1bHRUaGVtZSIsIkJ0bkxhYmVsIiwic3BhbiIsIkljb25XcmFwcGVyIiwiY3NzX2J1dHRvbmJhc2UiLCJwIiwidGhlbWUiLCJjb2xvciIsImNzc19idXR0b25hbmltYXRpb25zIiwiYnV0dG9uU3R5bGUiLCJ0eXBlIiwiQ09MT1IiLCJiZ0NvbG9yIiwiQkdfQ09MT1IiLCJjc3NfYnV0dG9ucm91bmRlZCIsImljb25OYW1lIiwiaWNvblBvc2l0aW9uIiwiY3NzX2J1dHRvbnNxdWFyZWQiLCJzcXVhcmVkIiwiY2lyY2xlIiwiY3NzX2J1dHRvbmNpcmNsZSIsImNzc19idXR0b25pY29ucyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxJQUFpQkMsR0FBakIsUUFBNEIsbUJBQTVCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixVQUFyQjtBQUVBLE9BQU9DLFlBQVAsTUFBeUIsbUJBQXpCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixXQUE3QjtBQUVBOzs7O0FBSUE7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTUMsUUFBUSxHQUFHTCxNQUFNLENBQUNNLElBQVY7QUFBQTtBQUFBO0FBQUEsc0NBQWQ7QUFLUDs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLElBQU1DLFdBQVcsR0FBR1AsTUFBTSxDQUFDTSxJQUFWO0FBQUE7QUFBQTtBQUFBLG9JQUFqQjtBQVNQOzs7Ozs7OztBQU9BLE9BQU8sSUFBTUUsY0FBYyxHQUFHUCxHQUFILG16QkFFdkJFLFlBRnVCLEVBOEJkLFVBQUFNLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixJQUFpQixPQUFyQjtBQUFBLENBOUJhLEVBK0JULFVBQUFGLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLEtBQUYsQ0FBUSxvQkFBUixLQUFpQyxnQ0FBckM7QUFBQSxDQS9CUSxFQWlDSCxVQUFBRCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxLQUFGLENBQVEsc0JBQVIsS0FBbUMsV0FBdkM7QUFBQSxDQWpDRSxFQXdDYixVQUFBRCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxLQUFGLENBQVEsYUFBUixLQUEwQixXQUE5QjtBQUFBLENBeENZLENBQXBCO0FBeUVQLE9BQU8sSUFBTUUsb0JBQW9CLEdBQUdYLEdBQUgsMENBQTFCO0FBTVA7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTVksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BDLE1BQU1ILEtBQUssR0FBR1AsWUFBWSxDQUFDVyxLQUFiLENBQW1CRCxJQUFuQixDQUFkO0FBQ0EsTUFBTUUsT0FBTyxHQUFHWixZQUFZLENBQUNhLFFBQWIsQ0FBc0JILElBQXRCLENBQWhCO0FBQ0EsU0FBT2IsR0FBUCxxRkFDZWUsT0FEZixFQUVVTCxLQUZWLEVBSVdULElBQUksQ0FBQ1MsS0FBRCxFQUFRLEdBQVIsQ0FKZixFQU1LSixXQU5MLEVBT3lCTyxJQUFJLEtBQUssV0FBVCxHQUF1QixzQkFBdkIsR0FBZ0QsRUFQekU7QUFVQSxDQWJNO0FBZVAsT0FBTyxJQUFNSSxpQkFBaUIsR0FBR2pCLEdBQUgsaUdBR1gsVUFBQVEsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ1UsUUFBRixLQUFlVixDQUFDLENBQUNXLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsZ0JBQTVCLEdBQStDLGNBQTlELENBQUw7QUFBQSxDQUhVLEVBSVosVUFBQVgsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ1UsUUFBRixLQUFlVixDQUFDLENBQUNXLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsY0FBNUIsR0FBNkMsZ0JBQTVELENBQUw7QUFBQSxDQUpXLENBQXZCO0FBT1AsT0FBTyxJQUFNQyxpQkFBaUIsR0FBR3BCLEdBQUgsaUpBTTFCTSxXQU4wQixFQU9aLFVBQUFFLENBQUM7QUFBQSxTQUFNQSxDQUFDLENBQUNhLE9BQUYsSUFBYWIsQ0FBQyxDQUFDYyxNQUFoQixHQUEwQixNQUExQixHQUFtQyxFQUF4QztBQUFBLENBUFcsRUFRZixVQUFBZCxDQUFDO0FBQUEsU0FBTUEsQ0FBQyxDQUFDYSxPQUFGLElBQWFiLENBQUMsQ0FBQ2MsTUFBaEIsR0FBMEIsR0FBMUIsR0FBZ0MsS0FBckM7QUFBQSxDQVJjLENBQXZCO0FBY1AsT0FBTyxJQUFNQyxnQkFBZ0IsR0FBR3ZCLEdBQUgsaUJBQ3pCaUIsaUJBRHlCLEVBRXpCRyxpQkFGeUIsQ0FBdEI7QUFLUCxPQUFPLElBQU1JLGVBQWUsR0FBR3hCLEdBQUgsdUpBR2YsVUFBQVEsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ1UsUUFBRixHQUFhLGFBQWIsR0FBNkIsY0FBbEM7QUFBQSxDQUhjLEVBSWIsVUFBQVYsQ0FBQztBQUFBLFNBQUtBLENBQUMsQ0FBQ1csWUFBRixLQUFtQixNQUFuQixHQUE0QixhQUE1QixHQUE0QyxNQUFqRDtBQUFBLENBSlksRUFLVCxVQUFBWCxDQUFDO0FBQUEsU0FBS0EsQ0FBQyxDQUFDVyxZQUFGLEtBQW1CLE1BQW5CLEdBQTRCLE9BQTVCLEdBQXNDLEdBQTNDO0FBQUEsQ0FMUSxFQU1WLFVBQUFYLENBQUM7QUFBQSxTQUFLQSxDQUFDLENBQUNXLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsR0FBNUIsR0FBa0MsT0FBdkM7QUFBQSxDQU5TLEVBU3hCYixXQVR3QixFQVVQLFVBQUFFLENBQUM7QUFBQSxTQUFLQSxDQUFDLENBQUNXLFlBQUYsS0FBbUIsTUFBbkIsR0FBNEIsaUJBQTVCLEdBQWdELGlCQUFyRDtBQUFBLENBVk0sRUFXZCxVQUFBWCxDQUFDO0FBQUEsU0FBS0EsQ0FBQyxDQUFDVyxZQUFGLEtBQW1CLE1BQW5CLEdBQTRCLGFBQTVCLEdBQTRDLGFBQWpEO0FBQUEsQ0FYYSxDQUFyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XG5cbmltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcInVpL3N0eWxlcy9nbG9iYWxzXCI7XG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwidWkvdGhlbWVzXCI7XG5cbi8qKlxuICogU3R5bGVkIGNvbXBvbmVudHMgZm9yIEJ1dHRvbi5cbiAqL1xuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIGJ0bkxhYmVsXG4gKiBAc2VlIEJ1dHRvbiAoY29tcG9uZW50cy9CdXR0b24pXG4gKiBAZGVzY3JpcHRpb24gY2hpbGQgb2YgPGJ1dHRvbj4gdGhhdCBob2xkcyB0aGUgbGFiZWwgcG9zaXRpb25cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNxdWFyZWQgcCA9PiBwLnNxdWFyZWRcbiAqL1xuZXhwb3J0IGNvbnN0IEJ0bkxhYmVsID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogc3RhdGljO1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBpY29uV3JhcHBlclxuICogQHNlZSBCdXR0b24gKGNvbXBvbmVudHMvQnV0dG9uKVxuICogQGRlc2NyaXB0aW9uIGNoaWxkIG9mIDxidXR0b24+IHRoYXQgaG9sZHMgdGhlIHRoZSBpY29uc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpY29uUG9zaXRpb24gcCA9PiBwLmljb25Qb3NpdGlvblxuICogQHBhcmFtIHtib29sZWFufSBzcXVhcmVkIHAgPT4gcC5zcXVhcmVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNpcmNsZSBwID0+IHAuY2lyY2xlXG4gKi9cbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4xKTtcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgMCB0cmFuc3BhcmVudCBpbnNldDtcbiAgcGFkZGluZzogLjc1ZW07XG4gIFxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgQnV0dG9uQmFzZVxuICogQHNlZSBCdXR0b24gKGNvbXBvbmVudHMvQnV0dG9uKVxuICpcbiAqIEBkZXNjcmlwdGlvbiA8YnV0dG9uPiBiYXNlIHN0eWxlc1xuICovXG5leHBvcnQgY29uc3QgY3NzX2J1dHRvbmJhc2UgPSBjc3NgXG4gIC8qKiBHbG9iYWwgU3R5bGVzICovXG4gICR7Z2xvYmFsU3R5bGVzfTtcblxuICAvKiogUGVyLWNvbXBvbmVuZXQgcGFyZW50IHN0eWxlcyAqL1xuICBwYWRkaW5nOiBjYWxjKC4zNzVlbSAtIDFweCkgLjc1ZW07XG4gICYsXG4gICY6bGluayxcbiAgJjp2aXNpdGVkIHtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDoxZW07XG4gICAgXG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICBtYXgtaGVpZ2h0OiAzZW07XG4gICAgb3V0bGluZTowO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO1xuICAgIG1hcmdpbjowO1xuICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XG4gICAgdGV4dC1zaGFkb3c6bm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIHVzZXItc2VsZWN0Om5vbmU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMXMgZWFzZSxiYWNrZ3JvdW5kLWNvbG9yIC4xcyBlYXNlLGNvbG9yIC4xcyBlYXNlLGJveC1zaGFkb3cgLjFzIGVhc2U7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgY29sb3I6ICR7cCA9PiBwLnRoZW1lLmNvbG9yIHx8IFwiYmxhY2tcIn07XG4gICAgYm94LXNoYWRvdzogJHtwID0+IHAudGhlbWVbXCJkZWZhdWx0LWJveC1zaGFkb3dcIl0gfHwgXCIwIDFweCAycHggMCByZ2JhKDM0LDM2LDM4LC4xNSlcIn07XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwID0+IHAudGhlbWVbXCJkZWZhdWx0LWJnLWxpZ2h0Z3JheVwiXSB8fCBcImxpZ2h0Z3JheVwifTtcbiAgfVxuICAvKipcbiAgKiBQc2V1ZG8gQ2xhc3Nlc1xuICAqIEhPVkVSIC0gQUNUSVZFIC0gRk9DVVMgLSBBRlRFUiAtIERJU0FCTEVEXG4gICovIFxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogICR7cCA9PiBwLnRoZW1lW1wiaG92ZXItY29sb3JcIl0gfHwgXCJsaWdodGdyYXlcIn07XG4gIH1cblxuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIHRyYW5zaXRpb246IGluaXRpYWw7XG4gICAgdHJhbnNmb3JtOiBpbml0aWFsO1xuXG4gIH1cblxuICAmOmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGNzc19idXR0b25hbmltYXRpb25zID0gY3NzYFxuICAmOmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbiAgfVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50IENTU1xuICogQG5hbWUgYnV0dG9uU3R5bGVcbiAqIEBzZWUgQnV0dG9uIChjb21wb25lbnRzL0J1dHRvbilcbiAqIEBkZXNjcmlwdGlvbiA8QnV0dG9uPiBTdHlsZXMgdGhlIEJ1dHRvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBidXR0b25TdHlsZSA9ICh0eXBlKSA9PiB7XG5cdGNvbnN0IGNvbG9yID0gZGVmYXVsdFRoZW1lLkNPTE9SW3R5cGVdO1xuXHRjb25zdCBiZ0NvbG9yID0gZGVmYXVsdFRoZW1lLkJHX0NPTE9SW3R5cGVdO1xuXHRyZXR1cm4gY3NzYCZ7XG5cdFx0YmFja2dyb3VuZDogJHtiZ0NvbG9yfTtcblx0XHRjb2xvcjogJHtjb2xvcn07XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHRjb2xvcjogJHtyZ2JhKGNvbG9yLCAwLjgpfTtcblx0XHR9XG4gICAgJHtJY29uV3JhcHBlcn0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0eXBlID09PSBcInNlY29uZGFyeVwiID8gXCJyZ2JhKDE2NSwxNjUsMTY1LC4xKVwiIDogXCJcIn07XG4gICAgfVxuXHR9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBjc3NfYnV0dG9ucm91bmRlZCA9IGNzc2Ame1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBwYWRkaW5nOiBjYWxjKC4zNzVlbSAtIDFweCkgMWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAke3AgPT4gKHAuaWNvbk5hbWUgJiYgKHAuaWNvblBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiMWVtICFpbXBvcnRhbnRcIiA6IFwiMCAhaW1wb3J0YW50XCIpKX07XG4gIHBhZGRpbmctbGVmdDogJHtwID0+IChwLmljb25OYW1lICYmIChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjAgIWltcG9ydGFudFwiIDogXCIxZW0gIWltcG9ydGFudFwiKSl9O1xufWA7XG5cbmV4cG9ydCBjb25zdCBjc3NfYnV0dG9uc3F1YXJlZCA9IGNzc2Ame1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogLjc1ZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbjogMDtcbiAgXG4gICR7SWNvbldyYXBwZXJ9IHtcbiAgICBiYWNrZ3JvdW5kOiAke3AgPT4gKChwLnNxdWFyZWQgfHwgcC5jaXJjbGUpID8gXCJub25lXCIgOiBcIlwiKX07XG4gICAgcGFkZGluZzogJHtwID0+ICgocC5zcXVhcmVkIHx8IHAuY2lyY2xlKSA/IFwiMFwiIDogXCIuNzVcIil9O1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufWA7XG5cbmV4cG9ydCBjb25zdCBjc3NfYnV0dG9uY2lyY2xlID0gY3NzYFxuICAke2Nzc19idXR0b25yb3VuZGVkfTtcbiAgJHtjc3NfYnV0dG9uc3F1YXJlZH07XG5gO1xuXG5leHBvcnQgY29uc3QgY3NzX2J1dHRvbmljb25zID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogJHtwID0+IChwLmljb25OYW1lID8gXCJpbmxpbmUtZmxleFwiIDogXCJpbmxpbmUtYmxvY2tcIil9O1xuICBmbGV4LWZsb3c6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCJyb3ctcmV2ZXJzZVwiIDogXCJhdXRvXCIpfTtcbiAgcGFkZGluZy1yaWdodDogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi43NWVtXCIgOiBcIjBcIil9O1xuICBwYWRkaW5nLWxlZnQ6ICR7cCA9PiAocC5pY29uUG9zaXRpb24gPT09IFwibGVmdFwiID8gXCIwXCIgOiBcIi43NWVtXCIpfTtcblxuICAvKiogY2hhbmdlcyBpY29uV3JhcHBlciAqL1xuICAke0ljb25XcmFwcGVyfSB7XG4gICAgYm9yZGVyLXJhZGl1czogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi4zcmVtIDAgMCAuM3JlbVwiIDogXCIwIC4zcmVtIC4zcmVtIDBcIil9O1xuICAgIG1hcmdpbjogJHtwID0+IChwLmljb25Qb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIjAgLjc1ZW0gMCAwXCIgOiBcIjAgMCAwIC43NWVtXCIpfTtcbiAgfVxuYDtcbiJdfQ==