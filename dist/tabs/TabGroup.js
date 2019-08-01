import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Children, cloneElement, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { defaultTheme } from "../ui/themes";
import { TabsList, TabsContent, Selector, css_tabsbase, css_tabsslider } from "./styles";
/**
 * @title Tabs component
 *
 * @summary Components/Tab is a simple Tab component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.1.0
 * @author [Markus Hudobnik](https://github.com/rnarkus)
 */

var TabGroupComponent = function TabGroupComponent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      active = _ref.active,
      primary = _ref.primary,
      secondary = _ref.secondary,
      rounded = _ref.rounded,
      underline = _ref.underline,
      slider = _ref.slider,
      props = _objectWithoutProperties(_ref, ["children", "className", "active", "primary", "secondary", "rounded", "underline", "slider"]);

  var _useState = useState(active),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      activeWidth = _useState4[0],
      setActiveWidth = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      activeLeft = _useState6[0],
      setActiveLeft = _useState6[1];

  return React.createElement("div", Object.assign({
    className: className
  }, props), React.createElement(TabsList, {
    slider: slider
  }, slider && React.createElement(Selector, {
    width: activeWidth,
    left: activeLeft
  }), Children.map(children, function (child, i) {
    return cloneElement(child, {
      item: i,
      onTabClick: setActiveTab,
      onSendWidth: setActiveWidth,
      onSendLeft: setActiveLeft,
      currentTab: activeTab === i,
      primaryAll: primary,
      secondaryAll: secondary,
      roundedAll: rounded,
      underlineAll: underline,
      slider: slider
    });
  })), !slider && React.createElement(TabsContent, {
    slider: slider
  }, Children.map(children, function (child, i) {
    if (i !== activeTab) return undefined;
    return child.props.children;
  })));
};

var TabGroup = styled(TabGroupComponent).withConfig({
  displayName: "TabGroup",
  componentId: "sc-1a6ofq9-0"
})(["", " ", "{", "}"], css_tabsbase, TabsList, function (p) {
  return p.slider && css_tabsslider;
});
/** Default Props */

TabGroup.defaultProps = {
  children: "",
  theme: defaultTheme.base,
  active: 0,
  underline: false,
  primary: false,
  secondary: false,
  rounded: false
};
/** Prop Types */

TabGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  theme: PropTypes.object,
  active: PropTypes.number,
  underline: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  rounded: PropTypes.bool
};
export default TabGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9UYWJHcm91cC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsInVzZVN0YXRlIiwic3R5bGVkIiwiUHJvcFR5cGVzIiwiZGVmYXVsdFRoZW1lIiwiVGFic0xpc3QiLCJUYWJzQ29udGVudCIsIlNlbGVjdG9yIiwiY3NzX3RhYnNiYXNlIiwiY3NzX3RhYnNzbGlkZXIiLCJUYWJHcm91cENvbXBvbmVudCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInJvdW5kZWQiLCJ1bmRlcmxpbmUiLCJzbGlkZXIiLCJwcm9wcyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImFjdGl2ZVdpZHRoIiwic2V0QWN0aXZlV2lkdGgiLCJhY3RpdmVMZWZ0Iiwic2V0QWN0aXZlTGVmdCIsIm1hcCIsImNoaWxkIiwiaSIsIml0ZW0iLCJvblRhYkNsaWNrIiwib25TZW5kV2lkdGgiLCJvblNlbmRMZWZ0IiwiY3VycmVudFRhYiIsInByaW1hcnlBbGwiLCJzZWNvbmRhcnlBbGwiLCJyb3VuZGVkQWxsIiwidW5kZXJsaW5lQWxsIiwidW5kZWZpbmVkIiwiVGFiR3JvdXAiLCJwIiwiZGVmYXVsdFByb3BzIiwidGhlbWUiLCJiYXNlIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIm5vZGUiLCJvYmplY3QiLCJudW1iZXIiLCJib29sIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLEVBQTBCQyxZQUExQixFQUF3Q0MsUUFBeEMsUUFBd0QsT0FBeEQ7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFHQSxTQUFTQyxZQUFULFFBQTZCLGNBQTdCO0FBQ0EsU0FDQ0MsUUFERCxFQUVDQyxXQUZELEVBR0NDLFFBSEQsRUFJQ0MsWUFKRCxFQUtDQyxjQUxE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LE9BQU8sRUFBRTtBQVBjLENBQXhCO0FBV0E7O0FBQ0F1QixRQUFRLENBQUNLLFNBQVQsR0FBcUI7QUFDcEJqQyxFQUFBQSxRQUFRLEVBQUVSLFNBQVMsQ0FBQzBDLFNBQVYsQ0FBb0IsQ0FDN0IxQyxTQUFTLENBQUMyQyxPQUFWLENBQWtCM0MsU0FBUyxDQUFDNEMsSUFBNUIsQ0FENkIsRUFFN0I1QyxTQUFTLENBQUM0QyxJQUZtQixDQUFwQixDQURVO0FBS3BCTCxFQUFBQSxLQUFLLEVBQUV2QyxTQUFTLENBQUM2QyxNQUxHO0FBTXBCbkMsRUFBQUEsTUFBTSxFQUFFVixTQUFTLENBQUM4QyxNQU5FO0FBT3BCaEMsRUFBQUEsU0FBUyxFQUFFZCxTQUFTLENBQUMrQyxJQVBEO0FBUXBCcEMsRUFBQUEsT0FBTyxFQUFFWCxTQUFTLENBQUMrQyxJQVJDO0FBU3BCbkMsRUFBQUEsU0FBUyxFQUFFWixTQUFTLENBQUMrQyxJQVREO0FBVXBCbEMsRUFBQUEsT0FBTyxFQUFFYixTQUFTLENBQUMrQztBQVZDLENBQXJCO0FBY0EsZUFBZVgsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuXG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vdWkvdGhlbWVzXCI7XG5pbXBvcnQge1xuXHRUYWJzTGlzdCxcblx0VGFic0NvbnRlbnQsXG5cdFNlbGVjdG9yLFxuXHRjc3NfdGFic2Jhc2UsXG5cdGNzc190YWJzc2xpZGVyXG59IGZyb20gXCIuL3N0eWxlc1wiO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJzIGNvbXBvbmVudFxuICpcbiAqIEBzdW1tYXJ5IENvbXBvbmVudHMvVGFiIGlzIGEgc2ltcGxlIFRhYiBjb21wb25lbnQgdXNpbmcgU3R5bGVkIENvbXBvbmVudHMgYW5kIG1hZGUgZm9yIHJldXNhYmlsaXR5XG4gKiBAc2VlIFN0eWxlZENvbXBvbmVudHNcbiAqXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBbTWFya3VzIEh1ZG9ibmlrXShodHRwczovL2dpdGh1Yi5jb20vcm5hcmt1cylcbiAqL1xuXG5jb25zdCBUYWJHcm91cENvbXBvbmVudCA9ICh7XG5cdGNoaWxkcmVuLCBjbGFzc05hbWUsIGFjdGl2ZSwgcHJpbWFyeSwgc2Vjb25kYXJ5LCByb3VuZGVkLCB1bmRlcmxpbmUsIHNsaWRlciwgLi4ucHJvcHNcbn0pID0+IHtcblx0Y29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKGFjdGl2ZSk7XG5cdGNvbnN0IFthY3RpdmVXaWR0aCwgc2V0QWN0aXZlV2lkdGhdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW2FjdGl2ZUxlZnQsIHNldEFjdGl2ZUxlZnRdID0gdXNlU3RhdGUoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30+XG5cdFx0XHQ8VGFic0xpc3Qgc2xpZGVyPXtzbGlkZXJ9PlxuXHRcdFx0XHR7c2xpZGVyICYmIDxTZWxlY3RvciB3aWR0aD17YWN0aXZlV2lkdGh9IGxlZnQ9e2FjdGl2ZUxlZnR9PjwvU2VsZWN0b3I+fVxuXHRcdFx0XHR7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IGNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdFx0XHRcdGl0ZW06IGksXG5cdFx0XHRcdFx0b25UYWJDbGljazogc2V0QWN0aXZlVGFiLFxuXHRcdFx0XHRcdG9uU2VuZFdpZHRoOiBzZXRBY3RpdmVXaWR0aCxcblx0XHRcdFx0XHRvblNlbmRMZWZ0OiBzZXRBY3RpdmVMZWZ0LFxuXHRcdFx0XHRcdGN1cnJlbnRUYWI6IChhY3RpdmVUYWIgPT09IGkpLFxuXHRcdFx0XHRcdHByaW1hcnlBbGw6IHByaW1hcnksXG5cdFx0XHRcdFx0c2Vjb25kYXJ5QWxsOiBzZWNvbmRhcnksXG5cdFx0XHRcdFx0cm91bmRlZEFsbDogcm91bmRlZCxcblx0XHRcdFx0XHR1bmRlcmxpbmVBbGw6IHVuZGVybGluZSxcblx0XHRcdFx0XHRzbGlkZXJcblx0XHRcdFx0fSkpfVxuXHRcdFx0PC9UYWJzTGlzdD5cblx0XHRcdHshc2xpZGVyICYmIDxUYWJzQ29udGVudCBzbGlkZXI9e3NsaWRlcn0+XG5cdFx0XHRcdHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuXHRcdFx0XHRcdGlmIChpICE9PSBhY3RpdmVUYWIpIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0cmV0dXJuIGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvVGFic0NvbnRlbnQ+fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgVGFiR3JvdXAgPSBzdHlsZWQoVGFiR3JvdXBDb21wb25lbnQpYFxuXHQke2Nzc190YWJzYmFzZX1cblxuXHQke1RhYnNMaXN0fSB7XG5cdFx0JHtwID0+IHAuc2xpZGVyICYmIGNzc190YWJzc2xpZGVyfVxuXHR9XG5gO1xuXG4vKiogRGVmYXVsdCBQcm9wcyAqL1xuVGFiR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuXHRjaGlsZHJlbjogXCJcIixcblx0dGhlbWU6IGRlZmF1bHRUaGVtZS5iYXNlLFxuXHRhY3RpdmU6IDAsXG5cdHVuZGVybGluZTogZmFsc2UsXG5cdHByaW1hcnk6IGZhbHNlLFxuXHRzZWNvbmRhcnk6IGZhbHNlLFxuXHRyb3VuZGVkOiBmYWxzZSxcbn07XG5cblxuLyoqIFByb3AgVHlwZXMgKi9cblRhYkdyb3VwLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcblx0XHRQcm9wVHlwZXMubm9kZVxuXHRdKSxcblx0dGhlbWU6IFByb3BUeXBlcy5vYmplY3QsXG5cdGFjdGl2ZTogUHJvcFR5cGVzLm51bWJlcixcblx0dW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblx0cHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdHNlY29uZGFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUYWJHcm91cDtcbiJdfQ==