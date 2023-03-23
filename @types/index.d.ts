export {};
declare global {
  interface String {
    zeroPadding(length: number): string;
  }
  interface Number {
    zeroPadding(length: number): string;
  }

  interface Array<T> {
    deleteDuplicate(): T[];
  }
}