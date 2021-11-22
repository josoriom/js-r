import { arrayFromRPrintedVector } from '../utilities/arrayFromRPrintedVector';

describe('Extracting booleans', () => {
  it('Should return true', () => {
    expect(arrayFromRPrintedVector('TRUE')).toBe(true);
  });

  it('Should return true with whitespaces', () => {
    expect(arrayFromRPrintedVector('   TRUE   ')).toBe(true);
  });

  it('Should return false', () => {
    expect(arrayFromRPrintedVector('FALSE')).toBe(false);
  });

  it('Should return false with whitespaces', () => {
    expect(arrayFromRPrintedVector('   FALSE   ')).toBe(false);
  });
});

describe('Extracting strings', () => {
  it('Should return the string without whitespaces', () => {
    expect(arrayFromRPrintedVector(`   hello_world`)).toBe('hello_world');
  });

  it('Should return the string without whitespaces and double quotes', () => {
    expect(arrayFromRPrintedVector(`   "hello_world"`)).toBe('hello_world');
  });
});

describe('Extracting numbers', () => {
  it('Should return an array with only 5', () => {
    expect(arrayFromRPrintedVector('5')).toBe(5);
  });

  it('Should return 6 even with whitespaces', () => {
    expect(arrayFromRPrintedVector('     5')).toBe(5);
  });
});

describe('Extracting printed vectors with numbers', () => {
  const vector = `
  [1]   1   2   3   4   5 
  [6]  40  41  42  43 56`;

  const array = arrayFromRPrintedVector(vector) as number[];

  it('Should return a JS array from the string printed in R', () => {
    expect(array).toStrictEqual([1, 2, 3, 4, 5, 40, 41, 42, 43, 56]);
  });
});

describe('Extracting printed vectors with any R type', () => {
  const vector = `
  [1]   1.2+4.9i   56L   TRUE   FALSE
  [6]  hello_world 'hello_world' 89.70`;

  const array = arrayFromRPrintedVector(vector);
  it('Should return a JS array from the string printed in R', () => {
    expect(array).toStrictEqual([
      '1.2+4.9i',
      56,
      true,
      false,
      'hello_world',
      'hello_world',
      89.7,
    ]);
  });
});
