import { checkTypes } from './checkTypes';
/**
 * getData
 * @param item - The data as string
 * @returns Returns the data in JS from R data type
 */

export function getData(item: string) {
  item = item.trim();
  const type: string = checkTypes(item) as string;
  if (type === 'numeric') {
    return parseFloat(item);
  } else if (type === 'logical') {
    return JSON.parse(item.toLowerCase());
  } else if (type === 'character') {
    return item.replace(/["]+/g, '').replace(/[']+/g, '');
  } else if (type === 'integer') {
    return parseInt(item, 10);
  } else if (type === 'complex') {
    return item;
  }
}
