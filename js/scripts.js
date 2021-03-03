/*

1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>».

2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>

3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>

4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>,

5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>


Попрактикуйтесь на кроссвордах https://regexcrossword.com/
и на задачках https://habr.com/ru/post/167015/
 */
//1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>».
let task1 = document.getElementById('task1');
let reg = /([а-яё]*функци[а-яё]*)/gi;
let text = task1.innerHTML;
text= text.replace(reg, '<strong>$1</strong>');
task1.innerHTML = text;

/*2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>*/
let task2 = document.getElementById('task2');
text = task2.innerHTML;
reg = /(\d{2}):(\d{2})/gi;
text= text.replace(reg, '<b>$1:$2</b>');
task2.innerHTML = text;



//выапывапывапывап
//3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>
text = task1.innerHTML;
reg = /(["|'|«].+?["|»|'])/gi;
text= text.replace(reg, '<mark>$1</mark>');
task1.innerHTML = text;
text = task2.innerHTML;
reg = /(".+")/gi;
text= text.replace(reg, '<mark>$1</mark>');
task2.innerHTML = text;

//4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>
text = task2.innerHTML;
reg = /((http:\/\/)(www\.)?(\S+)(.ru\/?)([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gi
console.log(text.match(reg));
text= text.replace(reg, '<a href="$1">$4$5</a>');
task2.innerHTML = text;

//Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль
reg = /#[A-F0-9]{6}/g;
text = document.documentElement.innerHTML;
console.log(text.match(reg));

/*
6. Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>
*/
//Выполнено в 4 пункте