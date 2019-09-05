import { useCallback } from "react";

function useDropdownClick(onItemClick, children, value, item, onClick) {
  var callFunc = useCallback(function (event) {
    onItemClick(children, value || item);
    if (onClick) onClick(event);
  }, [onItemClick, children, value, item, onClick]);
  return callFunc;
}

export default useDropdownClick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaG9va3MvdXNlRHJvcGRvd25DbGljay5qcyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZURyb3Bkb3duQ2xpY2siLCJvbkl0ZW1DbGljayIsImNoaWxkcmVuIiwidmFsdWUiLCJpdGVtIiwib25DbGljayIsImNhbGxGdW5jIiwiZXZlbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFdBQVQsUUFBNEIsT0FBNUI7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDQyxRQUF2QyxFQUFpREMsS0FBakQsRUFBd0RDLElBQXhELEVBQThEQyxPQUE5RCxFQUF1RTtBQUN0RSxNQUFNQyxRQUFRLEdBQUdQLFdBQVcsQ0FBQyxVQUFDUSxLQUFELEVBQVc7QUFDdkNOLElBQUFBLFdBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFLLElBQUlDLElBQXBCLENBQVg7QUFDQSxRQUFJQyxPQUFKLEVBQWFBLE9BQU8sQ0FBQ0UsS0FBRCxDQUFQO0FBQ2IsR0FIMkIsRUFHekIsQ0FBQ04sV0FBRCxFQUFjQyxRQUFkLEVBQXdCQyxLQUF4QixFQUErQkMsSUFBL0IsRUFBcUNDLE9BQXJDLENBSHlCLENBQTVCO0FBS0EsU0FBT0MsUUFBUDtBQUNBOztBQUVELGVBQWVOLGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gdXNlRHJvcGRvd25DbGljayhvbkl0ZW1DbGljaywgY2hpbGRyZW4sIHZhbHVlLCBpdGVtLCBvbkNsaWNrKSB7XG5cdGNvbnN0IGNhbGxGdW5jID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG5cdFx0b25JdGVtQ2xpY2soY2hpbGRyZW4sIHZhbHVlIHx8IGl0ZW0pO1xuXHRcdGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcblx0fSwgW29uSXRlbUNsaWNrLCBjaGlsZHJlbiwgdmFsdWUsIGl0ZW0sIG9uQ2xpY2tdKTtcblxuXHRyZXR1cm4gY2FsbEZ1bmM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURyb3Bkb3duQ2xpY2s7XG4iXX0=