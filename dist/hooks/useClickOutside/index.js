import { useEffect } from "react";

function useOutsideClick(cb, node) {
  useEffect(function () {
    function handleClickOutside(e) {
      if (node.current.contains(e.target)) return;
      cb();
    }

    window.addEventListener("mousedown", handleClickOutside);
    return function () {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export default useOutsideClick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaG9va3MvdXNlQ2xpY2tPdXRzaWRlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VPdXRzaWRlQ2xpY2siLCJjYiIsIm5vZGUiLCJoYW5kbGVDbGlja091dHNpZGUiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVQsUUFBMEIsT0FBMUI7O0FBRUEsU0FBU0MsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQ2xDSCxFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNmLGFBQVNJLGtCQUFULENBQTRCQyxDQUE1QixFQUErQjtBQUM5QixVQUFJRixJQUFJLENBQUNHLE9BQUwsQ0FBYUMsUUFBYixDQUFzQkYsQ0FBQyxDQUFDRyxNQUF4QixDQUFKLEVBQXFDO0FBQ3JDTixNQUFBQSxFQUFFO0FBQ0Y7O0FBQ0RPLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNOLGtCQUFyQztBQUNBLFdBQU8sWUFBTTtBQUNaSyxNQUFBQSxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFdBQTNCLEVBQXdDUCxrQkFBeEM7QUFDQSxLQUZEO0FBR0EsR0FUUSxDQUFUO0FBVUE7O0FBRUQsZUFBZUgsZUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiB1c2VPdXRzaWRlQ2xpY2soY2IsIG5vZGUpIHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZSkge1xuXHRcdFx0aWYgKG5vZGUuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHJldHVybjtcblx0XHRcdGNiKCk7XG5cdFx0fVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG5cdFx0fTtcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU91dHNpZGVDbGljaztcbiJdfQ==