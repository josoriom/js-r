# js-r

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Tool.

## Installation

`$ npm i js-r`

## Usage

### [Array from R printed vector](./src/utilities/arrayFromRPrintedVector.ts)
```js
import { arrayFromRPrintedVector } from 'js-r';
const vector = `
  [1]   1.2+4.9i   56L   TRUE   FALSE
  [6]  hello_world 'hello_world' 89.70
`;

const array = arrayFromRPrintedVector(vector);
console.log(array) // [{ re: 1.2, im: 4.9 }, 56, true, false, 'hello_world', 'hello_world', 89.7]
```

### [Array 2D from R printed list](./src/utilities/arrayFromRPrintedVector.ts)
```js
import { array2DFromPrintedList } from 'js-r';
const list = `
    [[1]]
    [1] 1  3

    [[2]]
    [1] "a"

    [[3]]
    [1] TRUE

    [[4]]
    [1] 1+4i
`;
const array = array2DFromPrintedList(list);
console.log(array) // [[1, 3], ['a'], [true], [{ re: 1, im: 4 }]]
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/js-r.svg
[npm-url]: https://www.npmjs.com/package/js-r
[ci-image]: https://github.com/josoriom/js-r/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/josoriom/js-r/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/josoriom/js-r.svg
[codecov-url]: https://codecov.io/gh/josoriom/js-r
[download-image]: https://img.shields.io/npm/dm/js-r.svg
[download-url]: https://www.npmjs.com/package/js-r
