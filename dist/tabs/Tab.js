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
  useEffect(function () {
    useRefWidth(item, onSendRef, ref, slider);
  }, [ref]);
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
  componentId: "j3tm8k-0"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9UYWIuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVkIiwiY3NzIiwiUHJvcFR5cGVzIiwiSWNvbiIsInVzZVJlZldpZHRoIiwidXNlQ2FsbGJhY2tUYWIiLCJUYWJMYWJlbCIsIkljb25XcmFwcGVyIiwiY3NzX3RhYmJhc2UiLCJjc3NfdGFiY3VycmVudHVuZGVybGluZSIsImNzc190YWJjdXJyZW50IiwiY3NzX3RhYmljb25zIiwiY3NzX3Nob3dpY29ub25seW9uYWN0aXZlIiwiY3NzX3RhYnJvdW5kZWQiLCJjc3Nfc2xpZGVyIiwidGFiU3R5bGUiLCJUYWJDb21wb25lbnQiLCJsYWJlbCIsImNsYXNzTmFtZSIsIm9uVGFiQ2xpY2siLCJvblNlbmRSZWYiLCJpdGVtIiwic2xpZGVyIiwib25DbGljayIsInByb3BzIiwicmVmIiwiY2IiLCJjdXJyZW50VGFiIiwidG9TdHJpbmciLCJpY29uTmFtZSIsIlRhYiIsInAiLCJ1bmRlcmxpbmVBbGwiLCJ1bmRlcmxpbmUiLCJzaG93SWNvbk9ubHlPbkFjdGl2ZSIsInNlY29uZGFyeUFsbCIsInNlY29uZGFyeSIsInByaW1hcnlBbGwiLCJwcmltYXJ5Iiwicm91bmRlZEFsbCIsInJvdW5kZWQiLCJkZWZhdWx0UHJvcHMiLCJpY29uUG9zaXRpb24iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxNQUFoQixFQUF3QkMsU0FBeEIsUUFBeUMsT0FBekM7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxHQUFqQixRQUE0QixtQkFBNUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixTQUFyQjtBQUVBLE9BQU9DLFdBQVAsTUFBd0Isc0JBQXhCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQix5QkFB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T2ZiLEVBQUFBLFNBQVMsRUFBRS9CLFNBQVMsQ0FBQzRDLElBUE47QUFRZlosRUFBQUEsb0JBQW9CLEVBQUVoQyxTQUFTLENBQUM0QyxJQVJqQjtBQVNmeEIsRUFBQUEsTUFBTSxFQUFFcEIsU0FBUyxDQUFDNEMsSUFUSDtBQVVmMUIsRUFBQUEsU0FBUyxFQUFFbEIsU0FBUyxDQUFDNkMsSUFWTjtBQVdmeEIsRUFBQUEsT0FBTyxFQUFFckIsU0FBUyxDQUFDNkMsSUFYSjtBQVlmNUIsRUFBQUEsVUFBVSxFQUFFakIsU0FBUyxDQUFDNkM7QUFaUCxDQUFoQjtBQWVBLGVBQWVqQixHQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgb25lLXZhci1kZWNsYXJhdGlvbi1wZXItbGluZSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9pY29uXCI7XG5cbmltcG9ydCB1c2VSZWZXaWR0aCBmcm9tIFwiLi4vaG9va3MvdXNlUmVmV2lkdGhcIjtcbmltcG9ydCB1c2VDYWxsYmFja1RhYiBmcm9tIFwiLi4vaG9va3MvdXNlQ2FsbGJhY2tUYWJcIjtcblxuLy8gdmVyc2lvbiAxLjFcblxuaW1wb3J0IHtcblx0VGFiTGFiZWwsXG5cdEljb25XcmFwcGVyLFxuXHRjc3NfdGFiYmFzZSxcblx0Y3NzX3RhYmN1cnJlbnR1bmRlcmxpbmUsXG5cdGNzc190YWJjdXJyZW50LFxuXHRjc3NfdGFiaWNvbnMsXG5cdGNzc19zaG93aWNvbm9ubHlvbmFjdGl2ZSxcblx0Y3NzX3RhYnJvdW5kZWQsXG5cdGNzc19zbGlkZXIsXG5cdHRhYlN0eWxlXG59IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBUYWJDb21wb25lbnQgPSAoe1xuXHRsYWJlbCwgY2xhc3NOYW1lLCBvblRhYkNsaWNrLCBvblNlbmRSZWYsIGl0ZW0sIHNsaWRlciwgb25DbGljaywgLi4ucHJvcHNcbn0pID0+IHtcblx0Y29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHVzZVJlZldpZHRoKGl0ZW0sIG9uU2VuZFJlZiwgcmVmLCBzbGlkZXIpO1xuXHR9LCBbcmVmXSk7XG5cblx0Y29uc3QgY2IgPSB1c2VDYWxsYmFja1RhYihpdGVtLCBvblNlbmRSZWYsIG9uVGFiQ2xpY2ssIHJlZiwgb25DbGljaywgc2xpZGVyKTtcblx0cmV0dXJuIChcblx0XHQ8bGlcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuXHRcdFx0b25DbGljaz17Y2J9XG5cdFx0XHRrZXk9e2l0ZW19XG5cdFx0XHRjdXJyZW50PXtwcm9wcy5jdXJyZW50VGFiLnRvU3RyaW5nKCl9XG5cdFx0XHR0YWJJbmRleD17aXRlbX1cblx0XHRcdHJlZj17cmVmfT5cblx0XHRcdDxUYWJMYWJlbD57bGFiZWx9PC9UYWJMYWJlbD5cblx0XHRcdHtwcm9wcy5pY29uTmFtZSAmJiA8SWNvbldyYXBwZXI+PEljb24gaWNvbj17cHJvcHMuaWNvbk5hbWV9Lz48L0ljb25XcmFwcGVyPn1cblx0XHQ8L2xpPlxuXHQpO1xufTtcblxuY29uc3QgVGFiID0gc3R5bGVkKFRhYkNvbXBvbmVudClgXG5cdCR7Y3NzX3RhYmJhc2V9XG5cblx0LyoqIEN1cnJlbnQgVGFiICovXG5cdCR7cCA9PiAocC5jdXJyZW50VGFiICYmIChwLnVuZGVybGluZUFsbCB8fCBwLnVuZGVybGluZSkpICYmIGNzc190YWJjdXJyZW50dW5kZXJsaW5lfTtcblx0JHtwID0+IChwLmN1cnJlbnRUYWIgJiYgKCFwLnVuZGVybGluZUFsbCAmJiAhcC51bmRlcmxpbmUpICYmICFwLnNsaWRlcikgJiYgY3NzX3RhYmN1cnJlbnR9O1xuXG5cdC8qKiBUYWIgSWNvbnMgKi9cblx0JHtwID0+IHAuaWNvbk5hbWUgJiYgY3NzX3RhYmljb25zfTtcblxuXHQvKiogc2hvd0ljb25Pbmx5T25BY3RpdmUgKi9cblx0JHtwID0+IHAuc2hvd0ljb25Pbmx5T25BY3RpdmUgJiYgIXAuY3VycmVudFRhYiAmJiBjc3Nfc2hvd2ljb25vbmx5b25hY3RpdmV9XG5cblx0LyoqIENvbG9yIFZhcmlhbnRzIFxuXHQqIG9yZGVyIG1hdHRlcnMsIGJvdHRvbSBvdmVycmlkZXMgYWJvdmUgZm9yIHRoZSB0aGVtZXNcblx0Ki9cblx0JHtwID0+ICghcC51bmRlcmxpbmVBbGwgJiYgIXAudW5kZXJsaW5lKSAmJiBjc3NgXG5cdFx0JHsocC5zZWNvbmRhcnlBbGwgfHwgcC5zZWNvbmRhcnkpICYmIHRhYlN0eWxlKFwic2Vjb25kYXJ5XCIpfVxuXHRcdCR7KHAucHJpbWFyeUFsbCB8fCBwLnByaW1hcnkpICYmIHRhYlN0eWxlKFwicHJpbWFyeVwiKX1cblx0YH1cblxuXHQvKiogU3R5bGVzICovXG5cdCR7cCA9PiAocC5yb3VuZGVkQWxsIHx8IHAucm91bmRlZCkgJiYgY3NzX3RhYnJvdW5kZWR9XG5cblx0JHtwID0+IHAuc2xpZGVyICYmIGNzc19zbGlkZXJ9O1xuYDtcblxuLyoqIERlZmF1bHQgUHJvcHMgKi9cblRhYi5kZWZhdWx0UHJvcHMgPSB7XG5cdGxhYmVsOiBcIlRhYlwiLFxuXHRpY29uTmFtZTogXCJcIixcblx0aWNvblBvc2l0aW9uOiBcInJpZ2h0XCIsXG5cdHNlY29uZGFyeTogZmFsc2UsXG5cdHByaW1hcnk6IGZhbHNlLFxuXHRyb3VuZGVkOiBmYWxzZSxcblx0dW5kZXJsaW5lOiBmYWxzZSxcblx0c2hvd0ljb25Pbmx5T25BY3RpdmU6IGZhbHNlLFxuXHRzbGlkZXI6IGZhbHNlLFxuXHRvblNlbmRSZWY6ICgpID0+IHt9LFxuXHRvbkNsaWNrOiAoKSA9PiB7fSxcblx0b25UYWJDbGljazogKCkgPT4ge31cbn07XG5cbi8qKiBQcm9wIFR5cGVzICovXG5UYWIucHJvcFR5cGVzID0ge1xuXHRsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRpY29uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0aWNvblBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRzZWNvbmRhcnk6IFByb3BUeXBlcy5ib29sLFxuXHRwcmltYXJ5OiBQcm9wVHlwZXMuYm9vbCxcblx0cm91bmRlZDogUHJvcFR5cGVzLmJvb2wsXG5cdHVuZGVybGluZTogUHJvcFR5cGVzLmJvb2wsXG5cdHNob3dJY29uT25seU9uQWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblx0c2xpZGVyOiBQcm9wVHlwZXMuYm9vbCxcblx0b25TZW5kUmVmOiBQcm9wVHlwZXMuZnVuYyxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cdG9uVGFiQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiO1xuIl19