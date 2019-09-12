import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect } from "react";
import { defaultTheme } from "../ui/themes";
import { ListItemStyle } from "./styles";
import useDropdownClick from "../hooks/useDropdownClick";

var ListItem = function ListItem(_ref) {
  var onItemClick = _ref.onItemClick,
      item = _ref.item,
      status = _ref.status,
      children = _ref.children,
      value = _ref.value,
      onClick = _ref.onClick,
      setSelectedID = _ref.setSelectedID,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      props = _objectWithoutProperties(_ref, ["onItemClick", "item", "status", "children", "value", "onClick", "setSelectedID", "active"]);

  var cb = useDropdownClick(onItemClick, children, value, item, onClick);

  if (props.currentSelection) {
    onClick(cb);
  }

  return React.createElement(ListItemStyle, Object.assign({}, props, {
    onClick: cb,
    key: item
  }), children, status && React.createElement("span", {
    style: {
      "float": "right"
    }
  }, status));
};
/** Default Props */


ListItem.defaultProps = {
  theme: defaultTheme.base
};
/** Prop Types */

export default ListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZHJvcGRvd24vTGlzdC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJkZWZhdWx0VGhlbWUiLCJMaXN0SXRlbVN0eWxlIiwidXNlRHJvcGRvd25DbGljayIsIkxpc3RJdGVtIiwib25JdGVtQ2xpY2siLCJpdGVtIiwic3RhdHVzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsIm9uQ2xpY2siLCJzZXRTZWxlY3RlZElEIiwiYWN0aXZlIiwicHJvcHMiLCJjYiIsImN1cnJlbnRTZWxlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJ0aGVtZSIsImJhc2UiXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixRQUFpQyxPQUFqQztBQUdBLFNBQVNDLFlBQVQsUUFBNkIsY0FBN0I7QUFDQSxTQUFTQyxhQUFULFFBQThCLFVBQTlCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsMkJBQTdCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BRVg7QUFBQSxNQURMQyxXQUNLLFFBRExBLFdBQ0s7QUFBQSxNQURRQyxJQUNSLFFBRFFBLElBQ1I7QUFBQSxNQURjQyxNQUNkLFFBRGNBLE1BQ2Q7QUFBQSxNQURzQkMsUUFDdEIsUUFEc0JBLFFBQ3RCO0FBQUEsTUFEZ0NDLEtBQ2hDLFFBRGdDQSxLQUNoQztBQUFBLE1BRHVDQyxPQUN2QyxRQUR1Q0EsT0FDdkM7QUFBQSxNQURnREMsYUFDaEQsUUFEZ0RBLGFBQ2hEO0FBQUEseUJBRCtEQyxNQUMvRDtBQUFBLE1BRCtEQSxNQUMvRCw0QkFEd0UsS0FDeEU7QUFBQSxNQURrRkMsS0FDbEY7O0FBQ0wsTUFBTUMsRUFBRSxHQUFHWCxnQkFBZ0IsQ0FBQ0UsV0FBRCxFQUFjRyxRQUFkLEVBQXdCQyxLQUF4QixFQUErQkgsSUFBL0IsRUFBcUNJLE9BQXJDLENBQTNCOztBQUVBLE1BQUlHLEtBQUssQ0FBQ0UsZ0JBQVYsRUFBNEI7QUFDM0JMLElBQUFBLE9BQU8sQ0FBQ0ksRUFBRCxDQUFQO0FBQ0E7O0FBRUQsU0FDQyxvQkFBQyxhQUFELG9CQUNLRCxLQURMO0FBRUMsSUFBQSxPQUFPLEVBQUVDLEVBRlY7QUFHQyxJQUFBLEdBQUcsRUFBRVI7QUFITixNQUlFRSxRQUpGLEVBS0VELE1BQU0sSUFBSTtBQUFNLElBQUEsS0FBSyxFQUFFO0FBQUUsZUFBTztBQUFUO0FBQWIsS0FBa0NBLE1BQWxDLENBTFosQ0FERDtBQVNBLENBbEJEO0FBb0JBOzs7QUFDQUgsUUFBUSxDQUFDWSxZQUFULEdBQXdCO0FBQ3ZCQyxFQUFBQSxLQUFLLEVBQUVoQixZQUFZLENBQUNpQjtBQURHLENBQXhCO0FBSUE7O0FBS0EsZUFBZWQsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSBcIi4uL3VpL3RoZW1lc1wiO1xuaW1wb3J0IHsgTGlzdEl0ZW1TdHlsZSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHVzZURyb3Bkb3duQ2xpY2sgZnJvbSBcIi4uL2hvb2tzL3VzZURyb3Bkb3duQ2xpY2tcIjtcblxuY29uc3QgTGlzdEl0ZW0gPSAoe1xuXHRvbkl0ZW1DbGljaywgaXRlbSwgc3RhdHVzLCBjaGlsZHJlbiwgdmFsdWUsIG9uQ2xpY2ssIHNldFNlbGVjdGVkSUQsIGFjdGl2ZSA9IGZhbHNlLCAuLi5wcm9wc1xufSkgPT4ge1xuXHRjb25zdCBjYiA9IHVzZURyb3Bkb3duQ2xpY2sob25JdGVtQ2xpY2ssIGNoaWxkcmVuLCB2YWx1ZSwgaXRlbSwgb25DbGljayk7XG5cblx0aWYgKHByb3BzLmN1cnJlbnRTZWxlY3Rpb24pIHtcblx0XHRvbkNsaWNrKGNiKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PExpc3RJdGVtU3R5bGVcblx0XHRcdHsuLi5wcm9wc31cblx0XHRcdG9uQ2xpY2s9e2NifVxuXHRcdFx0a2V5PXtpdGVtfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdHtzdGF0dXMgJiYgPHNwYW4gc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT57c3RhdHVzfTwvc3Bhbj59XG5cdFx0PC9MaXN0SXRlbVN0eWxlPlxuXHQpO1xufTtcblxuLyoqIERlZmF1bHQgUHJvcHMgKi9cbkxpc3RJdGVtLmRlZmF1bHRQcm9wcyA9IHtcblx0dGhlbWU6IGRlZmF1bHRUaGVtZS5iYXNlXG59O1xuXG4vKiogUHJvcCBUeXBlcyAqL1xuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19