const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animaCard() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    });
}
animaCard();
window.addEventListener('scroll', function(){
    animaCard();
})