

export const hasClass = (element, className) => {
  return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};
