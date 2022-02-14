// function add(a: number, b: number) {
//   return a + b;
// }
//
// function sub(a: number, b: number) {
//   return a + b;
// }
//
// function mul(a: number, b: number) {
//   return a + b;
// }
//
// function div(a: number, b: number) {
//   return a + b;
// }

// interface BinaryFun {
//   (a: number, b: number): number;
// }

type BinaryFun = { (a: number, b: number): number };

const add2: BinaryFun = (a, b) => a + b;
const sub2: BinaryFun = (a, b) => a - b;
