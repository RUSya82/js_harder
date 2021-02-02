function foo(arg) {
    if(typeof arg !== 'string'){
        return 'Not a string';
    }
    let result = arg.trim();
    if(result.length > 30){
        return result.substr(0, 30) + '...';
    }
    return  result;
}
let firstStr = '      Однажды в студёную зимнюю пору, я из лесу вышел, и сразу зашёл     ';
let secondStr = foo(firstStr);
console.log('Длина строки: ' + secondStr.length);
console.dir(secondStr);