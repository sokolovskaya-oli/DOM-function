const Dom = function(){
    this.create = function(name){
        this.element = document.createElement(name);
        return this.element;
    };

    this.html= function(html, element){
        element = element || this.element;
        element.innerHTML = html;
    };

    this.classAdd = function(name, element){
        element = element || this.element;
        element.classList.add(name); 
    };

    this.classRemove = function(name, element){
        element = element || this.element;
        element.classList.remove(name); 
    };

    this.classToggle = function(name, element){
        element = element || this.element;
        element.classList.toggle(name); 
    };

    this.hasClass = function(name, element){
        element = element || this.element;
        let contains = element.classList.contains(name); 
        console.log(contains)
    };

    this.append = function(to, element, before){
        element = element || this.element;
        if (!before){
            to.appendChild(element);
        } else{
            to.insertBefore(element, before);
        }
    }

    this.search = function(selector, element){
        element = element || document;

        let result = element.querySelectorAll(selector);
        if (result.length ==1) result = result[0];
        return result;
    };

    this.setAttr = function(element, name,value){
        element = element || this.element;
        element.setAttribute(name, value); 
    };

    /*this.onClick = function(element,event,options){
        element = element ||  this.element;
        this.elements.forEach(element => {
        
            element.addEventListener(event,options)
                })
                return this.element;
                
              }*/

      
  };

const $ = new Dom();
console.log($);

let h1 =$.create('h1');
$.html('Заголовок', h1);
console.log(h1);

let p =$.create('p');


console.log(p);
$.html('Текст', p);
$.classAdd('p1', p);
$.classAdd('header', h1);

$.hasClass('p1');

$.classToggle('header',h1);

$.append(document.body, h1)
$.append(document.body, p, h1)

$.setAttr(h1, 'style', "color: red")
$.setAttr(p, 'style', "font-style:italic")


//$.onClick('button','click',forEach)

let button = $.create('button');
$.html('Delete', button);
$.append(document.body, button, h1)
let p2 =$.create('p');
$.html('Еще один абзац', p2);
$.append(document.body, p2);
console.log($.search('p'));
