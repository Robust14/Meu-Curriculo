'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme'){
        this.textContent = "☾";
        let msg = document.querySelector('.cidade');
        let titulo = document.querySelector('.nome');
        let box22 = document.querySelector('.box22');
        let bgTop = document.querySelector('.item:nth-child(1)');
        let bgInicio = document.querySelector('.item:nth-child(2)');
        let bgQuemsou = document.querySelector('.item:nth-child(3)');
        let layer1 = document.querySelector('#layer_1');

        titulo.style.color = '#000';
        box22.style.color = '#aaa';
        msg.style.color = '#000';
        bgTop.style.backgroundColor = "#2acc6d";
        bgInicio.style.backgroundColor = "#2acc6d";
        bgQuemsou.style.backgroundColor = "#fff";
        layer1.style.color = '#000';
    }
    else{
        this.textContent = "☀";
        let msg = document.querySelector('.cidade');
        let titulo = document.querySelector('.nome');
        let box22 = document.querySelector('.box22');
        let bgTop = document.querySelector('.item:nth-child(1)');
        let bgInicio = document.querySelector('.item:nth-child(2)');
        let bgQuemsou = document.querySelector('.item:nth-child(3)');
        let layer1 = document.querySelector('#layer_1');
        titulo.style.color = '#fff';
        box22.style.color = '#fff';
        msg.style.color = '#00ffff';
        bgTop.style.backgroundColor = "#444";
        bgInicio.style.backgroundColor = "#444";
        bgQuemsou.style.backgroundColor = "#333";
        layer1.style.color = '#fff';
    }
});