document.addEventListener('DOMContentLoaded', () => {
    let input = document.querySelector('input');
    let result = document.querySelector('.result');
    let id;
    input.addEventListener('input' , () => {
        if(id){
            clearTimeout(id);
        }
        id = setTimeout(function () {
            result.textContent = input.value;
        }, 300);
    });
});