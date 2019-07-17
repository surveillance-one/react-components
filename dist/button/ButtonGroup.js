import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import styled from "styled-components";

/**
 * @title ButtonGroup component
 *
 * @summary Components/ButtonGroup groups Buttons together into a bar
 * @see StyledComponents
 * @see Button (components/button)
 *
 * @version 1.0.0
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */
var ButtonGroupStyled = styled.div.withConfig({
  displayName: "ButtonGroup__ButtonGroupStyled",
  componentId: "sc-19p0mxe-0"
})(["button:not(:first-child):not(:last-child){border-radius:0;margin:0;border-right:solid white 1px;}button:first-child{border-radius:.3rem 0 0 .3rem;border-right:solid white 1px;}button:last-child{border-radius:0 .3rem .3rem 0;}"]);
/**
 * @class ButtonGroup
 * @param {any} { children, ...props }
 *
 * @description groups buttons together
 */

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(ButtonGroupStyled, null, React.Children.map(children, function (child, i) {
    return React.cloneElement(child, props);
  }));
};

export default ButtonGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYnV0dG9uL0J1dHRvbkdyb3VwLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJ1dHRvbkdyb3VwU3R5bGVkIiwiZGl2IiwiQnV0dG9uR3JvdXAiLCJjaGlsZHJlbiIsInByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBR0E7Ozs7Ozs7Ozs7QUFXQSxJQUFNQyxpQkFBaUIsR0FBR0QsTUFBTSxDQUFDRSxHQUFWO0FBQUE7QUFBQTtBQUFBLHlPQUF2QjtBQWVBOzs7Ozs7O0FBTUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFnQkMsS0FBaEI7O0FBQUEsU0FDbkIsb0JBQUMsaUJBQUQsUUFDRU4sS0FBSyxDQUFDTyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJILFFBQW5CLEVBQTZCLFVBQUNJLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLFdBQWNWLEtBQUssQ0FBQ1csWUFBTixDQUFtQkYsS0FBbkIsRUFBMEJILEtBQTFCLENBQWQ7QUFBQSxHQUE3QixDQURGLENBRG1CO0FBQUEsQ0FBcEI7O0FBYUEsZUFBZUYsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbi8qKlxuICogQHRpdGxlIEJ1dHRvbkdyb3VwIGNvbXBvbmVudFxuICpcbiAqIEBzdW1tYXJ5IENvbXBvbmVudHMvQnV0dG9uR3JvdXAgZ3JvdXBzIEJ1dHRvbnMgdG9nZXRoZXIgaW50byBhIGJhclxuICogQHNlZSBTdHlsZWRDb21wb25lbnRzXG4gKiBAc2VlIEJ1dHRvbiAoY29tcG9uZW50cy9idXR0b24pXG4gKlxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBhdXRob3IgW1N1cnZlaWxsYW5jZU9uZV1bTWFya3VzIEh1ZG9ibmlrXShodHRwczovL2dpdGh1Yi5jb20vU3VydmVpbGxhbmNlT25lKVxuICovXG5cbmNvbnN0IEJ1dHRvbkdyb3VwU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgYnV0dG9uOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGUgMXB4O1xuICB9XG4gIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW0gMCAwIC4zcmVtO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGUgMXB4O1xuICB9XG4gIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIC4zcmVtIC4zcmVtIDA7XG4gIH1cbmA7XG5cbi8qKlxuICogQGNsYXNzIEJ1dHRvbkdyb3VwXG4gKiBAcGFyYW0ge2FueX0geyBjaGlsZHJlbiwgLi4ucHJvcHMgfVxuICpcbiAqIEBkZXNjcmlwdGlvbiBncm91cHMgYnV0dG9ucyB0b2dldGhlclxuICovXG5jb25zdCBCdXR0b25Hcm91cCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG5cdDxCdXR0b25Hcm91cFN0eWxlZD5cblx0XHR7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpKX1cblx0PC9CdXR0b25Hcm91cFN0eWxlZD5cbik7XG5cbkJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuXHRcdFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcblx0XHRQcm9wVHlwZXMubm9kZVxuXHRdKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uR3JvdXA7XG4iXX0=