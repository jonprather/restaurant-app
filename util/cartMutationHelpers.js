export const createFormattedPriceObj = (rawPrice) => {
  let formattedObj = {};
  formattedObj.raw = rawPrice;
  formattedObj.formatted = String(rawPrice);
  formattedObj.formatted_with_symbol = "$" + String(rawPrice);
  formattedObj.formatted_with_code = `${String(rawPrice)} USD`;
  return formattedObj;
};
