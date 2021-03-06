import { useLayoutEffect } from "react";

function useRefWidth(item, onSendRef, ref, bool, currentTab) {
  useLayoutEffect(function () {
    if (currentTab && bool) {
      onSendRef({
        width: ref.current.getBoundingClientRect().width + 2,
        left: ref.current.offsetLeft
      });
    }
  }, [item, onSendRef, ref, bool, currentTab]);
}

export default useRefWidth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaG9va3MvdXNlUmVmV2lkdGguanMiXSwibmFtZXMiOlsidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmV2lkdGgiLCJpdGVtIiwib25TZW5kUmVmIiwicmVmIiwiYm9vbCIsImN1cnJlbnRUYWIiLCJ3aWR0aCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwib2Zmc2V0TGVmdCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBVCxRQUFnQyxPQUFoQzs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxJQUFyQixFQUEyQkMsU0FBM0IsRUFBc0NDLEdBQXRDLEVBQTJDQyxJQUEzQyxFQUFpREMsVUFBakQsRUFBNkQ7QUFDNUROLEVBQUFBLGVBQWUsQ0FBQyxZQUFNO0FBQ3JCLFFBQUlNLFVBQVUsSUFBSUQsSUFBbEIsRUFBd0I7QUFDdkJGLE1BQUFBLFNBQVMsQ0FBQztBQUNUSSxRQUFBQSxLQUFLLEVBQUVILEdBQUcsQ0FBQ0ksT0FBSixDQUFZQyxxQkFBWixHQUFvQ0YsS0FBcEMsR0FBNEMsQ0FEMUM7QUFFVEcsUUFBQUEsSUFBSSxFQUFFTixHQUFHLENBQUNJLE9BQUosQ0FBWUc7QUFGVCxPQUFELENBQVQ7QUFJQTtBQUNELEdBUGMsRUFPWixDQUFDVCxJQUFELEVBQU9DLFNBQVAsRUFBa0JDLEdBQWxCLEVBQXVCQyxJQUF2QixFQUE2QkMsVUFBN0IsQ0FQWSxDQUFmO0FBUUE7O0FBRUQsZUFBZUwsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiB1c2VSZWZXaWR0aChpdGVtLCBvblNlbmRSZWYsIHJlZiwgYm9vbCwgY3VycmVudFRhYikge1xuXHR1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChjdXJyZW50VGFiICYmIGJvb2wpIHtcblx0XHRcdG9uU2VuZFJlZih7XG5cdFx0XHRcdHdpZHRoOiByZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIDIsXG5cdFx0XHRcdGxlZnQ6IHJlZi5jdXJyZW50Lm9mZnNldExlZnQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIFtpdGVtLCBvblNlbmRSZWYsIHJlZiwgYm9vbCwgY3VycmVudFRhYl0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZWZXaWR0aDtcbiJdfQ==