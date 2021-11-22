import { checkTypes } from '../utilities/checkTypes';

describe('Checking logical types', () => {
  it('Should return true', () => {
    expect(checkTypes('TRUE')).toBe('logical');
  });

  it('Should return true with whitespaces', () => {
    expect(checkTypes('   TRUE   ')).toBe('logical');
  });

  it('Should return false', () => {
    expect(checkTypes('FALSE')).toBe('logical');
  });

  it('Should return false with whitespaces', () => {
    expect(checkTypes('   FALSE   ')).toBe('logical');
  });
});

describe('Checking characters types', () => {
  it('Should return the string without whitespaces', () => {
    expect(checkTypes(`   hello_world`)).toBe('character');
  });

  it('Should return the string without whitespaces and double quotes', () => {
    expect(checkTypes(`   "hello_world"`)).toBe('character');
  });
});

describe('Checking numeric types', () => {
  it('Should return an array with only 5', () => {
    expect(checkTypes('5')).toBe('numeric');
  });

  it('Should return 6 even with whitespaces', () => {
    expect(checkTypes('     5')).toBe('numeric');
  });
});

describe('Checking integers types', () => {
  it('Should return integer', () => {
    expect(checkTypes('5L')).toBe('integer');
  });

  it('Should return integer even with whitespaces', () => {
    expect(checkTypes('     5L')).toBe('integer');
  });
});

describe('Checking complex numbers type', () => {
  it('Should return complex', () => {
    expect(checkTypes('1+4i')).toBe('complex');
    expect(checkTypes('1-4i')).toBe('complex');
    expect(checkTypes('1.1+4.6i')).toBe('complex');
    expect(checkTypes('4i')).toBe('complex');
  });

  it('Should return complex even with whitespaces', () => {
    expect(checkTypes('   1+4i')).toBe('complex');
    expect(checkTypes('   1-4i')).toBe('complex');
    expect(checkTypes('   1.1+4.6i')).toBe('complex');
    expect(checkTypes('    4i')).toBe('complex');
  });
});
