import { array2DFromPrintedList } from '../utilities/array2DFromPrintedList';

describe('Extracting printed list with numbers', () => {
  it('Should return a JS array from the string printed in R', () => {
    const list = `
    [[1]]
    [1]   1   2   3   4   5 
    [6]  40  41  42  43 56
    
    [[1]]
    [1]   6   7   8   9   10 
    [6]  50  51  52  53 66
  
    [[1]]
    [1]   11   12   13   14   15 
    [6]  60  61  62  63 76
  
    [[1]]
    [1]   16   17   18   19   20 
    [6]  70  71  72  73 86
    `;

    const array = array2DFromPrintedList(list) as number[][];

    expect(array[0]).toStrictEqual([1, 2, 3, 4, 5, 40, 41, 42, 43, 56]);
    expect(array[1]).toStrictEqual([6, 7, 8, 9, 10, 50, 51, 52, 53, 66]);
    expect(array[2]).toStrictEqual([11, 12, 13, 14, 15, 60, 61, 62, 63, 76]);
    expect(array[3]).toStrictEqual([16, 17, 18, 19, 20, 70, 71, 72, 73, 86]);
  });

  it('Should return a JS array with multiple types from the string printed in R', () => {
    const listMultiType = `[[1]]
    [1] 1

    [[2]]
    [1] "a"

    [[3]]
    [1] TRUE

    [[4]]
    [1] 1+4i`;
    const array = array2DFromPrintedList(listMultiType);
    expect(array).toStrictEqual([[1], 'a', true, '1+4i']);
  });
});
