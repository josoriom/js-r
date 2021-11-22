import { arrayFromRPrintedVector } from './arrayFromRPrintedVector';

/**
 * My module
 * @returns An array of arrays with whatever that is in the list
 */

export function array2DFromPrintedList(list: string) {
  list = list.trim();
  let elements = list.split(/\[\[(?:[0-9]+)\]\]/g);
  let result = [];
  for (let element of elements) {
    if (element === '') continue;
    result.push(arrayFromRPrintedVector(element));
  }
  return result;
}
