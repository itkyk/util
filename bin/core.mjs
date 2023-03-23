// src/modules/zeroPadding.ts
var zeroPadding = (value, len) => {
  let strVal = String(value);
  while (strVal.length < len)
    strVal = "0" + strVal;
  return strVal;
};
export {
  zeroPadding
};
