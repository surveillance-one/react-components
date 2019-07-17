import styled, { css } from "styled-components";
import globalStyles from "../ui/styles/globals";
/**
 * Styled components for Card
 */

/**
 * Styled-Component CSS
 * @name CardBase
 * @see Card (components/Card)
 * @description <Card> base styles
 *
 * @param {string} width p => p.width
 */

export var css_cardbase = css(["", ";background-color:", ";color:", ";box-shadow:", ";border-radius:.3rem;margin:1rem 0;position:relative;width:", ";"], globalStyles, function (props) {
  return "whitesmoke";
}, function (props) {
  return props.theme.color || "black";
}, function (props) {
  return props.theme["default-box-shadow"] || "black";
}, function (p) {
  return "".concat(p.width, "em") || "20em";
});
/**
 * Styled-Component
 * @name CardHeader
 * @see Card (components/Card)
 * @description child of <Card> wrapper for title
 *
 * @param {string} title p => p.title
 * @param {string} mini p => p.mini
 */

export var CardHeader = styled.div.withConfig({
  displayName: "styles__CardHeader",
  componentId: "cidbpf-0"
})(["position:relative;padding:", ";padding-bottom:", ";"], function (p) {
  return p.mini && (!p.title || !p.meta) ? "0 !important" : ".75em";
}, function (p) {
  return p.title ? "0 !important" : "";
});
/**
 * Styled-Component
 * @name CardTitle
 * @see Card (components/Card)
 * @description child of <Card> that holds the header title
 */

export var CardTitle = styled.h1.withConfig({
  displayName: "styles__CardTitle",
  componentId: "cidbpf-1"
})(["font-size:1.3em;font-weight:700;margin:0;color:rgba(0,0,0,.85);"]);
/**
 * Styled-Component
 * @name CardMeta
 * @see Card (components/Card)
 * @description child of <Card> that holds the header content
 */

export var CardMeta = styled.div.withConfig({
  displayName: "styles__CardMeta",
  componentId: "cidbpf-2"
})(["font-weight:400;color:rgba(0,0,0,.4);margin:0 !important;"]);
/**
 * Styled-Component
 * @name CardMini
 * @see Card (components/Card)
 * @description child of <Card> that holds the mini icon-picture
 *
 * @param {url} mini p => p.mini
 */

export var CardMini = styled.img.attrs(function (p) {
  return {
    src: p.mini
  };
}).withConfig({
  displayName: "styles__CardMini",
  componentId: "cidbpf-3"
})(["width:3.5em;top:.75em;right:.75em;position:", ";float:", ";margin:", ";"], function (p) {
  return !p.title || !p.meta ? "static" : "absolute";
}, function (p) {
  return !p.title || !p.meta ? "right" : "auto";
}, function (p) {
  return !p.title || !p.meta ? "1em" : "initial";
});
/**
 * Styled-Component
 * @name CardContent
 * @see Card (components/Card)
 * @description child of <Card> that holds the main content
 *
 * @param {string} title p => p.title
 * @param {string} meta p => p.meta
 */

export var CardContent = styled.div.withConfig({
  displayName: "styles__CardContent",
  componentId: "cidbpf-4"
})(["padding:.75em;font-weight:400;color:rgba(0,0,0,.68);padding-top:", ""], function (p) {
  return p.title || p.meta ? "0 !important" : "inital";
});
/**
 * Styled-Component
 * @name CardImage and
 * @name CardImageWrapper
 * @see Card (components/Card)
 * @description child of <Card> that holds the main header img
 *
 * @param {url} img p => p.img
 */

export var CardImage = styled.img.attrs(function (p) {
  return {
    src: p.img
  };
}).withConfig({
  displayName: "styles__CardImage",
  componentId: "cidbpf-5"
})(["display:block;width:100%;height:auto;border-radius:inherit;"]);
export var CardImageWrapper = styled.div.withConfig({
  displayName: "styles__CardImageWrapper",
  componentId: "cidbpf-6"
})(["  position:relative;display:block;flex:0 0 auto;padding:0;background:rgba(0,0,0,.05);border-radius:inherit;border-bottom-right-radius:0 !important;border-bottom-left-radius:0 !important;"]);
/**
 * Styled-Component
 * @name CardFooter
 * @see Card (components/Card)
 * @description child of <Card> that holds the footer
 */

export var CardFooter = styled.div.withConfig({
  displayName: "styles__CardFooter",
  componentId: "cidbpf-7"
})(["padding:.75em;color:rgba(0,0,0,.4);border-top:1px solid rgba(0,0,0,.1);:before{content:'';}"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY2FyZC9zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsImdsb2JhbFN0eWxlcyIsImNzc19jYXJkYmFzZSIsInByb3BzIiwidGhlbWUiLCJjb2xvciIsInAiLCJ3aWR0aCIsIkNhcmRIZWFkZXIiLCJkaXYiLCJtaW5pIiwidGl0bGUiLCJtZXRhIiwiQ2FyZFRpdGxlIiwiaDEiLCJDYXJkTWV0YSIsIkNhcmRNaW5pIiwiaW1nIiwiYXR0cnMiLCJzcmMiLCJDYXJkQ29udGVudCIsIkNhcmRJbWFnZSIsIkNhcmRJbWFnZVdyYXBwZXIiLCJDYXJkRm9vdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLElBQWlCQyxHQUFqQixRQUE0QixtQkFBNUI7QUFFQSxPQUFPQyxZQUFQLE1BQXlCLHNCQUF6QjtBQUVBOzs7O0FBS0E7Ozs7Ozs7OztBQVNBLE9BQU8sSUFBTUMsWUFBWSxHQUFHRixHQUFILDRIQUVyQkMsWUFGcUIsRUFJSCxVQUFBRSxLQUFLO0FBQUEsU0FBSSxZQUFKO0FBQUEsQ0FKRixFQU1kLFVBQUFBLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixJQUFxQixPQUF6QjtBQUFBLENBTlMsRUFPVCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVksb0JBQVosS0FBcUMsT0FBekM7QUFBQSxDQVBJLEVBY2QsVUFBQUUsQ0FBQztBQUFBLFNBQUksVUFBR0EsQ0FBQyxDQUFDQyxLQUFMLFdBQWtCLE1BQXRCO0FBQUEsQ0FkYSxDQUFsQjtBQWlCUDs7Ozs7Ozs7OztBQVNBLE9BQU8sSUFBTUMsVUFBVSxHQUFHVCxNQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsNERBRVYsVUFBQUgsQ0FBQztBQUFBLFNBQU1BLENBQUMsQ0FBQ0ksSUFBRixLQUFXLENBQUNKLENBQUMsQ0FBQ0ssS0FBSCxJQUFZLENBQUNMLENBQUMsQ0FBQ00sSUFBMUIsQ0FBRCxHQUFvQyxjQUFwQyxHQUFxRCxPQUExRDtBQUFBLENBRlMsRUFHSCxVQUFBTixDQUFDO0FBQUEsU0FBS0EsQ0FBQyxDQUFDSyxLQUFGLEdBQVUsY0FBVixHQUEyQixFQUFoQztBQUFBLENBSEUsQ0FBaEI7QUFNUDs7Ozs7OztBQU1BLE9BQU8sSUFBTUUsU0FBUyxHQUFHZCxNQUFNLENBQUNlLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUVBQWY7QUFRUDs7Ozs7OztBQU1BLE9BQU8sSUFBTUMsUUFBUSxHQUFHaEIsTUFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLGlFQUFkO0FBTVA7Ozs7Ozs7OztBQVFBLE9BQU8sSUFBTU8sUUFBUSxHQUFHakIsTUFBTSxDQUFDa0IsR0FBUCxDQUFXQyxLQUFYLENBQWlCLFVBQUFaLENBQUM7QUFBQSxTQUFLO0FBQUVhLElBQUFBLEdBQUcsRUFBRWIsQ0FBQyxDQUFDSTtBQUFULEdBQUw7QUFBQSxDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLGdGQUlQLFVBQUFKLENBQUM7QUFBQSxTQUFNLENBQUNBLENBQUMsQ0FBQ0ssS0FBSCxJQUFZLENBQUNMLENBQUMsQ0FBQ00sSUFBaEIsR0FBd0IsUUFBeEIsR0FBbUMsVUFBeEM7QUFBQSxDQUpNLEVBS1YsVUFBQU4sQ0FBQztBQUFBLFNBQU0sQ0FBQ0EsQ0FBQyxDQUFDSyxLQUFILElBQVksQ0FBQ0wsQ0FBQyxDQUFDTSxJQUFoQixHQUF3QixPQUF4QixHQUFrQyxNQUF2QztBQUFBLENBTFMsRUFNVCxVQUFBTixDQUFDO0FBQUEsU0FBTSxDQUFDQSxDQUFDLENBQUNLLEtBQUgsSUFBWSxDQUFDTCxDQUFDLENBQUNNLElBQWhCLEdBQXdCLEtBQXhCLEdBQWdDLFNBQXJDO0FBQUEsQ0FOUSxDQUFkO0FBU1A7Ozs7Ozs7Ozs7QUFTQSxPQUFPLElBQU1RLFdBQVcsR0FBR3JCLE1BQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSw2RUFJUCxVQUFBSCxDQUFDO0FBQUEsU0FBTUEsQ0FBQyxDQUFDSyxLQUFGLElBQVdMLENBQUMsQ0FBQ00sSUFBZCxHQUFzQixjQUF0QixHQUF1QyxRQUE1QztBQUFBLENBSk0sQ0FBakI7QUFPUDs7Ozs7Ozs7OztBQVNBLE9BQU8sSUFBTVMsU0FBUyxHQUFHdEIsTUFBTSxDQUFDa0IsR0FBUCxDQUFXQyxLQUFYLENBQWlCLFVBQUFaLENBQUM7QUFBQSxTQUFLO0FBQUVhLElBQUFBLEdBQUcsRUFBRWIsQ0FBQyxDQUFDVztBQUFULEdBQUw7QUFBQSxDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLG1FQUFmO0FBT1AsT0FBTyxJQUFNSyxnQkFBZ0IsR0FBR3ZCLE1BQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSxrTUFBdEI7QUFXUDs7Ozs7OztBQU1BLE9BQU8sSUFBTWMsVUFBVSxHQUFHeEIsTUFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLG1HQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBnbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3VpL3N0eWxlcy9nbG9iYWxzXCI7XG5cbi8qKlxuICogU3R5bGVkIGNvbXBvbmVudHMgZm9yIENhcmRcbiAqL1xuXG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudCBDU1NcbiAqIEBuYW1lIENhcmRCYXNlXG4gKiBAc2VlIENhcmQgKGNvbXBvbmVudHMvQ2FyZClcbiAqIEBkZXNjcmlwdGlvbiA8Q2FyZD4gYmFzZSBzdHlsZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gd2lkdGggcCA9PiBwLndpZHRoXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNzc19jYXJkYmFzZSA9IGNzc2BcbiAgLyoqIEdsb2JhbCBTdHlsZXMgKi9cbiAgJHtnbG9iYWxTdHlsZXN9O1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gXCJ3aGl0ZXNtb2tlXCJ9O1xuXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yIHx8IFwiYmxhY2tcIn07XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWVbXCJkZWZhdWx0LWJveC1zaGFkb3dcIl0gfHwgXCJibGFja1wifTtcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XG5cbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAvKiogVE9ETzogQ0hBTkdFICovXG4gIHdpZHRoOiAke3AgPT4gYCR7cC53aWR0aH1lbWAgfHwgXCIyMGVtXCJ9O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBDYXJkSGVhZGVyXG4gKiBAc2VlIENhcmQgKGNvbXBvbmVudHMvQ2FyZClcbiAqIEBkZXNjcmlwdGlvbiBjaGlsZCBvZiA8Q2FyZD4gd3JhcHBlciBmb3IgdGl0bGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgcCA9PiBwLnRpdGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWluaSBwID0+IHAubWluaVxuICovXG5leHBvcnQgY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogJHtwID0+ICgocC5taW5pICYmICghcC50aXRsZSB8fCAhcC5tZXRhKSkgPyBcIjAgIWltcG9ydGFudFwiIDogXCIuNzVlbVwiKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3AgPT4gKHAudGl0bGUgPyBcIjAgIWltcG9ydGFudFwiIDogXCJcIil9O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBDYXJkVGl0bGVcbiAqIEBzZWUgQ2FyZCAoY29tcG9uZW50cy9DYXJkKVxuICogQGRlc2NyaXB0aW9uIGNoaWxkIG9mIDxDYXJkPiB0aGF0IGhvbGRzIHRoZSBoZWFkZXIgdGl0bGVcbiAqL1xuZXhwb3J0IGNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmdiYSgwLDAsMCwuODUpO1xuYDtcblxuXG4vKipcbiAqIFN0eWxlZC1Db21wb25lbnRcbiAqIEBuYW1lIENhcmRNZXRhXG4gKiBAc2VlIENhcmQgKGNvbXBvbmVudHMvQ2FyZClcbiAqIEBkZXNjcmlwdGlvbiBjaGlsZCBvZiA8Q2FyZD4gdGhhdCBob2xkcyB0aGUgaGVhZGVyIGNvbnRlbnRcbiAqL1xuZXhwb3J0IGNvbnN0IENhcmRNZXRhID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjQpO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgQ2FyZE1pbmlcbiAqIEBzZWUgQ2FyZCAoY29tcG9uZW50cy9DYXJkKVxuICogQGRlc2NyaXB0aW9uIGNoaWxkIG9mIDxDYXJkPiB0aGF0IGhvbGRzIHRoZSBtaW5pIGljb24tcGljdHVyZVxuICpcbiAqIEBwYXJhbSB7dXJsfSBtaW5pIHAgPT4gcC5taW5pXG4gKi9cbmV4cG9ydCBjb25zdCBDYXJkTWluaSA9IHN0eWxlZC5pbWcuYXR0cnMocCA9PiAoeyBzcmM6IHAubWluaSB9KSlgXG4gIHdpZHRoOiAzLjVlbTtcbiAgdG9wOiAuNzVlbTtcbiAgcmlnaHQ6IC43NWVtO1xuICBwb3NpdGlvbjogJHtwID0+ICgoIXAudGl0bGUgfHwgIXAubWV0YSkgPyBcInN0YXRpY1wiIDogXCJhYnNvbHV0ZVwiKX07XG4gIGZsb2F0OiAke3AgPT4gKCghcC50aXRsZSB8fCAhcC5tZXRhKSA/IFwicmlnaHRcIiA6IFwiYXV0b1wiKX07XG4gIG1hcmdpbjogJHtwID0+ICgoIXAudGl0bGUgfHwgIXAubWV0YSkgPyBcIjFlbVwiIDogXCJpbml0aWFsXCIpfTtcbmA7XG5cbi8qKlxuICogU3R5bGVkLUNvbXBvbmVudFxuICogQG5hbWUgQ2FyZENvbnRlbnRcbiAqIEBzZWUgQ2FyZCAoY29tcG9uZW50cy9DYXJkKVxuICogQGRlc2NyaXB0aW9uIGNoaWxkIG9mIDxDYXJkPiB0aGF0IGhvbGRzIHRoZSBtYWluIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgcCA9PiBwLnRpdGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0YSBwID0+IHAubWV0YVxuICovXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOi43NWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNjgpO1xuICBwYWRkaW5nLXRvcDogJHtwID0+ICgocC50aXRsZSB8fCBwLm1ldGEpID8gXCIwICFpbXBvcnRhbnRcIiA6IFwiaW5pdGFsXCIpfVxuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBDYXJkSW1hZ2UgYW5kXG4gKiBAbmFtZSBDYXJkSW1hZ2VXcmFwcGVyXG4gKiBAc2VlIENhcmQgKGNvbXBvbmVudHMvQ2FyZClcbiAqIEBkZXNjcmlwdGlvbiBjaGlsZCBvZiA8Q2FyZD4gdGhhdCBob2xkcyB0aGUgbWFpbiBoZWFkZXIgaW1nXG4gKlxuICogQHBhcmFtIHt1cmx9IGltZyBwID0+IHAuaW1nXG4gKi9cbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuaW1nLmF0dHJzKHAgPT4gKHsgc3JjOiBwLmltZyB9KSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuYDtcblxuZXhwb3J0IGNvbnN0IENhcmRJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YCBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuYDtcblxuLyoqXG4gKiBTdHlsZWQtQ29tcG9uZW50XG4gKiBAbmFtZSBDYXJkRm9vdGVyXG4gKiBAc2VlIENhcmQgKGNvbXBvbmVudHMvQ2FyZClcbiAqIEBkZXNjcmlwdGlvbiBjaGlsZCBvZiA8Q2FyZD4gdGhhdCBob2xkcyB0aGUgZm9vdGVyXG4gKi9cbmV4cG9ydCBjb25zdCBDYXJkRm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogLjc1ZW07XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC40KTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG4gIDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuXG4gIH1cbmA7XG4iXX0=