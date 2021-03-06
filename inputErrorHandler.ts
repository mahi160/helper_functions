export const errorHandle = (keyupEvent) => {
  const x = keyupEvent.target.value;
  const dotS = x.indexOf(".");
  const dotL = x.lastIndexOf(".");

  if (
    !x ||
    x.includes("a") ||
    x.includes("c") ||
    x.includes("v") ||
    x.includes("x") ||
    x.includes("z") ||
    dotL !== dotS ||
    dotS === 0
  ) {
    return true;
  } else {
    return false;
  }
};
