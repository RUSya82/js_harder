// ES6
class One {
    eyes = 2;
    legs = 4;
    tips = 82;
}
//создаем потомка
class Two extends One{}
//слздаем экземпляры
let one = new One();
let two = new Two();

console.log(one);   //One {eyes: 2, legs: 4, tips: 82}
console.log(two);   //Two {eyes: 2, legs: 4, tips: 82}

One.prototype.legs = 55; //Меняем прототип
console.log('one.legs' + one.legs);  //4 - всё равно 4
console.log('two.legs' + two.legs);  //4 - всё равно 4???
class Three extends One{}
let three = new Three();
console.log('three.legs' + three.legs);

//  в то же время в ES5
//ES5

let OneES5 = function () {
    this.eyes = 2;
    this.legs = 4;
    this.tips = 82;
}
//создаем потомка
let TwoES5 = function () {}
TwoES5.prototype = Object.create(OneES5.prototype);


let oneES5 = new OneES5();
let twoES5 = new TwoES5();

console.log(oneES5);//OneES5 {eyes: 2, legs: 4, tips: 82}
console.log(twoES5);//TwoES5 {} - почему??? eyes: 2, legs: 4, tips: 82 - есть только в прототипе!!! В ES6 они есть в самом классе!

//меняем legs в прототипе
OneES5.prototype.legs = 32;
//И у потомка теперь 32 ноги!!!! Карл!!!
console.log(twoES5.legs);

//меняем количество ног в самом экзепляре класса
oneES5.legs = 12;
//в потомке ничего не меняется
console.log(twoES5.legs);
twoES5.legs = 165       //тут я так понимаю делаем новое свойство legs в самом экземпляре twoES5
console.log(twoES5.legs); //И теперь никак не зависим от legs класса-родителя OneES5 ? Выведет 165
console.log(oneES5.legs);   //тут своё, выведет 12?

// Так в конце концов что это за зверь - prototype, просто запутался, и как добиться этой фишки,
// когда меняешь параметр в родительском классе, а в экземпляре дочернего он тоже меняется!




// Дед попугай с двумя лапами
// var ParrotGrandfather = function() {
//     this.species = 'Parrot',
//         this.paws = 2;
// };
// ParrotGrandfather.prototype = {
//     species: 'Parrot',
//     paws: 8
// };
//
// // Отец попугай унаследовал всё у деда
// var ParrotFather = function() {};
// ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);
//
// // Сын попугай унаследовал всё у отца
// var ParrotSon = function() {};
// ParrotSon.prototype = Object.create(ParrotFather.prototype);
//
// var grandfather = new ParrotGrandfather();
// var father = new ParrotFather()
// var son = new ParrotSon();
// console.log("Parrot Parrot Parrot - все попугаи!");
// // Parrot Parrot Parrot - все попугаи!
// console.log(grandfather);
// console.log(father);
// console.log(son);
//
// console.log("Дед меняет количество лап") ;
// ParrotGrandfather.prototype.paws++;
// console.log(grandfather);
// console.log(father);
// console.log(son);
//
// ParrotGrandfather.prototype.paws = 32;
// console.log(father.paws)
// // 3 3 3 - у каждого теперь по 3 лапы
//
// // Отец меняет вид
// console.log("Отец меняет вид") ;
// ParrotFather.prototype.species = 'eagle';
// console.log(grandfather);
// console.log(father);
// console.log(son);
// // Parrot eagle eagle - дед остался попугаем, отец и сын стали орлами
//
// // Сын уменьшил количество лап
// console.log("Сын уменьшил количество лап") ;
// ParrotSon.prototype.paws--;
// console.log(grandfather.paws, father.paws, son.paws);
// console.log(grandfather);
// console.log(father);
// console.log(son);
//
// // Дед решил стать чайкой
// console.log("Дед решил стать чайкой") ;
// ParrotGrandfather.prototype.species = 'seagull';
// console.log(grandfather);
// console.log(father);
// console.log(son);
// // seagull eagle eagle - дед чайка, отец и сын орлы

