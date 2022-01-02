import { getData } from '../utilities/getData';

describe('Extracting booleans', () => {
  it('Should return true', () => {
    expect(getData('TRUE')).toBe(true);
  });

  it('Should return true with whitespaces', () => {
    expect(getData('   TRUE   ')).toBe(true);
  });

  it('Should return false', () => {
    expect(getData('FALSE')).toBe(false);
  });

  it('Should return false with whitespaces', () => {
    expect(getData('   FALSE   ')).toBe(false);
  });
});

describe('Extracting strings', () => {
  it('Should return the string without whitespaces', () => {
    expect(getData(`   hello_world`)).toBe('hello_world');
  });

  it('Should return the string without whitespaces and double quotes', () => {
    expect(getData(`   "hello_world"`)).toBe('hello_world');
  });
});

describe('Extracting numbers', () => {
  it('Should return an array with only 5', () => {
    expect(getData('5')).toBe(5);
  });

  it('Should return 6 even with whitespaces', () => {
    expect(getData('     5')).toBe(5);
  });
});

describe('Extracting integers', () => {
  it('Should return an array with only 5', () => {
    expect(getData('5L')).toBe(5);
  });

  it('Should return 6 even with whitespaces', () => {
    expect(getData('     5L')).toBe(5);
  });
});

describe('Extracting complex numbers', () => {
  it('Should return the string without whitespaces', () => {
    expect(getData('   123+4i')).toStrictEqual({ re: 123, im: 4 });
    expect(getData('   1-4i')).toStrictEqual({ re: 1, im: -4 });
    expect(getData('   1.2+4.9i')).toStrictEqual({ re: 1.2, im: 4.9 });
  });
});
