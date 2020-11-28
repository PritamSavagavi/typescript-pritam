function add(n1: number, n2: number, strings: string) {
  let num = n1 + n2;
  return strings + " " + num;
}

let str = "pritam savagavi";
let number1 = 3;
let number2 = 4;
let result = add(number1, number2, str);
console.log(result);
