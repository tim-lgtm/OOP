'use strict';

const  domElement = function(selector, height, width, bg, fontSize, text){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
};

// let DomElement = new domElement('#мазда', '1.8', '2.8', 'white', '19')
// console.log('DomElement: ', DomElement);
// domElement.selector.split('');
// console.log('domElement.selector: ', domElement.selector);
domElement.prototype.class = function(){
  let elem;
  
  if(this.selector[0] === '.'){
    elem = document.createElement('div');
    elem.classList.add('block');
    console.log(elem);
  }else if (this.selector[0] === '#'){
    elem = document.createElement('p');
    elem.id = 'best';
    console.log('elem: ', elem);
  }

  elem.style.cssText = `
    width: ${this.width}px;
    height: ${this.height}px;
    background-color: ${this.bg};
    font-size: ${this.fontSize}px;
  `;

  elem.textContent = `${this.text}`;

  document.body.insertAdjacentElement('beforebegin', elem);
  // console.log(firstSymbol);
};

const newDiv = new domElement('.main', 100, 200, 'red', 24, 'привет');
newDiv.class();
const block = new domElement('#block', 300, 300, 'green', 24, 'не привет');
block.class();