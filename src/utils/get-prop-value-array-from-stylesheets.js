/**
 * @param {CSSStyleSheet[]} styleSheets
 * @param {string} target
 * @param {RegExp} regex
 * @return {{ prop: string, value: string }[]}
 */

const getPropValueArrayFromStylesheets = (styleSheets, target, regex) => {
  const filterStyleSheets = styleSheets.filter(
    (d) => d.cssRules[0].selectorText === target
  );

  const styleSheet = filterStyleSheets[0];
  const cssRule = styleSheet.cssRules[0];
  const styleDeclarationArray = [...cssRule.style];

  const propsArray = styleDeclarationArray
    .map((d) => d.match(regex))
    .filter((d) => d !== null)
    .map((d) => d[0]);

  const propValueReducer = (accumulator, currentProp) => {
    const value = cssRule.style.getPropertyValue(currentProp);
    accumulator.push({ prop: currentProp, value });
    return accumulator;
  };

  const propValueArray = propsArray.reduce(propValueReducer, []);

  return propValueArray;
};

export default getPropValueArrayFromStylesheets;
