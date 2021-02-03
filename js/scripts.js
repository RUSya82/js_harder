//Создать массив arr = []
//Записать в него 7 любых многозначных чисел в виде строк
let arr = ['654864', '265978', '6595884', '45668789', '6546465','2695959', '65464'];
//Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
arr.forEach(item => {
   if(item[0] == 2 ||  +item[0] == 4) {
       console.log(item);
   }
});


let maxCount = 100;

for(let i = 1; i <= maxCount; i++){
    if(isSimpleNumber(i)){
        console.log(`${i} - Делители этого числа 1 и ${i}`);
    }
}

/**
 * Функция проверки числа на простоту
 * @param number - проверяемое число
 * @returns {boolean} - true or false
 */
function isSimpleNumber(number) {
    //проверим, что передано число
    if(typeof number != 'number'){
        return false;
    }
    //нет простых чисел меньше двух
    if(number < 2){
        return false;
    }
    //если2, то точно простое, выходим
    if(number === 2){
        return true;
    }

    //дойдём только до половины числа, дальше нет смысла
    for(let i = 2; i < number/2+1; i++){
        if(number%i === 0){
            return false;
        }
    }
    return true;
}

