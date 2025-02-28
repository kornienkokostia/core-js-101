/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
const getFizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
const getFactorial = (n) => Array.from({ length: n }, (v, i) => i + 1)
  .reduce((acc, curVal) => acc * curVal, 1);


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
const getSumBetweenNumbers = (n1, n2) => Array.from({ length: n2 - n1 + 1 }, (_, i) => i + n1)
  .map((_, i) => i + n1)
  .reduce((acc, curVal) => acc + curVal, 0);


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
const isTriangle = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b > c && a + c > b && c + b > a) return true;
  return false;
};


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
const doRectanglesOverlap = (rect1, rect2) => {
  const alignHeight1 = rect1.top + rect1.height;
  const alignWidth1 = rect1.left + rect1.width;
  const alignHeight2 = rect2.top + rect2.height;
  const alignWidth2 = rect2.left + rect2.width;
  const arrayHeight = [];
  const arrayHeight2 = [];
  const arrayWidth = [];
  const arrayWidth2 = [];
  for (let i = rect1.top; i < alignHeight1 + 1; i += 1) {
    arrayHeight.push(i);
  }
  for (let i = rect1.left; i < alignWidth1 + 1; i += 1) {
    arrayWidth.push(i);
  }
  for (let i = rect2.top; i < alignHeight2 + 1; i += 1) {
    arrayHeight2.push(i);
  }
  for (let i = rect2.left; i < alignWidth2 + 1; i += 1) {
    arrayWidth2.push(i);
  }
  const widthFlag = arrayWidth2.some((item) => arrayWidth.includes(item));
  const widthHeight = arrayHeight2.some((item) => arrayHeight.includes(item));
  if (widthFlag && widthHeight) {
    return true;
  }
  return false;
};


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
const isInsideCircle = (circle, point) => {
  if ((point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2 < circle.radius ** 2) {
    return true;
  }
  return false;
};


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
const findFirstSingleChar = (str) => {
  const first = str.split('').sort().join('').replace(/(\w)\1+/g, '')
    .replace(/ /g, '')
    .slice(0, 1);
  return first || null;
};


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
const getIntervalString = (a, b, isStartIncluded, isEndIncluded) => {
  const startPoint = a > b ? b : a;
  const endPoint = b > a ? b : a;
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  return `${startBracket}${startPoint}, ${endPoint}${endBracket}`;
};


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
const reverseString = (str) => str.split('').reverse().join('');


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
const reverseInteger = (num) => Number(String(num).split('').reverse().join(''));


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
const isCreditCardNumber = (ccn) => {
  const nums = ccn.toString();
  let sum = 0;
  let even = false;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const digits = +nums[i];
    let everySecond = digits * 2;

    if (everySecond > 9) everySecond -= 9;

    sum += (even) ? everySecond : digits;
    even = !even;
  }

  return sum % 10 === 0;
};

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
const getDigitalRoot = (num) => {
  const sum = String(num).split('').reduce((acc, curVal) => Number(acc) + Number(curVal), 0);
  return sum <= 9 ? sum : getDigitalRoot(sum);
};


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
const isBracketsBalanced = (str) => {
  const stack = [];
  const breacketsObj = {
    ']': '[',
    '}': '{',
    '>': '<',
    ')': '(',
  };
  const keys = Object.keys(breacketsObj);
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i += 1) {
    if (keys.includes(strArr[i]) && breacketsObj[strArr[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(strArr[i]);
    }
  }
  return stack.length === 0;
};


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
const toNaryString = (num, n) => num.toString(n);


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
const rotate = (a) => a[0].map((e, i) => a.map((el) => el[i]));
const allElementsEqual = (arr) => arr.every((e) => e === arr[0]);

const getCommonDirectoryPath = (input) => rotate(input.map((el) => el.split('/')))
  .filter(allElementsEqual).map((a) => a[0]).join('/')
+ (input.some((el) => el[0] !== '/') ? '' : '/');

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
const dotproduct = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
const transpose = (a) => a[0].map((x, i) => a.map((y) => y[i]));
const getMatrixProduct = (m1, m2) => m1.map((x) => transpose(m2).map((y) => dotproduct(x, y)));


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
const evaluateTicTacToePosition = (position) => {
  let res;
  // check rows
  position.map((el) => {
    const curr = el.filter((e) => e === 'X');
    if (curr.length === 3) { res = 'X'; }
    return el;
  });
  position.map((el) => {
    const curr = el.filter((e) => e === '0');
    if (curr.length === 3) { res = '0'; }
    return el;
  });
  // check columns
  position.map((el, i) => {
    const curr = position.map((e) => e[i]);
    if (curr.every((v) => v === 'X')) { res = 'X'; }
    return el;
  });
  position.map((el, i) => {
    const curr = position.map((e) => e[i]);
    if (curr.every((v) => v === '0')) { res = '0'; }
    return el;
  });
  // check diagonals
  if (position.map((el, i) => el[i]).every((el) => el === 'X')) { res = 'X'; }
  if (position.map((el, i) => el[position.length - i - 1]).every((el) => el === 'X')) { res = 'X'; }
  if (position.map((el, i) => el[i]).every((el) => el === '0')) { res = '0'; }
  if (position.map((el, i) => el[position.length - i - 1]).every((el) => el === '0')) { res = '0'; }

  return res;
};


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
