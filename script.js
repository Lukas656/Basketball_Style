let camisas = document.getElementById('camisa');
let tenis = document.getElementById('tenis');
let bola = document.getElementById('bola');

// Cards com os Items 
let galeria = document.querySelector('.galeria');


// conteiner com informações de Compra 
let conteiner1 = document.querySelector('.conteiner1');
let conteiner2 = document.querySelector('.conteiner2');
let conteiner3 = document.querySelector('.conteiner3');


// botão de fechar conteiner

let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');
let close3 = document.querySelector('.close3');

close1.addEventListener('click', ()=>{
    galeria.style.display = 'grid';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
});
close2.addEventListener('click', ()=>{
    galeria.style.display = 'grid';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
});
close3.addEventListener('click', ()=>{
    galeria.style.display = 'grid';
    conteiner1.style.display = 'none';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
});

// conteiner com informações de Compra 
camisas.addEventListener('click', () => {
    conteiner1.style.display = 'grid';
    conteiner2.style.display = 'none';
    conteiner3.style.display = 'none';
    galeria.style.display = 'none';
});
tenis.addEventListener('click', () => {
    conteiner2.style.display = 'grid';
    conteiner1.style.display = 'none';
    conteiner3.style.display = 'none';
    galeria.style.display = 'none';
});
bola.addEventListener('click', () => {
    conteiner3.style.display = 'grid';
    conteiner2.style.display = 'none';
    conteiner1.style.display = 'none';
    galeria.style.display = 'none';
});




