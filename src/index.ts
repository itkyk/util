import {zeroPadding} from "./modules/zeroPadding";

// Strings
String.prototype.¥zeroPadding = function (length: number) {
  return zeroPadding(this as string, length);
};

// Numbers
Number.prototype.¥zeroPadding= function (length: number) {
  return zeroPadding(this as number, length);
};

// Array
Array.prototype.¥deleteDuplicate = function () {
  const set = new Set(this);
  return [...set];
};

const num = "1";

num.¥zeroPadding(1);