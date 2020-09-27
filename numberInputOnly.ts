/** This function will only return number for a text input at keyup. 
* Also this supports Ctrl, A, S, X for shortcuts. 
* Use decimal for .(dot) input.
*/
export const validation = (keyupEvent, isDecimal: boolean) => {
  if (isDecimal) {
    return (
      (keyupEvent.keyCode >= 48 && keyupEvent.keyCode <= 57) ||
      (keyupEvent.keyCode >= 96 && keyupEvent.keyCode <= 105) ||
      keyupEvent.keyCode === 8 ||
      (keyupEvent.keyCode >= 37 && keyupEvent.keyCode <= 40) ||
      keyupEvent.keyCode === 190 ||
      keyupEvent.keyCode === 110 ||
      keyupEvent.keyCode === 17 ||
      keyupEvent.keyCode === 67 ||
      keyupEvent.keyCode === 86 ||
      keyupEvent.key === "Meta" ||
      keyupEvent.keyCode === 65
    );
  } else {
    return (
      (keyupEvent.keyCode >= 48 && keyupEvent.keyCode <= 57) ||
      (keyupEvent.keyCode >= 96 && keyupEvent.keyCode <= 105) ||
      keyupEvent.keyCode === 8 ||
      (keyupEvent.keyCode >= 37 && keyupEvent.keyCode <= 40) ||
      keyupEvent.keyCode === 17 ||
      keyupEvent.keyCode === 67 ||
      keyupEvent.keyCode === 86 ||
      keyupEvent.key === "Meta" ||
      keyupEvent.keyCode === 65
    );
  }
};
