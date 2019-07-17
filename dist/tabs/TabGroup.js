import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Children, cloneElement, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { defaultTheme } from "../ui/themes";
import { TabsList, TabsContent, css_tabsbase } from "./styles";
/**
 * @title Tabs component
 *
 * @summary Components/Tab is a simple Tab component using Styled Components and made for reusability
 * @see StyledComponents
 *
 * @version 1.0.0
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
      props = _objectWithoutProperties(_ref, ["children", "className", "active", "primary", "secondary", "rounded", "underline"]);

  var _useState = useState(active),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  return React.createElement("div", Object.assign({
    className: className
  }, props), React.createElement(TabsList, null, Children.map(children, function (child, i) {
    return cloneElement(child, {
      item: i,
      onTabClick: setActiveTab,
      currentTab: activeTab === i,
      primaryAll: primary,
      secondaryAll: secondary,
      roundedAll: rounded,
      underlineAll: underline
    });
  })), React.createElement(TabsContent, null, Children.map(children, function (child, i) {
    if (i !== activeTab) return undefined;
    return child.props.children;
  })));
};

var TabGroup = styled(TabGroupComponent).withConfig({
  displayName: "TabGroup",
  componentId: "sc-1a6ofq9-0"
})(["", ""], css_tabsbase);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdGFicy9UYWJHcm91cC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsInVzZVN0YXRlIiwic3R5bGVkIiwiUHJvcFR5cGVzIiwiZGVmYXVsdFRoZW1lIiwiVGFic0xpc3QiLCJUYWJzQ29udGVudCIsImNzc190YWJzYmFzZSIsIlRhYkdyb3VwQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJhY3RpdmUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwicm91bmRlZCIsInVuZGVybGluZSIsInByb3BzIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwibWFwIiwiY2hpbGQiLCJpIiwiaXRlbSIsIm9uVGFiQ2xpY2siLCJjdXJyZW50VGFiIiwicHJpbWFyeUFsbCIsInNlY29uZGFyeUFsbCIsInJvdW5kZWRBbGwiLCJ1bmRlcmxpbmVBbGwiLCJ1bmRlZmluZWQiLCJUYWJHcm91cCIsImRlZmF1bHRQcm9wcyIsInRoZW1lIiwiYmFzZSIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwib2JqZWN0IiwibnVtYmVyIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixFQUEwQkMsWUFBMUIsRUFBd0NDLFFBQXhDLFFBQXdELE9BQXhEO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBRUEsU0FBU0MsWUFBVCxRQUE2QixjQUE3QjtBQUNBLFNBQ0NDLFFBREQsRUFFQ0MsV0FGRCxFQUdDQyxZQUhELFFBSU8sVUFKUDtBQU1BOzs7Ozs7Ozs7O0FBVUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUVwQjtBQUFBLE1BRExDLFFBQ0ssUUFETEEsUUFDSztBQUFBLE1BREtDLFNBQ0wsUUFES0EsU0FDTDtBQUFBLE1BRGdCQyxNQUNoQixRQURnQkEsTUFDaEI7QUFBQSxNQUR3QkMsT0FDeEIsUUFEd0JBLE9BQ3hCO0FBQUEsTUFEaUNDLFNBQ2pDLFFBRGlDQSxTQUNqQztBQUFBLE1BRDRDQyxPQUM1QyxRQUQ0Q0EsT0FDNUM7QUFBQSxNQURxREMsU0FDckQsUUFEcURBLFNBQ3JEO0FBQUEsTUFEbUVDLEtBQ25FOztBQUFBLGtCQUM2QmYsUUFBUSxDQUFDVSxNQUFELENBRHJDO0FBQUE7QUFBQSxNQUNFTSxTQURGO0FBQUEsTUFDYUMsWUFEYjs7QUFHTCxTQUNDO0FBQUssSUFBQSxTQUFTLEVBQUVSO0FBQWhCLEtBQStCTSxLQUEvQixHQUNDLG9CQUFDLFFBQUQsUUFDRWpCLFFBQVEsQ0FBQ29CLEdBQVQsQ0FBYVYsUUFBYixFQUF1QixVQUFDVyxLQUFELEVBQVFDLENBQVI7QUFBQSxXQUFjckIsWUFBWSxDQUFDb0IsS0FBRCxFQUFRO0FBQ3pERSxNQUFBQSxJQUFJLEVBQUVELENBRG1EO0FBRXpERSxNQUFBQSxVQUFVLEVBQUVMLFlBRjZDO0FBR3pETSxNQUFBQSxVQUFVLEVBQUdQLFNBQVMsS0FBS0ksQ0FIOEI7QUFJekRJLE1BQUFBLFVBQVUsRUFBRWIsT0FKNkM7QUFLekRjLE1BQUFBLFlBQVksRUFBRWIsU0FMMkM7QUFNekRjLE1BQUFBLFVBQVUsRUFBRWIsT0FONkM7QUFPekRjLE1BQUFBLFlBQVksRUFBRWI7QUFQMkMsS0FBUixDQUExQjtBQUFBLEdBQXZCLENBREYsQ0FERCxFQVlDLG9CQUFDLFdBQUQsUUFDRWhCLFFBQVEsQ0FBQ29CLEdBQVQsQ0FBYVYsUUFBYixFQUF1QixVQUFDVyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUNyQyxRQUFJQSxDQUFDLEtBQUtKLFNBQVYsRUFBcUIsT0FBT1ksU0FBUDtBQUNyQixXQUFPVCxLQUFLLENBQUNKLEtBQU4sQ0FBWVAsUUFBbkI7QUFDQSxHQUhBLENBREYsQ0FaRCxDQUREO0FBcUJBLENBMUJEOztBQTRCQSxJQUFNcUIsUUFBUSxHQUFHNUIsTUFBTSxDQUFDTSxpQkFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGFBQ1hELFlBRFcsQ0FBZDtBQUlBOztBQUNBdUIsUUFBUSxDQUFDQyxZQUFULEdBQXdCO0FBQ3ZCdEIsRUFBQUEsUUFBUSxFQUFFLEVBRGE7QUFFdkJ1QixFQUFBQSxLQUFLLEVBQUU1QixZQUFZLENBQUM2QixJQUZHO0FBR3ZCdEIsRUFBQUEsTUFBTSxFQUFFLENBSGU7QUFJdkJJLEVBQUFBLFNBQVMsRUFBRSxLQUpZO0FBS3ZCSCxFQUFBQSxPQUFPLEVBQUUsS0FMYztBQU12QkMsRUFBQUEsU0FBUyxFQUFFLEtBTlk7QUFPdkJDLEVBQUFBLE9BQU8sRUFBRTtBQVBjLENBQXhCO0FBV0E7O0FBQ0FnQixRQUFRLENBQUNJLFNBQVQsR0FBcUI7QUFDcEJ6QixFQUFBQSxRQUFRLEVBQUVOLFNBQVMsQ0FBQ2dDLFNBQVYsQ0FBb0IsQ0FDN0JoQyxTQUFTLENBQUNpQyxPQUFWLENBQWtCakMsU0FBUyxDQUFDa0MsSUFBNUIsQ0FENkIsRUFFN0JsQyxTQUFTLENBQUNrQyxJQUZtQixDQUFwQixDQURVO0FBS3BCTCxFQUFBQSxLQUFLLEVBQUU3QixTQUFTLENBQUNtQyxNQUxHO0FBTXBCM0IsRUFBQUEsTUFBTSxFQUFFUixTQUFTLENBQUNvQyxNQU5FO0FBT3BCeEIsRUFBQUEsU0FBUyxFQUFFWixTQUFTLENBQUNxQyxJQVBEO0FBUXBCNUIsRUFBQUEsT0FBTyxFQUFFVCxTQUFTLENBQUNxQyxJQVJDO0FBU3BCM0IsRUFBQUEsU0FBUyxFQUFFVixTQUFTLENBQUNxQyxJQVREO0FBVXBCMUIsRUFBQUEsT0FBTyxFQUFFWCxTQUFTLENBQUNxQztBQVZDLENBQXJCO0FBY0EsZUFBZVYsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuaW1wb3J0IHtcblx0VGFic0xpc3QsXG5cdFRhYnNDb250ZW50LFxuXHRjc3NfdGFic2Jhc2Vcbn0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbi8qKlxuICogQHRpdGxlIFRhYnMgY29tcG9uZW50XG4gKlxuICogQHN1bW1hcnkgQ29tcG9uZW50cy9UYWIgaXMgYSBzaW1wbGUgVGFiIGNvbXBvbmVudCB1c2luZyBTdHlsZWQgQ29tcG9uZW50cyBhbmQgbWFkZSBmb3IgcmV1c2FiaWxpdHlcbiAqIEBzZWUgU3R5bGVkQ29tcG9uZW50c1xuICpcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKiBAYXV0aG9yIFtNYXJrdXMgSHVkb2JuaWtdKGh0dHBzOi8vZ2l0aHViLmNvbS9ybmFya3VzKVxuICovXG5cbmNvbnN0IFRhYkdyb3VwQ29tcG9uZW50ID0gKHtcblx0Y2hpbGRyZW4sIGNsYXNzTmFtZSwgYWN0aXZlLCBwcmltYXJ5LCBzZWNvbmRhcnksIHJvdW5kZWQsIHVuZGVybGluZSwgLi4ucHJvcHNcbn0pID0+IHtcblx0Y29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKGFjdGl2ZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4ucHJvcHN9PlxuXHRcdFx0PFRhYnNMaXN0PlxuXHRcdFx0XHR7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IGNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdFx0XHRcdGl0ZW06IGksXG5cdFx0XHRcdFx0b25UYWJDbGljazogc2V0QWN0aXZlVGFiLFxuXHRcdFx0XHRcdGN1cnJlbnRUYWI6IChhY3RpdmVUYWIgPT09IGkpLFxuXHRcdFx0XHRcdHByaW1hcnlBbGw6IHByaW1hcnksXG5cdFx0XHRcdFx0c2Vjb25kYXJ5QWxsOiBzZWNvbmRhcnksXG5cdFx0XHRcdFx0cm91bmRlZEFsbDogcm91bmRlZCxcblx0XHRcdFx0XHR1bmRlcmxpbmVBbGw6IHVuZGVybGluZSxcblx0XHRcdFx0fSkpfVxuXHRcdFx0PC9UYWJzTGlzdD5cblx0XHRcdDxUYWJzQ29udGVudD5cblx0XHRcdFx0e0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGkgIT09IGFjdGl2ZVRhYikgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0XHRyZXR1cm4gY2hpbGQucHJvcHMuY2hpbGRyZW47XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9UYWJzQ29udGVudD5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IFRhYkdyb3VwID0gc3R5bGVkKFRhYkdyb3VwQ29tcG9uZW50KWBcblx0JHtjc3NfdGFic2Jhc2V9XG5gO1xuXG4vKiogRGVmYXVsdCBQcm9wcyAqL1xuVGFiR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuXHRjaGlsZHJlbjogXCJcIixcblx0dGhlbWU6IGRlZmF1bHRUaGVtZS5iYXNlLFxuXHRhY3RpdmU6IDAsXG5cdHVuZGVybGluZTogZmFsc2UsXG5cdHByaW1hcnk6IGZhbHNlLFxuXHRzZWNvbmRhcnk6IGZhbHNlLFxuXHRyb3VuZGVkOiBmYWxzZSxcbn07XG5cblxuLyoqIFByb3AgVHlwZXMgKi9cblRhYkdyb3VwLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcblx0XHRQcm9wVHlwZXMubm9kZVxuXHRdKSxcblx0dGhlbWU6IFByb3BUeXBlcy5vYmplY3QsXG5cdGFjdGl2ZTogUHJvcFR5cGVzLm51bWJlcixcblx0dW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblx0cHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdHNlY29uZGFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdHJvdW5kZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUYWJHcm91cDtcbiJdfQ==