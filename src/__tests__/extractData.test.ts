import { extractData } from '../utilities/extractData';

describe('Extracting booleans', () => {
  it('Should return true', () => {
    expect(extractData('TRUE')).toBe(true);
  });

  it('Should return true with whitespaces', () => {
    expect(extractData('   TRUE   ')).toBe(true);
  });

  it('Should return false', () => {
    expect(extractData('FALSE')).toBe(false);
  });

  it('Should return false with whitespaces', () => {
    expect(extractData('   FALSE   ')).toBe(false);
  });
});

describe('Extracting strings', () => {
  it('Should return the string without whitespaces', () => {
    expect(extractData(`   hello_world`)).toBe('hello_world');
  });

  it('Should return the string without whitespaces and double quotes', () => {
    expect(extractData(`   "hello_world"`)).toBe('hello_world');
  });
});

describe('Extracting numbers', () => {
  it('Should return an array with only 5', () => {
    expect((extractData('5') as number[])[0]).toBe(5);
  });

  it('Should return 6 even with whitespaces', () => {
    expect((extractData('     5') as number[])[0]).toBe(5);
  });
});

describe('Extracting printed vectors', () => {
  const vector = `
  [1]   1   2   3   4   5 
  [6]  40  41  42  43 56`;

  const array = extractData(vector) as number[];

  it('Should return a JS array from the string printed in R', () => {
    expect(array).toStrictEqual([1, 2, 3, 4, 5, 40, 41, 42, 43, 56]);
  });
});
