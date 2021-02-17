generateBackground();
document.querySelector('button').addEventListener('click', generateBackground);


function getRandomHex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString(16);
}

function getRndColor() {
    let colorStr = '#';
    for(let i = 0; i < 6; i++){
        colorStr += getRandomHex(0,15);
    }
    return colorStr;
}
function generateBackground(){
    let input = document.querySelector('input');
    let rndColor = getRndColor();
    input.value = rndColor;
    document.body.style.backgroundColor = rndColor;
}

function func(a,b){
    a = a^0;
    b = b^0;
    if((a >= 0 && a < 12) && (b >= 0 && b < 60) ){
        return Math.abs(a*30 - b*6);
    }
    return 0;
}

console.log(func(6, 0));
console.log(func(3, 15));
console.log(func(11, 47));
console.log(func(0, 47));
console.log(func(1, 35));

