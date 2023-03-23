"use strict";

// src/modules/zeroPadding.ts
var zeroPadding = (value, len) => {
  let strVal = String(value);
  while (strVal.length < len)
    strVal = "0" + strVal;
  return strVal;
};

// src/index.ts
String.prototype._zeroPadding = function(length) {
  return zeroPadding(this, length);
};
Number.prototype["#zeroPadding"] = function(length) {
  return zeroPadding(this, length);
};
Array.prototype.deleteDuplicate = function() {
  const set = new Set(this);
  return [...set];
};
var num = "1";
num._zeroPadding(1);
