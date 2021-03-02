document.addEventListener('DOMContentLoaded', () => {
    let ball = document.querySelector('.ball');
    let startBtn = document.querySelector('.btn-start');
    let upSpeed = document.querySelector('.up-speed');
    let downSpeed = document.querySelector('.down-speed');
    let btnReset = document.querySelector('.btn-reset');
    let count = 0;
    let timerID;
    let animate = false;
    let isDirectionRight = true;
    let speed = 3;

    function moveBall(){
        timerID = requestAnimationFrame(moveBall);
        count++;
        changeDirection();
        if(isDirectionRight){
            ball.style.left = count*speed + 'px';
        } else{
            ball.style.right = count*speed + 'px';
        }

    }

    function changeDirection() {
        let currentStyle = getComputedStyle(ball);
        if(parseInt(currentStyle.right) < 5 && isDirectionRight) {
            ball.removeAttribute('style');
            isDirectionRight = !isDirectionRight;
            count = 0;
            cancelAnimationFrame(timerID);
            timerID = requestAnimationFrame(moveBall);
        }else if (!isDirectionRight && parseInt(currentStyle.left) < 5){
            ball.removeAttribute('style');
            isDirectionRight = !isDirectionRight;
            count = 0;
            cancelAnimationFrame(timerID);
            timerID = requestAnimationFrame(moveBall);
        }
    }
    startBtn.addEventListener('click', () => {
        if(!animate){
            timerID = requestAnimationFrame(moveBall);
            startBtn.textContent = 'Pause';
            animate = true;
        } else {
            cancelAnimationFrame(timerID);
            startBtn.textContent = 'Start';
            animate = false;
        }
    });
    upSpeed.addEventListener('click', () => {
        if(speed <= 12){
            speed += 1;
        }
    });
    downSpeed.addEventListener('click', () => {
        if(speed > 0){
            speed -= 1;
        }

    });
    btnReset.addEventListener('click', () => {
        cancelAnimationFrame(timerID);
       startBtn.textContent = "Start";
       ball.removeAttribute('style');
       isDirectionRight = true;
       count = 0;
        animate = false;
        speed = 3;
    });


});


/*
Транскрибируемая цепь РНК цепи ДНК образуется путем замены каждого нуклеотида
его комплементом: G -> C, C -> G, T -> A, A -> U.
*/

function func(dnk) {
    return [].map.call(dnk, (item) => {
        item = item.toUpperCase();
        switch (item) {
            case 'A':
                return 'U';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
            default:
                return '';

        }
        //console.log(item)
    }).join('');
}
console.log('gctagctagcta');
console.log(func('gctagctagcta'));
console.log('ACGTGGTCTTAA');
console.log(func('ACGTGGTCTTAA'));

const arr = [
    {lesson: 1, type: 'basic', point: 2},
    {lesson: 2, type: 'additional', point: 4},
]


console.log(arr);
arr = arr.map(item => item.length);