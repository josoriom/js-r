export function extractData(item: string) {
  item = item.replace(/\n/g, '').replace(/\[(?:[0-9]+)\]/g, '');
  let result;
  if (/[A-Za-z]/.test(item)) {
    item = item.trim();
    if (item === 'TRUE') {
      result = true;
    } else if (item === 'FALSE') {
      result = false;
    } else {
      result = item.replace(/["]+/g, '');
    }
  } else {
    result = (item.match(/\d+(?:\.\d+)?/g) as RegExpMatchArray).map(Number);
  }
  return result;
}
