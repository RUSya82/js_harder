function foo(arg) {
    if(typeof arg !== 'string'){
        return 'Not a string';
    }
    return arg.trim().substr(0, 30) + '...';

}
let firstStr = '      Однажды в студёную зимнюю пору, я из лесу вышел, и сразу зашёл     ';
let secondStr = foo(firstStr);
console.log('Длина строки: ' + secondStr.length);
console.dir(secondStr);