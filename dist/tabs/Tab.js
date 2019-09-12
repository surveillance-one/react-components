import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/* eslint-disable one-var-declaration-per-line */
import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "../icon";
import useRefWidth from "../hooks/useRefWidth";
import useCallbackTab from "../hooks/useCallbackTab"; // version 1.1

import { TabLabel, IconWrapper, css_tabbase, css_tabcurrentunderline, css_tabcurrent, css_tabicons, css_showicononlyonactive, css_tabrounded, css_slider, tabStyle } from "./styles";

var TabComponent = function TabComponent(_ref) {
  var label = _ref.label,
      className = _ref.className,
      onTabClick = _ref.onTabClick,
      onSendRef = _ref.onSendRef,
      item = _ref.item,
      slider = _ref.slider,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["label", "className", "onTabClick", "onSendRef", "item", "slider", "onClick"]);

  var ref = useRef(null);
  useRefWidth(item, onSendRef, ref, slider, props.currentTab);
  /* Fires Event if there is a onClick attached to the tab */

  useEffect(function () {
    if (props.currentTab) onClick();
  }, []);
  var cb = useCallbackTab(item, onSendRef, onTabClick, ref, onClick, slider);
  return React.createElement("li", {
    className: className,
    onClick: cb,
    key: item,
    current: props.currentTab.toString(),
    tabIndex: item,
    ref: ref
  }, React.createElement(TabLabel, null, label), props.iconName && React.createElement(IconWrapper, null, React.createElement(Icon, {
    icon: props.iconName
  })));
};

var Tab = styled(TabComponent).withConfig({
  displayName: "Tab",
  componentId: "sc-1ohi2-0"
})(["", " ", ";", ";", ";", " ", " ", " ", ";"], css_tabbase, function (p) {
  return p.currentTab && (p.underlineAll || p.underline) && css_tabcurrentunderline;
}, function (p) {
  return p.currentTab && !p.underlineAll && !p.underline && !p.slider && css_tabcurrent;
}, function (p) {
  return p.iconName && css_tabicons;
}, function (p) {
  return p.showIconOnlyOnActive && !p.currentTab && css_showicononlyonactive;
}, function (p) {
  return !p.underlineAll && !p.underline && css(["", " ", ""], (p.secondaryAll || p.secondary) && tabStyle("secondary"), (p.primaryAll || p.primary) && tabStyle("primary"));
}, function (p) {
  return (p.roundedAll || p.rounded) && css_tabrounded;
}, function (p) {
  return p.slider && css_slider;
});
/** Default Props */

Tab.defaultProps = {
  label: "Tab",
  iconName: "",
  iconPosition: "right",
  secondary: false,
  primary: false,
  rounded: false,
  underline: false,
  showIconOnlyOnActive: false,
  slider: false,
  onSendRef: function onSendRef() {},
  onClick: function onClick() {},
  onTabClick: function onTabClick() {}
};
/** Prop Types */

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconPosition: PropTypes.string,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  rounded: PropTypes.bool,
  underline: PropTypes.bool,
  showIconOnlyOnActive: PropTypes.bool,
  slider: PropTypes.bool,
  onSendRef: PropTypes.func,
  onClick: PropTypes.func,
  onTabClick: PropTypes.func
};
export default Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9UYWIuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVkIiwiY3NzIiwiUHJvcFR5cGVzIiwiSWNvbiIsInVzZVJlZldpZHRoIiwidXNlQ2FsbGJhY2tUYWIiLCJUYWJMYWJlbCIsIkljb25XcmFwcGVyIiwiY3NzX3RhYmJhc2UiLCJjc3NfdGFiY3VycmVudHVuZGVybGluZSIsImNzc190YWJjdXJyZW50IiwiY3NzX3RhYmljb25zIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYnJvdW5kZWQiLCJjc3Nfc2xpZGVyIiwidGFiU3R5bGUiLCJUYWJDb21wb25lbnQiLCJsYWJlbCIsImNsYXNzTmFtZSIsIm9uVGFiQ2xpY2siLCJvblNlbmRSZWYiLCJpdGVtIiwic2xpZGVyIiwib25DbGljayIsInByb3BzIiwicmVmIiwiY3VycmVudFRhYiIsImNiIiwidG9TdHJpbmciLCJpY29uTmFtZSIsIlRhYiIsInAiLCJ1bmRlcmxpbmVBbGwiLCJ1bmRlcmxpbmUiLCJzaG93SWNvbk9ubHlPbkFjdGl2ZSIsInNlY29uZGFyeUFsbCIsInNlY29uZGFyeSIsInByaW1hcnlBbGwiLCJwcmltYXJ5Iiwicm91bmRlZEFsbCIsInJvdW5kZWQiLCJkZWZhdWx0UHJvcHMiLCJpY29uUG9zaXRpb24iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxNQUFoQixFQUF3QkMsU0FBeEIsUUFBeUMsT0FBekM7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxHQUFqQixRQUE0QixtQkFBNUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixTQUFyQjtBQUVBLE9BQU9DLFdBQVAsTUFBd0Isc0JBQXhCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQix5QkFB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LFNBQVMsQ0FBQzRDLElBTEo7QUFNZk4sRUFBQUEsT0FBTyxFQUFFdEMsU0FBUyxDQUFDNEMsSUFOSjtBQU9mYixFQUFBQSxTQUFTLEVBQUUvQixTQUFTLENBQUM0QyxJQVBOO0FBUWZaLEVBQUFBLG9CQUFvQixFQUFFaEMsU0FBUyxDQUFDNEMsSUFSakI7QUFTZnhCLEVBQUFBLE1BQU0sRUFBRXBCLFNBQVMsQ0FBQzRDLElBVEg7QUFVZjFCLEVBQUFBLFNBQVMsRUFBRWxCLFNBQVMsQ0FBQzZDLElBVk47QUFXZnhCLEVBQUFBLE9BQU8sRUFBRXJCLFNBQVMsQ0FBQzZDLElBWEo7QUFZZjVCLEVBQUFBLFVBQVUsRUFBRWpCLFNBQVMsQ0FBQzZDO0FBWlAsQ0FBaEI7QUFlQSxlQUFlakIsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG9uZS12YXItZGVjbGFyYXRpb24tcGVyLWxpbmUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi4vaWNvblwiO1xuXG5pbXBvcnQgdXNlUmVmV2lkdGggZnJvbSBcIi4uL2hvb2tzL3VzZVJlZldpZHRoXCI7XG5pbXBvcnQgdXNlQ2FsbGJhY2tUYWIgZnJvbSBcIi4uL2hvb2tzL3VzZUNhbGxiYWNrVGFiXCI7XG5cbi8vIHZlcnNpb24gMS4xXG5cbmltcG9ydCB7XG5cdFRhYkxhYmVsLFxuXHRJY29uV3JhcHBlcixcblx0Y3NzX3RhYmJhc2UsXG5cdGNzc190YWJjdXJyZW50dW5kZXJsaW5lLFxuXHRjc3NfdGFiY3VycmVudCxcblx0Y3NzX3RhYmljb25zLFxuXHRjc3Nfc2hvd2ljb25vbmx5b25hY3RpdmUsXG5cdGNzc190YWJyb3VuZGVkLFxuXHRjc3Nfc2xpZGVyLFxuXHR0YWJTdHlsZVxufSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgVGFiQ29tcG9uZW50ID0gKHtcblx0bGFiZWwsIGNsYXNzTmFtZSwgb25UYWJDbGljaywgb25TZW5kUmVmLCBpdGVtLCBzbGlkZXIsIG9uQ2xpY2ssIC4uLnByb3BzXG59KSA9PiB7XG5cdGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblx0dXNlUmVmV2lkdGgoaXRlbSwgb25TZW5kUmVmLCByZWYsIHNsaWRlciwgcHJvcHMuY3VycmVudFRhYik7XG5cblx0LyogRmlyZXMgRXZlbnQgaWYgdGhlcmUgaXMgYSBvbkNsaWNrIGF0dGFjaGVkIHRvIHRoZSB0YWIgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocHJvcHMuY3VycmVudFRhYikgb25DbGljaygpO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgY2IgPSB1c2VDYWxsYmFja1RhYihpdGVtLCBvblNlbmRSZWYsIG9uVGFiQ2xpY2ssIHJlZiwgb25DbGljaywgc2xpZGVyKTtcblx0cmV0dXJuIChcblx0XHQ8bGlcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHRcdFx0b25DbGljaz17Y2J9XG5cdFx0XHRrZXk9e2l0ZW19XG5cdFx0XHRjdXJyZW50PXtwcm9wcy5jdXJyZW50VGFiLnRvU3RyaW5nKCl9XG5cdFx0XHR0YWJJbmRleD17aXRlbX1cblx0XHRcdHJlZj17cmVmfT5cblx0XHRcdDxUYWJMYWJlbD57bGFiZWx9PC9UYWJMYWJlbD5cblx0XHRcdHtwcm9wcy5pY29uTmFtZSAmJiA8SWNvbldyYXBwZXI+PEljb24gaWNvbj17cHJvcHMuaWNvbk5hbWV9Lz48L0ljb25XcmFwcGVyPn1cblx0XHQ8L2xpPlxuXHQpO1xufTtcblxuY29uc3QgVGFiID0gc3R5bGVkKFRhYkNvbXBvbmVudClgXG5cdCR7Y3NzX3RhYmJhc2V9XG5cblx0LyoqIEN1cnJlbnQgVGFiICovXG5cdCR7cCA9PiAocC5jdXJyZW50VGFiICYmIChwLnVuZGVybGluZUFsbCB8fCBwLnVuZGVybGluZSkpICYmIGNzc190YWJjdXJyZW50dW5kZXJsaW5lfTtcblx0JHtwID0+IChwLmN1cnJlbnRUYWIgJiYgKCFwLnVuZGVybGluZUFsbCAmJiAhcC51bmRlcmxpbmUpICYmICFwLnNsaWRlcikgJiYgY3NzX3RhYmN1cnJlbnR9O1xuXG5cdC8qKiBUYWIgSWNvbnMgKi9cblx0JHtwID0+IHAuaWNvbk5hbWUgJiYgY3NzX3RhYmljb25zfTtcblxuXHQvKiogc2hvd0ljb25Pbmx5T25BY3RpdmUgKi9cblx0JHtwID0+IHAuc2hvd0ljb25Pbmx5T25BY3RpdmUgJiYgIXAuY3VycmVudFRhYiAmJiBjc3Nfc2hvd2ljb25vbmx5b25hY3RpdmV9XG5cblx0LyoqIENvbG9yIFZhcmlhbnRzIFxuXHQqIG9yZGVyIG1hdHRlcnMsIGJvdHRvbSBvdmVycmlkZXMgYWJvdmUgZm9yIHRoZSB0aGVtZXNcblx0Ki9cblx0JHtwID0+ICghcC51bmRlcmxpbmVBbGwgJiYgIXAudW5kZXJsaW5lKSAmJiBjc3NgXG5cdFx0JHsocC5zZWNvbmRhcnlBbGwgfHwgcC5zZWNvbmRhcnkpICYmIHRhYlN0eWxlKFwic2Vjb25kYXJ5XCIpfVxuXHRcdCR7KHAucHJpbWFyeUFsbCB8fCBwLnByaW1hcnkpICYmIHRhYlN0eWxlKFwicHJpbWFyeVwiKX1cblx0YH1cblxuXHQvKiogU3R5bGVzICovXG5cdCR7cCA9PiAocC5yb3VuZGVkQWxsIHx8IHAucm91bmRlZCkgJiYgY3NzX3RhYnJvdW5kZWR9XG5cblx0JHtwID0+IHAuc2xpZGVyICYmIGNzc19zbGlkZXJ9O1xuYDtcblxuLyoqIERlZmF1bHQgUHJvcHMgKi9cblRhYi5kZWZhdWx0UHJvcHMgPSB7XG5cdGxhYmVsOiBcIlRhYlwiLFxuXHRpY29uTmFtZTogXCJcIixcblx0aWNvblBvc2l0aW9uOiBcInJpZ2h0XCIsXG5cdHNlY29uZGFyeTogZmFsc2UsXG5cdHByaW1hcnk6IGZhbHNlLFxuXHRyb3VuZGVkOiBmYWxzZSxcblx0dW5kZXJsaW5lOiBmYWxzZSxcblx0c2hvd0ljb25Pbmx5T25BY3RpdmU6IGZhbHNlLFxuXHRzbGlkZXI6IGZhbHNlLFxuXHRvblNlbmRSZWY6ICgpID0+IHt9LFxuXHRvbkNsaWNrOiAoKSA9PiB7fSxcblx0b25UYWJDbGljazogKCkgPT4ge31cbn07XG5cbi8qKiBQcm9wIFR5cGVzICovXG5UYWIucHJvcFR5cGVzID0ge1xuXHRsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRpY29uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0aWNvblBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzZWNvbmRhcnk6IFByb3BUeXBlcy5ib29sLFxuXHRwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcblx0cm91bmRlZDogUHJvcFR5cGVzLmJvb2wsXG5cdHVuZGVybGluZTogUHJvcFR5cGVzLmJvb2wsXG5cdHNob3dJY29uT25seU9uQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblx0c2xpZGVyOiBQcm9wVHlwZXMuYm9vbCxcblx0b25TZW5kUmVmOiBQcm9wVHlwZXMuZnVuYyxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cdG9uVGFiQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiO1xuIl19