/**
 * checkTypes
 * @param item - The data as string to find the type
 * @returns R data type
 */

export function checkTypes(item: string) {
  item = item.trim();
  if (/^-?\d*\.?\d*$/.test(item)) {
    return 'numeric';
  } else if (/(?:TRUE|FALSE)\b/.test(item)) {
    return 'logical';
  } else if (/(?:[0-9]+)L/.test(item)) {
    return 'integer';
  } else if (
    /^(?=[iI.\d+-])(?:[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?![iI.\d]))?(?:[+-]?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)?[iI])?$/.test(
      item,
    )
  ) {
    return 'complex';
  } else if (/[A-Za-z]/.test(item)) {
    return 'character';
  }
}
