let arr:number[] = [1, 2, 3];
// arr = [100, 1000, 'a']

let str = 'a, b, c'.split(',')
// str = [1, 2, 3]

/* generic type 타입 변수 */
let _arr:Array<number> = [1, 2, 3]
let _str:Array<string> = ['a', 'b', 'c'];

/* 유니온 타입 union type + array type */
let multi:(string | number | boolean)[] = ['hello', 10, true];
multi = [5, 100 ,'a'];

/* tuple type */
let tupleA:[number, number, number] = [1, 2, 3];
// typleA = [10, 100]

let tupleB:[string, number] = ['tiger', 30];
// tupleB = [30, 'age']

/* 다차원 배열 */
const user:[string, number][] = [
    ['a', 30],
    ['b', 30],
    ['c', 30]
]