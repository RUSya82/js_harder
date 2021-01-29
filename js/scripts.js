let num = 266219;

let strNum = String(num);

let multNum = 1;
for (let i = 0; i < strNum.length; i++){
    multNum *= strNum[i];
}

console.log(multNum)

multNum = multNum**3;
console.log(multNum);
let strMultNum = String(multNum);
console.log('первое число: ' + strMultNum[0] + "    " + 'второе число: ' + strMultNum[1]);
