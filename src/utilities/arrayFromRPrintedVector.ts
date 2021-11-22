import { getData } from './getData';
/**
 * extractData
 * @param item - The data as string to find the type
 * @returns Array with the the data
 */

export function arrayFromRPrintedVector(item: string) {
  item = item
    .trim()
    .replace(/\n/g, '')
    .replace(/\[(?:[0-9]+)\]/g, '');
  if (/\s+/.test(item)) {
    return item.trim().split(/\s+/).map(getData);
  } else {
    return getData(item);
  }
}
