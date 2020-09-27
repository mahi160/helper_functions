/** This function will only return number for a text input at keyup.
 * Also this supports Ctrl, A, S, X for shortcuts.
 * Use decimal for .(dot) input.
 */
export const validation = (keydownEvent, isDecimal: boolean) => {
  if (isDecimal) {
    return (
      (keydownEvent.keyCode >= 48 && keydownEvent.keyCode <= 57) ||
      (keydownEvent.keyCode >= 96 && keydownEvent.keyCode <= 105) ||
      keydownEvent.keyCode === 8 ||
      (keydownEvent.keyCode >= 37 && keydownEvent.keyCode <= 40) ||
      keydownEvent.keyCode === 190 ||
      keydownEvent.keyCode === 110 ||
      keydownEvent.keyCode === 17 ||
      keydownEvent.keyCode === 67 ||
      keydownEvent.keyCode === 90 ||
      keydownEvent.keyCode === 88 ||
      keydownEvent.keyCode === 86 ||
      keydownEvent.key === "Meta" ||
      keydownEvent.keyCode === 65
    );
  } else {
    return (
      (keydownEvent.keyCode >= 48 && keydownEvent.keyCode <= 57) ||
      (keydownEvent.keyCode >= 96 && keydownEvent.keyCode <= 105) ||
      keydownEvent.keyCode === 8 ||
      (keydownEvent.keyCode >= 37 && keydownEvent.keyCode <= 40) ||
      keydownEvent.keyCode === 17 ||
      keydownEvent.keyCode === 67 ||
      keydownEvent.keyCode === 86 ||
      keydownEvent.keyCode === 90 ||
      keydownEvent.keyCode === 88 ||
      keydownEvent.key === "Meta" ||
      keydownEvent.keyCode === 65
    );
  }
};
