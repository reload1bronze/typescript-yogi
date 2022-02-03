function add(a: number, b: number) {
  return a + b;
}

// 선택적 매개변수
function log(message: string, userId?: string) {}

// 기본 매개변수
function log2(message: string, userId: string = "ok log") {}

// 나머지 매겨변수
function sumVariadicSafe(...numbers: number[]) {
  return numbers.reduce((pre, cur) => pre + cur, 0);
}

// 제네릭( 타입( 매개변수))
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  return;
}

// 타입스크립트
console.log("typescript");
