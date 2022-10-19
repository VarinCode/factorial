// npm install
// ts-node 02-script.ts
// tsc 02-script.ts

import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('จำนวนที่รับค่ามาคือ ' , (value:any):void => {
    const formula:string = 'n! = n(n-1)(n-2) ... 2 x 1';
    let object:{input:number , array:Array<number>, result:number , prototype:number} = {
        input: value,
        prototype: value,
        array: [],
        result: 1
    }
        while(object.input >= 1) {
            object.result *= object.input;
            object.array.push(object.input);
            --object.input;
        }
    console.log(formula , `\n${object.prototype}! = ${object.array.join(' x ')} = ${object.result}`);
    readline.close();
});
