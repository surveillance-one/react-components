import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable object-curly-newline */
import React, { useState, Children, cloneElement, useRef } from "react";
import useOutClick from "../hooks/useOutClick";
import useValueChange from "../hooks/useValueChange";
import { Button } from "../button";
import { DropdownContainer, DropdownListMenu, DropdownListContent } from "./styles";

var Dropdown = function Dropdown(_ref) {
  var valueChange = _ref.valueChange,
      title = _ref.title,
      children = _ref.children,
      status = _ref.status,
      _ref$iconBg = _ref.iconBg,
      iconBg = _ref$iconBg === void 0 ? true : _ref$iconBg,
      _ref$iconPosition = _ref.iconPosition,
      iconPosition = _ref$iconPosition === void 0 ? "right" : _ref$iconPosition;
  var node = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      listOpen = _useState2[0],
      setListOpen = _useState2[1];

  var _useState3 = useState(title),
      _useState4 = _slicedToArray(_useState3, 2),
      headerTitle = _useState4[0],
      setHeaderTitle = _useState4[1];

  var _useState5 = useState("-1"),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedID = _useState6[0],
      setSelectedID = _useState6[1];

  useValueChange(valueChange, selectedID);
  useOutClick(setListOpen, node);

  var selectItem = function selectItem(title, id) {
    setHeaderTitle(title);
    setListOpen(false);
    setSelectedID(id);
  };

  return React.createElement(DropdownContainer, {
    tabIndex: "1",
    ref: node,
    onClick: function onClick(e) {
      return setListOpen(!listOpen);
    }
  }, React.createElement(Button, {
    iconBg: iconBg,
    iconPosition: iconPosition,
    iconName: "angle-down"
  }, headerTitle), listOpen && React.createElement(DropdownListMenu, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement(DropdownListContent, null, Children.map(children, function (child, i) {
    return cloneElement(child, {
      item: i,
      currentSelection: headerTitle === child.props.children,
      onItemClick: selectItem,
      status: status
    });
  }))));
};
/** Props */


export default Dropdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZHJvcGRvd24vRHJvcGRvd24uanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsInVzZVJlZiIsInVzZU91dENsaWNrIiwidXNlVmFsdWVDaGFuZ2UiLCJCdXR0b24iLCJEcm9wZG93bkNvbnRhaW5lciIsIkRyb3Bkb3duTGlzdE1lbnUiLCJEcm9wZG93bkxpc3RDb250ZW50IiwiRHJvcGRvd24iLCJ2YWx1ZUNoYW5nZSIsInRpdGxlIiwiY2hpbGRyZW4iLCJzdGF0dXMiLCJpY29uQmciLCJpY29uUG9zaXRpb24iLCJub2RlIiwibGlzdE9wZW4iLCJzZXRMaXN0T3BlbiIsImhlYWRlclRpdGxlIiwic2V0SGVhZGVyVGl0bGUiLCJzZWxlY3RlZElEIiwic2V0U2VsZWN0ZWRJRCIsInNlbGVjdEl0ZW0iLCJpZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJtYXAiLCJjaGlsZCIsImkiLCJpdGVtIiwiY3VycmVudFNlbGVjdGlvbiIsInByb3BzIiwib25JdGVtQ2xpY2siXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixFQUEwQkMsUUFBMUIsRUFBb0NDLFlBQXBDLEVBQWtEQyxNQUFsRCxRQUFnRSxPQUFoRTtBQUdBLE9BQU9DLFdBQVAsTUFBd0Isc0JBQXhCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQix5QkFBM0I7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFdBQXZCO0FBRUEsU0FBU0MsaUJBQVQsRUFBNEJDLGdCQUE1QixFQUE4Q0MsbUJBQTlDLFFBQXlFLFVBQXpFOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BT1g7QUFBQSxNQU5MQyxXQU1LLFFBTkxBLFdBTUs7QUFBQSxNQUxMQyxLQUtLLFFBTExBLEtBS0s7QUFBQSxNQUpMQyxRQUlLLFFBSkxBLFFBSUs7QUFBQSxNQUhMQyxNQUdLLFFBSExBLE1BR0s7QUFBQSx5QkFGTEMsTUFFSztBQUFBLE1BRkxBLE1BRUssNEJBRkksSUFFSjtBQUFBLCtCQURMQyxZQUNLO0FBQUEsTUFETEEsWUFDSyxrQ0FEVSxPQUNWO0FBQ0wsTUFBTUMsSUFBSSxHQUFHZCxNQUFNLEVBQW5COztBQURLLGtCQUUyQkgsUUFBUSxDQUFDLEtBQUQsQ0FGbkM7QUFBQTtBQUFBLE1BRUVrQixRQUZGO0FBQUEsTUFFWUMsV0FGWjs7QUFBQSxtQkFHaUNuQixRQUFRLENBQUNZLEtBQUQsQ0FIekM7QUFBQTtBQUFBLE1BR0VRLFdBSEY7QUFBQSxNQUdlQyxjQUhmOztBQUFBLG1CQUkrQnJCLFFBQVEsQ0FBQyxJQUFELENBSnZDO0FBQUE7QUFBQSxNQUlFc0IsVUFKRjtBQUFBLE1BSWNDLGFBSmQ7O0FBTUxsQixFQUFBQSxjQUFjLENBQUNNLFdBQUQsRUFBY1csVUFBZCxDQUFkO0FBQ0FsQixFQUFBQSxXQUFXLENBQUNlLFdBQUQsRUFBY0YsSUFBZCxDQUFYOztBQUVBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNaLEtBQUQsRUFBUWEsRUFBUixFQUFlO0FBQ2pDSixJQUFBQSxjQUFjLENBQUNULEtBQUQsQ0FBZDtBQUNBTyxJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FJLElBQUFBLGFBQWEsQ0FBQ0UsRUFBRCxDQUFiO0FBQ0EsR0FKRDs7QUFNQSxTQUNDLG9CQUFDLGlCQUFEO0FBQW1CLElBQUEsUUFBUSxFQUFDLEdBQTVCO0FBQWdDLElBQUEsR0FBRyxFQUFFUixJQUFyQztBQUEyQyxJQUFBLE9BQU8sRUFBRSxpQkFBQVMsQ0FBQztBQUFBLGFBQUlQLFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWY7QUFBQTtBQUFyRCxLQUNDLG9CQUFDLE1BQUQ7QUFBUSxJQUFBLE1BQU0sRUFBRUgsTUFBaEI7QUFBd0IsSUFBQSxZQUFZLEVBQUVDLFlBQXRDO0FBQW9ELElBQUEsUUFBUSxFQUFDO0FBQTdELEtBQTJFSSxXQUEzRSxDQURELEVBRUVGLFFBQVEsSUFDUixvQkFBQyxnQkFBRDtBQUFrQixJQUFBLE9BQU8sRUFBRSxpQkFBQVEsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsZUFBRixFQUFKO0FBQUE7QUFBNUIsS0FDQyxvQkFBQyxtQkFBRCxRQUNFMUIsUUFBUSxDQUFDMkIsR0FBVCxDQUFhZixRQUFiLEVBQXVCLFVBQUNnQixLQUFELEVBQVFDLENBQVI7QUFBQSxXQUFjNUIsWUFBWSxDQUFDMkIsS0FBRCxFQUFRO0FBQ3pERSxNQUFBQSxJQUFJLEVBQUVELENBRG1EO0FBRXpERSxNQUFBQSxnQkFBZ0IsRUFBR1osV0FBVyxLQUFLUyxLQUFLLENBQUNJLEtBQU4sQ0FBWXBCLFFBRlU7QUFHekRxQixNQUFBQSxXQUFXLEVBQUVWLFVBSDRDO0FBSXpEVixNQUFBQSxNQUFNLEVBQU5BO0FBSnlELEtBQVIsQ0FBMUI7QUFBQSxHQUF2QixDQURGLENBREQsQ0FIRixDQUREO0FBaUJBLENBdkNEO0FBeUNBOzs7QUFPQSxlQUFlSixRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB1c2VPdXRDbGljayBmcm9tIFwiLi4vaG9va3MvdXNlT3V0Q2xpY2tcIjtcbmltcG9ydCB1c2VWYWx1ZUNoYW5nZSBmcm9tIFwiLi4vaG9va3MvdXNlVmFsdWVDaGFuZ2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9idXR0b25cIjtcblxuaW1wb3J0IHsgRHJvcGRvd25Db250YWluZXIsIERyb3Bkb3duTGlzdE1lbnUsIERyb3Bkb3duTGlzdENvbnRlbnQgfSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgRHJvcGRvd24gPSAoe1xuXHR2YWx1ZUNoYW5nZSxcblx0dGl0bGUsXG5cdGNoaWxkcmVuLFxuXHRzdGF0dXMsXG5cdGljb25CZyA9IHRydWUsXG5cdGljb25Qb3NpdGlvbiA9IFwicmlnaHRcIlxufSkgPT4ge1xuXHRjb25zdCBub2RlID0gdXNlUmVmKCk7XG5cdGNvbnN0IFtsaXN0T3Blbiwgc2V0TGlzdE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbaGVhZGVyVGl0bGUsIHNldEhlYWRlclRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcblx0Y29uc3QgW3NlbGVjdGVkSUQsIHNldFNlbGVjdGVkSURdID0gdXNlU3RhdGUoXCItMVwiKTtcblxuXHR1c2VWYWx1ZUNoYW5nZSh2YWx1ZUNoYW5nZSwgc2VsZWN0ZWRJRCk7XG5cdHVzZU91dENsaWNrKHNldExpc3RPcGVuLCBub2RlKTtcblxuXHRjb25zdCBzZWxlY3RJdGVtID0gKHRpdGxlLCBpZCkgPT4ge1xuXHRcdHNldEhlYWRlclRpdGxlKHRpdGxlKTtcblx0XHRzZXRMaXN0T3BlbihmYWxzZSk7XG5cdFx0c2V0U2VsZWN0ZWRJRChpZCk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8RHJvcGRvd25Db250YWluZXIgdGFiSW5kZXg9XCIxXCIgcmVmPXtub2RlfSBvbkNsaWNrPXtlID0+IHNldExpc3RPcGVuKCFsaXN0T3Blbil9PlxuXHRcdFx0PEJ1dHRvbiBpY29uQmc9e2ljb25CZ30gaWNvblBvc2l0aW9uPXtpY29uUG9zaXRpb259IGljb25OYW1lPVwiYW5nbGUtZG93blwiPntoZWFkZXJUaXRsZX08L0J1dHRvbj5cblx0XHRcdHtsaXN0T3BlbiAmJlxuXHRcdFx0XHQ8RHJvcGRvd25MaXN0TWVudSBvbkNsaWNrPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuXHRcdFx0XHRcdDxEcm9wZG93bkxpc3RDb250ZW50PlxuXHRcdFx0XHRcdFx0e0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcblx0XHRcdFx0XHRcdFx0aXRlbTogaSxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFNlbGVjdGlvbjogKGhlYWRlclRpdGxlID09PSBjaGlsZC5wcm9wcy5jaGlsZHJlbiksXG5cdFx0XHRcdFx0XHRcdG9uSXRlbUNsaWNrOiBzZWxlY3RJdGVtLFxuXHRcdFx0XHRcdFx0XHRzdGF0dXMsXG5cdFx0XHRcdFx0XHR9KSl9XG5cdFx0XHRcdFx0PC9Ecm9wZG93bkxpc3RDb250ZW50PlxuXHRcdFx0XHQ8L0Ryb3Bkb3duTGlzdE1lbnU+XG5cdFx0XHR9XG5cdFx0PC9Ecm9wZG93bkNvbnRhaW5lcj5cblx0KTtcbn07XG5cbi8qKiBQcm9wcyAqL1xuRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mKFtcblx0XHRQcm9wVHlwZXMubm9kZVxuXHRdKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iXX0=