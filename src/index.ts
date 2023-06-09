import {zeroPadding} from "./modules/zeroPadding";

// Strings
String.prototype.zeroPadding = function (length: number): string{
  return zeroPadding(this as string, length);
};

// Numbers
Number.prototype.zeroPadding= function (length: number):string {
  return zeroPadding(this as number, length);
};

// Array
Array.prototype.deleteDuplicate = function <T>(): T[] {
  const set = new Set(this);
  return [...set];
};

