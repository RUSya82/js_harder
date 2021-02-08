'use strict';

let date = new Date();

let day = date.getDay();

//дни недели
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//получим список
let container = document.querySelector('.container ul');
//стили курсива
let coursive = `style="font-style:italic"`;
//стили жирного шрифта
let bold = `style="font-weight:bold"`;
//переменная для текста вывода
let text = '';
for (let key in week){
    text += `<li ${(key == day) ? bold : ''}${( (key == 0) || (key == 6) ) ? coursive :''}>${week[key]}</li>`
}

container.innerHTML = text;