/**
 * Конструктора элемента
 * @param selector
 * @param height
 * @param width
 * @param bg
 * @param fontSize
 * @param text
 * @constructor
 */
const DomElement = function ( selector, height, width, bg, fontSize, text) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.text = text;
    this.cssString = `height: ${this.height}; 
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        position: absolute;`
}

/**
 * Функция отрисовки элемента на странице
 */
DomElement.prototype.render = function () {
    document.body.innerHTML = '';
    let div = document.createElement('div');
    if(this.selector[0] === '#'){
        div.setAttribute('id', this.selector.slice(1));
    } else if(this.selector[0] === '.'){
        div.classList.add(this.selector.slice(1));
    }
    div.style.cssText = this.cssString;
    div.textContent = this.text;
    document.body.append(div);
    document.addEventListener('keydown', function(event) {
        let domStyle = getComputedStyle(div);
        let top = parseInt(domStyle.top);
        let left = parseInt(domStyle.left);
        switch (event.key) {
            case 'ArrowUp':
                div.style.top = top - 10 + 'px';
                break;
            case 'ArrowDown':
                div.style.top = top + 10 + 'px';
                break;
            case 'ArrowRight':
                div.style.left = left + 10 + 'px';
                break;
            case 'ArrowLeft':
                div.style.left = left - 10 + 'px';
                break;
        }
    });
}
//создаем и запускаем после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    let newElem = new DomElement('.dom', '100px', '100px', '#44a51a', '20px', '');
    newElem.render();
});




