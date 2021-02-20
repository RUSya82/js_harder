const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const sumBtn = document.getElementById('sum');
const multBtn = document.getElementById('mult');
const resField = document.getElementById('res');


const calculator = {
    res: undefined,
    sum: function(){
        this.res = +inputA.value + +inputB.value;
        this.show();
    },
    mult: function(){
        this.res = +inputA.value * +inputB.value;
        this.show();
    },
    show: function(){
        resField.value = this.res;
    },
    addListeners: function () {
        sumBtn.addEventListener('click', this.sum.bind(this));
        multBtn.addEventListener('click', this.mult.bind(this));
        this.validNumberInput(inputB);
        this.validNumberInput(inputA);

    },
    validNumberInput: function (selector){
        selector.addEventListener('input', () => {
            selector.value = selector.value.replace(/[^\d\-\.]+$/g, '');
        });
}
}

calculator.addListeners();

function getResult(x,y){
    let result = 0;
    let arr = String(Math.abs(Math.pow(x, Math.abs(y)))).split('');
    for(let item of arr){
        result += +item;
    }
    return result
}

console.log(getResult(4, 8));
console.log(getResult(2, 6));
console.log(getResult(12, -3));
console.log(getResult(-7, 5));