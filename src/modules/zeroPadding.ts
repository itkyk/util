export const zeroPadding = (value: number | string, len: number) => {
  let strVal = String(value);
  while (strVal.length < len) strVal = "0" + strVal;
  return strVal;
}