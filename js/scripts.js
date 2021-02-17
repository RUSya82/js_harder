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
        font-size: ${this.fontSize};`
}

DomElement.prototype.render = function () {
    let div = document.createElement('div');
    if(this.selector[0] === '#'){
        div.setAttribute('id', this.selector.slice(1));
    } else if(this.selector[0] === '.'){
        div.classList.add(this.selector.slice(1));
    }
    div.style.cssText = this.cssString;
    div.textContent = this.text;
    document.body.append(div);

}

let newElem = new DomElement('.dom', '150px', '150px', '#44a51a', '20px', 'Это просто div');
newElem.render();