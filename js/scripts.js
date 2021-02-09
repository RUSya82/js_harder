'use strict';
let container = document.querySelector('.container');



let week = ["Вокресенье", "Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
let year = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];



setInterval(()=>{
    let date = new Date();
    let dateA = `Сегодня ${week[date.getDay()]}, ${date.getDate()} ${year[date.getMonth()]} ${date.getFullYear()} года, 
    ${date.getHours()} ${getHourName(date.getHours())} ${date.getMinutes()} минут ${date.getSeconds()} секунд`;
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

function addZero(number) {
    return number > 9 ? number : '0' + number;
}
