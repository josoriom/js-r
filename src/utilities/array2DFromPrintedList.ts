import { extractData } from './extractData';

/**
 * My module
 * @returns An array with arrays with whatever that is in the list
 */

export function array2DFromPrintedList(list: string) {
  list = list.trim();
  let elements = list.split(/\[\[(?:[0-9]+)\]\]/g);
  let result = [];
  for (let element of elements) {
    if (element === '') continue;
    result.push(extractData(element));
  }
  return result;
}
