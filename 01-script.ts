// npm install
// ts-done 01-script.ts
// tsc 01-script.ts

const formula:string = 'n! = n(n-1)(n-2) ... 2 x 1';
let input:number = 12;
const factorial = (array:number[] , result:number , prototype:number):string => {
    while(input >= 1){
        result *= input;
        array.push(input);
        --input;
    }
    return `จำนวนที่รับค่ามาคือ ${prototype}! \n${prototype}! = ${array.join(' x ')} = ${result}`;
}
console.log(formula);
console.log(factorial([] , 1 , input));