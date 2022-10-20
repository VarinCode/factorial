// npm install
// ts-node 02-script.ts
// tsc 02-script.ts

import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});
const factorial = readline.question('จำนวนที่รับค่ามาคือ ', (value: any): void => {
    let formula: string = 'n! = n(n-1)(n-2) ... 2 x 1';
    interface Obj {
        input: number;
        prototype: number;
        array: Array<number>;
        result: number;
        decrease: any;
    }; let object: Obj = {
        input: Math.round(value),
        prototype: Math.round(value),
        array: [],
        result: 1,
        decrease(parameter:number){ parameter = this.input; return parameter; }
    }
    if (Math.round(value) == 0 || Math.round(value) <= 0 ) console.log(new Error('error!'));
        else if (Math.round(value) == 1) console.log(formula, `\n${object.prototype}! = ${object.result}`);
            else if (Math.round(value) > 1){
                while (object.decrease() > 1) {
                    object.result *= object.input;
                    object.array.push(object.input);
                    --object.input;
                    object.decrease(object.input)
                }
        console.log(formula, `\n${object.prototype}! = ${object.array.concat(1).join(' x ')} = ${object.result}`);
    } else console.log(new Error('ต้องใส่เป็นตัวเลขเท่านั้น!'));
    readline.close();
});
factorial;
