'use strict';
let container = document.querySelector('.container');



let week = ["Вокресенье", "Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
let year = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];



setInterval(()=>{
    let date = new Date();
    let dateA = `Сегодня ${week[date.getDay()]}, ${date.getDate()} ${year[date.getMonth()]} ${date.getFullYear()} года, 
    ${date.getHours()} ${getHourName(date.getHours())} ${date.getMinutes()} ${getMinuteName(date.getMinutes())} ${date.getSeconds()} ${getSecondsName(date.getSeconds())}`;
    // '04.02.2020 - 21:05:33'
        let dateB = `${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()} - 
    ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
    container.innerHTML = `<h2>${dateA}</h2>`;
    container.innerHTML += `<h2>${dateB}</h2>`;
}, 100);



function getHourName(hour) {
    if(hour > 4 && hour < 21){
        return 'часов';
    }
    else if(hour%10 === 1){
        return 'час';
    }else if((hour%10 > 1) && (hour%10 < 5)){
        return "часа";
    }
    return 'часов';
}
function getMinuteName(hour) {
    if(hour > 4 && hour < 21){
        return 'минут';
    }
    else if(hour%10 === 1){
        return 'минута';
    }else if((hour%10 > 1) && (hour%10 < 5)){
        return "минуты";
    }
    return 'минут';
}
function getSecondsName(second) {
    if(second > 4 && second < 21){
        return 'секунд';
    }
    else if(second%10 === 1){
        return 'секунда';
    }else if((second%10 > 1) && (second%10 < 5)){
        return "секунды";
    }
    return 'секунд';
}

function addZero(number) {
    return number > 9 ? number : '0' + number;
}

for (let i=0;i<60;i++){
    console.log(i + ": " + getMinuteName(i));
}
