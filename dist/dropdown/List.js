import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useCallback } from "react";
import { defaultTheme } from "../ui/themes";
import { ListItemStyle } from "./styles";

var ListItem = function ListItem(_ref) {
  var onItemClick = _ref.onItemClick,
      item = _ref.item,
      status = _ref.status,
      children = _ref.children,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["onItemClick", "item", "status", "children", "value"]);

  return React.createElement(ListItemStyle, Object.assign({}, props, {
    onClick: useCallback(function () {
      return onItemClick(children, value || item);
    }, [onItemClick, children, value, item]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZHJvcGRvd24vTGlzdC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsImRlZmF1bHRUaGVtZSIsIkxpc3RJdGVtU3R5bGUiLCJMaXN0SXRlbSIsIm9uSXRlbUNsaWNrIiwiaXRlbSIsInN0YXR1cyIsImNoaWxkcmVuIiwidmFsdWUiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsInRoZW1lIiwiYmFzZSJdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFdBQWhCLFFBQW1DLE9BQW5DO0FBR0EsU0FBU0MsWUFBVCxRQUE2QixjQUE3QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsVUFBOUI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUNoQkMsV0FEZ0IsUUFDaEJBLFdBRGdCO0FBQUEsTUFDSEMsSUFERyxRQUNIQSxJQURHO0FBQUEsTUFDR0MsTUFESCxRQUNHQSxNQURIO0FBQUEsTUFDV0MsUUFEWCxRQUNXQSxRQURYO0FBQUEsTUFDcUJDLEtBRHJCLFFBQ3FCQSxLQURyQjtBQUFBLE1BQytCQyxLQUQvQjs7QUFBQSxTQUdoQixvQkFBQyxhQUFELG9CQUNLQSxLQURMO0FBRUMsSUFBQSxPQUFPLEVBQUVULFdBQVcsQ0FBQztBQUFBLGFBQU1JLFdBQVcsQ0FBQ0csUUFBRCxFQUFXQyxLQUFLLElBQUlILElBQXBCLENBQWpCO0FBQUEsS0FBRCxFQUE2QyxDQUFDRCxXQUFELEVBQWNHLFFBQWQsRUFBd0JDLEtBQXhCLEVBQStCSCxJQUEvQixDQUE3QyxDQUZyQjtBQUdDLElBQUEsR0FBRyxFQUFFQTtBQUhOLE1BSUVFLFFBSkYsRUFLRUQsTUFBTSxJQUFJO0FBQU0sSUFBQSxLQUFLLEVBQUU7QUFBRSxlQUFPO0FBQVQ7QUFBYixLQUFrQ0EsTUFBbEMsQ0FMWixDQUhnQjtBQUFBLENBQWpCO0FBWUE7OztBQUNBSCxRQUFRLENBQUNPLFlBQVQsR0FBd0I7QUFDdkJDLEVBQUFBLEtBQUssRUFBRVYsWUFBWSxDQUFDVztBQURHLENBQXhCO0FBSUE7O0FBS0EsZUFBZVQsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tIFwiLi4vdWkvdGhlbWVzXCI7XG5pbXBvcnQgeyBMaXN0SXRlbVN0eWxlIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IExpc3RJdGVtID0gKHtcblx0b25JdGVtQ2xpY2ssIGl0ZW0sIHN0YXR1cywgY2hpbGRyZW4sIHZhbHVlLCAuLi5wcm9wc1xufSkgPT4gKFxuXHQ8TGlzdEl0ZW1TdHlsZVxuXHRcdHsuLi5wcm9wc31cblx0XHRvbkNsaWNrPXt1c2VDYWxsYmFjaygoKSA9PiBvbkl0ZW1DbGljayhjaGlsZHJlbiwgdmFsdWUgfHwgaXRlbSksIFtvbkl0ZW1DbGljaywgY2hpbGRyZW4sIHZhbHVlLCBpdGVtXSl9XG5cdFx0a2V5PXtpdGVtfT5cblx0XHR7Y2hpbGRyZW59XG5cdFx0e3N0YXR1cyAmJiA8c3BhbiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PntzdGF0dXN9PC9zcGFuPn1cblx0PC9MaXN0SXRlbVN0eWxlPlxuKTtcblxuLyoqIERlZmF1bHQgUHJvcHMgKi9cbkxpc3RJdGVtLmRlZmF1bHRQcm9wcyA9IHtcblx0dGhlbWU6IGRlZmF1bHRUaGVtZS5iYXNlXG59O1xuXG4vKiogUHJvcCBUeXBlcyAqL1xuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19