# is-2d-array ![Build Status](https://travis-ci.org/lukebro/is-2d-array)

> Check if array is 2D

## Install
```console
$ npm install --save is-2d-array
```

## Usage
```javascript
const is2dArray = require('is-2d-array');

is2dArray([['1', '2'], ['3', '4']]);
//=> true

is2dArray(['1', '2', '3', '4']);
//=> false

is2dArray([['1', '2'], '3', '4']);
//=> false

is2dArray([['1'], ['2'], ['3'], ['4']]);
//=> true
```
## License

MIT © [Lukasz Brodowski](http://lukebro.com)
