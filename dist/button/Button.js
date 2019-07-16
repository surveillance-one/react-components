import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { defaultTheme } from "../ui/themes";
import { Icon } from "../icon";
import * as sc from "./styles";
/**
 * @title Button component
 *
 * @summary Components/Button is a simple button component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.0.0
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

/**
	* Component Declaration
	* - Default Props
	* - themes
 */

var ButtonComponent = function ButtonComponent(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? "" : _ref$children,
      _ref$iconName = _ref.iconName,
      iconName = _ref$iconName === void 0 ? "" : _ref$iconName,
      _ref$squared = _ref.squared,
      squared = _ref$squared === void 0 ? false : _ref$squared,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded,
      _ref$circle = _ref.circle,
      circle = _ref$circle === void 0 ? false : _ref$circle,
      _ref$largeButton = _ref.largeButton,
      largeButton = _ref$largeButton === void 0 ? false : _ref$largeButton,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? "right" : _ref$iconPosition,
      className = _ref.className,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["children", "iconName", "squared", "rounded", "circle", "largeButton", "iconPosition", "className", "disabled", "onClick", "theme"]);

  return React.createElement("button", {
    className: className,
    onClick: onClick,
    disabled: disabled
  }, !squared && !circle && React.createElement(sc.BtnLabel, null, children), iconName && React.createElement(sc.IconWrapper, {
    iconPosition: iconPosition,
    squared: squared,
    circle: circle,
    rounded: rounded
  }, React.createElement(Icon, {
    icon: iconName
  })));
};
/**
 * Component Styles and Props
 * - Global styles
 * - Different props
 */


var Button = styled(ButtonComponent).withConfig({
  displayName: "Button",
  componentId: "sc-1sp3d36-0"
})(["", ";", ";", ";", ";", ";", ";", ";", ""], sc.css_buttonbase, function (p) {
  return p.iconName ? sc.css_buttonicons : "";
}, function (p) {
  return p.primary && !p.secondary ? sc.buttonStyle("primary") : "";
}, function (p) {
  return p.secondary && !p.primary ? sc.buttonStyle("secondary") : "";
}, function (p) {
  return p.rounded && !p.squared ? sc.css_buttonrounded : "";
}, function (p) {
  return p.squared && !p.rounded ? sc.css_buttonsquared : "";
}, function (p) {
  return p.circle ? sc.css_buttoncircle : "";
}, function (p) {
  return p.animations ? sc.css_buttonanimations : "";
});
Button.defaultProps = {
  theme: defaultTheme.base
};
/**
 * PropTypes
 */

Button.propTypes = {
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  rounded: PropTypes.bool,
  squared: PropTypes.bool,
  largeButton: PropTypes.bool,
  children: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};
export default Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYnV0dG9uL0J1dHRvbi5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJkZWZhdWx0VGhlbWUiLCJJY29uIiwic2MiLCJCdXR0b25Db21wb25lbnQiLCJjaGlsZHJlbiIsImljb25OYW1lIiwic3F1YXJlZCIsInJvdW5kZWQiLCJjaXJjbGUiLCJsYXJnZUJ1dHRvbiIsImljb25Qb3NpdGlvbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsInRoZW1lIiwicHJvcHMiLCJCdXR0b24iLCJjc3NfYnV0dG9uYmFzZSIsInAiLCJjc3NfYnV0dG9uaWNvbnMiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiYnV0dG9uU3R5bGUiLCJjc3NfYnV0dG9ucm91bmRlZCIsImNzc19idXR0b25zcXVhcmVkIiwiY3NzX2J1dHRvbmNpcmNsZSIsImFuaW1hdGlvbnMiLCJjc3NfYnV0dG9uYW5pbWF0aW9ucyIsImRlZmF1bHRQcm9wcyIsImJhc2UiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBTyxLQUFLQyxTQUFaLE1BQTJCLFlBQTNCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGNBQTdCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixTQUFyQjtBQUVBLE9BQU8sS0FBS0MsRUFBWixNQUFvQixVQUFwQjtBQUVBOzs7Ozs7Ozs7O0FBVUE7Ozs7OztBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSwyQkFDdkJDLFFBRHVCO0FBQUEsTUFDdkJBLFFBRHVCLDhCQUNaLEVBRFk7QUFBQSwyQkFFdkJDLFFBRnVCO0FBQUEsTUFFdkJBLFFBRnVCLDhCQUVaLEVBRlk7QUFBQSwwQkFHdkJDLE9BSHVCO0FBQUEsTUFHdkJBLE9BSHVCLDZCQUdiLEtB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QUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEIsQ0FGSTtBQUdsQnpCLEVBQUFBLE9BQU8sRUFBRVQsU0FBUyxDQUFDbUMsSUFIRDtBQUlsQjNCLEVBQUFBLE9BQU8sRUFBRVIsU0FBUyxDQUFDbUMsSUFKRDtBQUtsQnhCLEVBQUFBLFdBQVcsRUFBRVgsU0FBUyxDQUFDbUMsSUFMTDtBQU1sQjdCLEVBQUFBLFFBQVEsRUFBRU4sU0FBUyxDQUFDaUMsTUFORjtBQU9sQlgsRUFBQUEsT0FBTyxFQUFFdEIsU0FBUyxDQUFDbUMsSUFQRDtBQVFsQlosRUFBQUEsU0FBUyxFQUFFdkIsU0FBUyxDQUFDbUM7QUFSSCxDQUFuQjtBQVdBLGVBQWVqQixNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9pY29uXCI7XG5cbmltcG9ydCAqIGFzIHNjIGZyb20gXCIuL3N0eWxlc1wiO1xuXG4vKipcbiAqIEB0aXRsZSBCdXR0b24gY29tcG9uZW50XG4gKlxuICogQHN1bW1hcnkgQ29tcG9uZW50cy9CdXR0b24gaXMgYSBzaW1wbGUgYnV0dG9uIGNvbXBvbmVudCB1c2luZyBTdHlsZWQgQ29tcG9uZW50cyBhbmQgbWFkZSBmb3IgcmV1c2FiaWxpdHlcbiAqIEBzZWUgU3R5bGVkQ29tcG9uZW50c1xuICpcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKiBAYXV0aG9yIFtTdXJ2ZWlsbGFuY2VPbmVdW01hcmt1cyBIdWRvYm5pa10oaHR0cHM6Ly9naXRodWIuY29tL1N1cnZlaWxsYW5jZU9uZSlcbiAqL1xuXG4vKipcblx0KiBDb21wb25lbnQgRGVjbGFyYXRpb25cblx0KiAtIERlZmF1bHQgUHJvcHNcblx0KiAtIHRoZW1lc1xuICovXG5jb25zdCBCdXR0b25Db21wb25lbnQgPSAoe1xuXHRjaGlsZHJlbiA9IFwiXCIsXG5cdGljb25OYW1lID0gXCJcIixcblx0c3F1YXJlZCA9IGZhbHNlLFxuXHRyb3VuZGVkID0gZmFsc2UsXG5cdGNpcmNsZSA9IGZhbHNlLFxuXHRsYXJnZUJ1dHRvbiA9IGZhbHNlLFxuXHRpY29uUG9zaXRpb24gPSBcInJpZ2h0XCIsXG5cdGNsYXNzTmFtZSxcblx0ZGlzYWJsZWQsXG5cdG9uQ2xpY2ssXG5cdHRoZW1lLFxuXHQuLi5wcm9wc1xufSkgPT4gKFxuXHQ8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtvbkNsaWNrfSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuXHRcdHsgKCFzcXVhcmVkICYmICFjaXJjbGUpICYmIDxzYy5CdG5MYWJlbD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L3NjLkJ0bkxhYmVsPiB9XG5cblx0XHR7IGljb25OYW1lXG5cdFx0JiYgPHNjLkljb25XcmFwcGVyXG5cdFx0XHRpY29uUG9zaXRpb249e2ljb25Qb3NpdGlvbn1cblx0XHRcdHNxdWFyZWQ9e3NxdWFyZWR9XG5cdFx0XHRjaXJjbGU9e2NpcmNsZX1cblx0XHRcdHJvdW5kZWQ9e3JvdW5kZWR9PlxuXHRcdFx0PEljb24gaWNvbj17aWNvbk5hbWV9Lz5cblx0XHQ8L3NjLkljb25XcmFwcGVyPn1cblx0PC9idXR0b24+XG4pO1xuXG4vKipcbiAqIENvbXBvbmVudCBTdHlsZXMgYW5kIFByb3BzXG4gKiAtIEdsb2JhbCBzdHlsZXNcbiAqIC0gRGlmZmVyZW50IHByb3BzXG4gKi9cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChCdXR0b25Db21wb25lbnQpYFxuXHQvKiogTWFpbiBUaGVtZSAqL1xuXHQke3NjLmNzc19idXR0b25iYXNlfTtcblxuXHQvKiogSWNvbnMgKi9cblx0JHtwID0+IChwLmljb25OYW1lID8gc2MuY3NzX2J1dHRvbmljb25zIDogXCJcIil9O1xuXG5cdC8qKiBDb2xvciBWYXJpYW50cyAqL1xuXHQke3AgPT4gKHAucHJpbWFyeSAmJiAhcC5zZWNvbmRhcnkgPyBzYy5idXR0b25TdHlsZShcInByaW1hcnlcIikgOiBcIlwiKX07XG5cdCR7cCA9PiAocC5zZWNvbmRhcnkgJiYgIXAucHJpbWFyeSA/IHNjLmJ1dHRvblN0eWxlKFwic2Vjb25kYXJ5XCIpIDogXCJcIil9O1xuXG5cdC8qKiBCdXR0b24gVHlwZXMgKi9cblx0JHtwID0+ICgocC5yb3VuZGVkICYmICFwLnNxdWFyZWQpID8gc2MuY3NzX2J1dHRvbnJvdW5kZWQgOiBcIlwiKX07XG5cdCR7cCA9PiAoKHAuc3F1YXJlZCAmJiAhcC5yb3VuZGVkKSA/IHNjLmNzc19idXR0b25zcXVhcmVkIDogXCJcIil9O1xuXHQke3AgPT4gKHAuY2lyY2xlID8gc2MuY3NzX2J1dHRvbmNpcmNsZSA6IFwiXCIpfTtcblxuXG5cdC8qKiBCdXR0b24gQW5pbWF0aW9ucyAqL1xuXHQke3AgPT4gKHAuYW5pbWF0aW9ucyA/IHNjLmNzc19idXR0b25hbmltYXRpb25zIDogXCJcIil9XG5gO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHR0aGVtZTogZGVmYXVsdFRoZW1lLmJhc2Vcbn07XG5cbi8qKlxuICogUHJvcFR5cGVzXG4gKi9cblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcblx0aWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGljb25Qb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcImxlZnRcIiwgXCJyaWdodFwiXSksXG5cdHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuXHRzcXVhcmVkOiBQcm9wVHlwZXMuYm9vbCxcblx0bGFyZ2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXHRjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZyxcblx0cHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdHNlY29uZGFyeTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=