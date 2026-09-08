'use-strict'
const seletor = document.querySelector(".btn");
seletor.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro')
    
    let className = document.body.className;
    if(className == 'tema-claro'){
        this.textContent = 'escuro';

    }else{
        this.textContent = 'claro';
    }
    console.log("funcionou! Veja: " + className)
});