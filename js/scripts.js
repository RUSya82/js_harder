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

