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

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      initialRender = _useState4[0],
      setInitialRender = _useState4[1];

  var _useState5 = useState({
    width: "",
    left: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      activeRef = _useState6[0],
      setActiveRef = _useState6[1];

  setInitialRender(false);
  return React.createElement("div", Object.assign({
    className: className
  }, props), React.createElement(TabsList, {
    slider: slider
  }, slider && React.createElement(Selector, {
    width: activeRef.width,
    left: activeRef.left
  }), Children.map(children, function (child, i) {
    return cloneElement(child, {
      item: i,
      onTabClick: setActiveTab,
      onSendRef: setActiveRef,
      currentTab: activeTab === i,
      primaryAll: primary,
      secondaryAll: secondary,
      roundedAll: rounded,
      underlineAll: underline,
      slider: slider,
      initialRender: initialRender
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
  componentId: "sc-1brek3u-0"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9UYWJHcm91cC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsInVzZVN0YXRlIiwic3R5bGVkIiwiUHJvcFR5cGVzIiwiZGVmYXVsdFRoZW1lIiwiVGFic0xpc3QiLCJUYWJzQ29udGVudCIsIlNlbGVjdG9yIiwiY3NzX3RhYnNiYXNlIiwiY3NzX3RhYnNzbGlkZXIiLCJUYWJHcm91cENvbXBvbmVudCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInJvdW5kZWQiLCJ1bmRlcmxpbmUiLCJzbGlkZXIiLCJwcm9wcyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImluaXRpYWxSZW5kZXIiLCJzZXRJbml0aWFsUmVuZGVyIiwid2lkdGgiLCJsZWZ0IiwiYWN0aXZlUmVmIiwic2V0QWN0aXZlUmVmIiwibWFwIiwiY2hpbGQiLCJpIiwiaXRlbSIsIm9uVGFiQ2xpY2siLCJvblNlbmRSZWYiLCJjdXJyZW50VGFiIiwicHJpbWFyeUFsbCIsInNlY29uZGFyeUFsbCIsInJvdW5kZWRBbGwiLCJ1bmRlcmxpbmVBbGwiLCJ1bmRlZmluZWQiLCJUYWJHcm91cCIsInAiLCJkZWZhdWx0UHJvcHMiLCJ0aGVtZSIsImJhc2UiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwibm9kZSIsIm9iamVjdCIsIm51bWJlciIsImJvb2wiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsUUFBaEIsRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxRQUF3RCxPQUF4RDtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUdBLFNBQVNDLFlBQVQsUUFBNkIsY0FBN0I7QUFDQSxTQUNDQyxRQURELEVBRUNDLFdBRkQsRUFHQ0MsUUFIRCxFQUlDQyxZQUpELEVBS0NDLGNB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WUFBWSxDQUFDd0MsSUFGRztBQUd2Qi9CLEVBQUFBLE1BQU0sRUFBRSxDQUhlO0FBSXZCSSxFQUFBQSxTQUFTLEVBQUUsS0FKWTtBQUt2QkgsRUFBQUEsT0FBTyxFQUFFLEtBTGM7QUFNdkJDLEVBQUFBLFNBQVMsRUFBRSxLQU5ZO0FBT3ZCQyxFQUFBQSxPQUFPLEVBQUU7QUFQYyxDQUF4QjtBQVdBOztBQUNBd0IsUUFBUSxDQUFDSyxTQUFULEdBQXFCO0FBQ3BCbEMsRUFBQUEsUUFBUSxFQUFFUixTQUFTLENBQUMyQyxTQUFWLENBQW9CLENBQzdCM0MsU0FBUyxDQUFDNEMsT0FBVixDQUFrQjVDLFNBQVMsQ0FBQzZDLElBQTVCLENBRDZCLEVBRTdCN0MsU0FBUyxDQUFDNkMsSUFGbUIsQ0FBcEIsQ0FEVTtBQUtwQkwsRUFBQUEsS0FBSyxFQUFFeEMsU0FBUyxDQUFDOEMsTUFMRztBQU1wQnBDLEVBQUFBLE1BQU0sRUFBRVYsU0FBUyxDQUFDK0MsTUFORTtBQU9wQmpDLEVBQUFBLFNBQVMsRUFBRWQsU0FBUyxDQUFDZ0QsSUFQRDtBQVFwQnJDLEVBQUFBLE9BQU8sRUFBRVgsU0FBUyxDQUFDZ0QsSUFSQztBQVNwQnBDLEVBQUFBLFNBQVMsRUFBRVosU0FBUyxDQUFDZ0QsSUFURDtBQVVwQm5DLEVBQUFBLE9BQU8sRUFBRWIsU0FBUyxDQUFDZ0Q7QUFWQyxDQUFyQjtBQWNBLGVBQWVYLFFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cblxuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuaW1wb3J0IHtcblx0VGFic0xpc3QsXG5cdFRhYnNDb250ZW50LFxuXHRTZWxlY3Rvcixcblx0Y3NzX3RhYnNiYXNlLFxuXHRjc3NfdGFic3NsaWRlclxufSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuLyoqXG4gKiBAdGl0bGUgVGFicyBjb21wb25lbnRcbiAqXG4gKiBAc3VtbWFyeSBDb21wb25lbnRzL1RhYiBpcyBhIHNpbXBsZSBUYWIgY29tcG9uZW50IHVzaW5nIFN0eWxlZCBDb21wb25lbnRzIGFuZCBtYWRlIGZvciByZXVzYWJpbGl0eVxuICogQHNlZSBTdHlsZWRDb21wb25lbnRzXG4gKlxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgW01hcmt1cyBIdWRvYm5pa10oaHR0cHM6Ly9naXRodWIuY29tL3JuYXJrdXMpXG4gKi9cblxuY29uc3QgVGFiR3JvdXBDb21wb25lbnQgPSAoe1xuXHRjaGlsZHJlbiwgY2xhc3NOYW1lLCBhY3RpdmUsIHByaW1hcnksIHNlY29uZGFyeSwgcm91bmRlZCwgdW5kZXJsaW5lLCBzbGlkZXIsIC4uLnByb3BzXG59KSA9PiB7XG5cdGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShhY3RpdmUpO1xuXHRjb25zdCBbaW5pdGlhbFJlbmRlciwgc2V0SW5pdGlhbFJlbmRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW2FjdGl2ZVJlZiwgc2V0QWN0aXZlUmVmXSA9IHVzZVN0YXRlKHtcblx0XHR3aWR0aDogXCJcIixcblx0XHRsZWZ0OiBcIlwiXG5cdH0pO1xuXG5cdHNldEluaXRpYWxSZW5kZXIoZmFsc2UpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfT5cblx0XHRcdDxUYWJzTGlzdCBzbGlkZXI9e3NsaWRlcn0+XG5cdFx0XHRcdHtzbGlkZXIgJiYgPFNlbGVjdG9yIHdpZHRoPXthY3RpdmVSZWYud2lkdGh9IGxlZnQ9e2FjdGl2ZVJlZi5sZWZ0fT48L1NlbGVjdG9yPn1cblx0XHRcdFx0e0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcblx0XHRcdFx0XHRpdGVtOiBpLFxuXHRcdFx0XHRcdG9uVGFiQ2xpY2s6IHNldEFjdGl2ZVRhYixcblx0XHRcdFx0XHRvblNlbmRSZWY6IHNldEFjdGl2ZVJlZixcblx0XHRcdFx0XHRjdXJyZW50VGFiOiAoYWN0aXZlVGFiID09PSBpKSxcblx0XHRcdFx0XHRwcmltYXJ5QWxsOiBwcmltYXJ5LFxuXHRcdFx0XHRcdHNlY29uZGFyeUFsbDogc2Vjb25kYXJ5LFxuXHRcdFx0XHRcdHJvdW5kZWRBbGw6IHJvdW5kZWQsXG5cdFx0XHRcdFx0dW5kZXJsaW5lQWxsOiB1bmRlcmxpbmUsXG5cdFx0XHRcdFx0c2xpZGVyLFxuXHRcdFx0XHRcdGluaXRpYWxSZW5kZXJcblx0XHRcdFx0fSkpfVxuXHRcdFx0PC9UYWJzTGlzdD5cblx0XHRcdHshc2xpZGVyICYmIDxUYWJzQ29udGVudCBzbGlkZXI9e3NsaWRlcn0+XG5cdFx0XHRcdHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuXHRcdFx0XHRcdGlmIChpICE9PSBhY3RpdmVUYWIpIHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0cmV0dXJuIGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvVGFic0NvbnRlbnQ+fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgVGFiR3JvdXAgPSBzdHlsZWQoVGFiR3JvdXBDb21wb25lbnQpYFxuXHQke2Nzc190YWJzYmFzZX1cblxuXHQke1RhYnNMaXN0fSB7XG5cdFx0JHtwID0+IHAuc2xpZGVyICYmIGNzc190YWJzc2xpZGVyfVxuXHR9XG5gO1xuXG4vKiogRGVmYXVsdCBQcm9wcyAqL1xuVGFiR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuXHRjaGlsZHJlbjogXCJcIixcblx0dGhlbWU6IGRlZmF1bHRUaGVtZS5iYXNlLFxuXHRhY3RpdmU6IDAsXG5cdHVuZGVybGluZTogZmFsc2UsXG5cdHByaW1hcnk6IGZhbHNlLFxuXHRzZWNvbmRhcnk6IGZhbHNlLFxuXHRyb3VuZGVkOiBmYWxzZSxcbn07XG5cblxuLyoqIFByb3AgVHlwZXMgKi9cblRhYkdyb3VwLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcblx0XHRQcm9wVHlwZXMubm9kZVxuXHRdKSxcblx0dGhlbWU6IFByb3BUeXBlcy5vYmplY3QsXG5cdGFjdGl2ZTogUHJvcFR5cGVzLm51bWJlcixcblx0dW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblx0cHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdHNlY29uZGFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUYWJHcm91cDtcbiJdfQ==