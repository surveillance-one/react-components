import { useEffect } from "react";

function useOutsideClick(valueChange, selectedID) {
  useEffect(function () {
    if (valueChange) valueChange(selectedID);
  }, [selectedID, valueChange]);
}

export default useOutsideClick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaG9va3MvdXNlVmFsdWVDaGFuZ2UuanMiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlT3V0c2lkZUNsaWNrIiwidmFsdWVDaGFuZ2UiLCJzZWxlY3RlZElEIl0sIm1hcHBpbmdzIjoiQUFFQSxTQUFTQSxTQUFULFFBQTBCLE9BQTFCOztBQUVBLFNBQVNDLGVBQVQsQ0FBeUJDLFdBQXpCLEVBQXNDQyxVQUF0QyxFQUFrRDtBQUNqREgsRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZixRQUFJRSxXQUFKLEVBQWlCQSxXQUFXLENBQUNDLFVBQUQsQ0FBWDtBQUNqQixHQUZRLEVBRU4sQ0FBQ0EsVUFBRCxFQUFhRCxXQUFiLENBRk0sQ0FBVDtBQUdBOztBQUVELGVBQWVELGVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIHVzZU91dHNpZGVDbGljayh2YWx1ZUNoYW5nZSwgc2VsZWN0ZWRJRCkge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmICh2YWx1ZUNoYW5nZSkgdmFsdWVDaGFuZ2Uoc2VsZWN0ZWRJRCk7XG5cdH0sIFtzZWxlY3RlZElELCB2YWx1ZUNoYW5nZV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VPdXRzaWRlQ2xpY2s7XG4iXX0=