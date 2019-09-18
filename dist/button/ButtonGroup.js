import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import { ButtonGroupStyled } from "./styles";
/**
 * @title ButtonGroup component
 *
 * @summary Components/ButtonGroup groups Buttons together into a bar
 * @see StyledComponents
 * @see Button (components/button)
 *
 * @version 1.0.2
 * @author [SurveillanceOne][Markus Hudobnik](https://github.com/SurveillanceOne)
 */

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(ButtonGroupStyled, props, React.Children.map(children, function (child, i) {
    return React.cloneElement(child, props);
  }));
};

export default ButtonGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYnV0dG9uL0J1dHRvbkdyb3VwLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbkdyb3VwU3R5bGVkIiwiQnV0dG9uR3JvdXAiLCJjaGlsZHJlbiIsInByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBR0EsU0FBU0MsaUJBQVQsUUFBa0MsVUFBbEM7QUFFQTs7Ozs7Ozs7Ozs7QUFXQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxLQUFoQjs7QUFBQSxTQUNuQixvQkFBQyxpQkFBRCxFQUF1QkEsS0FBdkIsRUFDRUosS0FBSyxDQUFDSyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJILFFBQW5CLEVBQTZCLFVBQUNJLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLFdBQWNSLEtBQUssQ0FBQ1MsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEJILEtBQTFCLENBQWQ7QUFBQSxHQUE3QixDQURGLENBRG1CO0FBQUEsQ0FBcEI7O0FBZ0JBLGVBQWVGLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCB7IEJ1dHRvbkdyb3VwU3R5bGVkIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbi8qKlxuICogQHRpdGxlIEJ1dHRvbkdyb3VwIGNvbXBvbmVudFxuICpcbiAqIEBzdW1tYXJ5IENvbXBvbmVudHMvQnV0dG9uR3JvdXAgZ3JvdXBzIEJ1dHRvbnMgdG9nZXRoZXIgaW50byBhIGJhclxuICogQHNlZSBTdHlsZWRDb21wb25lbnRzXG4gKiBAc2VlIEJ1dHRvbiAoY29tcG9uZW50cy9idXR0b24pXG4gKlxuICogQHZlcnNpb24gMS4wLjJcbiAqIEBhdXRob3IgW1N1cnZlaWxsYW5jZU9uZV1bTWFya3VzIEh1ZG9ibmlrXShodHRwczovL2dpdGh1Yi5jb20vU3VydmVpbGxhbmNlT25lKVxuICovXG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcblx0PEJ1dHRvbkdyb3VwU3R5bGVkIHsuLi5wcm9wc30+XG5cdFx0e1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKSl9XG5cdDwvQnV0dG9uR3JvdXBTdHlsZWQ+XG4pO1xuXG5CdXR0b25Hcm91cC5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG5cdFx0UHJvcFR5cGVzLm5vZGVcblx0XSkuaXNSZXF1aXJlZCxcblx0c2Vjb25kYXJ5OiBQcm9wVHlwZXMuYm9vbCxcblx0cHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG5cdGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Hcm91cDtcbiJdfQ==