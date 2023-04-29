//? Pantalla de carga
const logo = document.querySelector('.svgLogo');
const intro = document.querySelector('.intro');
var executed = false;

function interaction (evento){
    if (evento === "touchstart"){
        addEventListener("touchstart", function(e) {
            animacion("Enter");
        });
    } else {
        addEventListener("keydown", function(e) {
            e.preventDefault();
            if ( e.code == 'Enter' && executed == true) {
                animacion("Enter");
            }if ( e.code == 'Escape') {
                animacion("Escape");
            }
        });
    };
    function animacion(tecla){
        if(tecla === "Enter") {
            intro.style.transition = '1.5s';
            intro.style.opacity = '0'
            intro.style.visibility = 'hidden';
        } else {
            intro.style.visibility = 'visible';
            intro.style.opacity = '1';
        };
    };
};
interaction("keydown");
interaction("touchstart");

anime ({
    targets: '.svgLogo',
    scale: [0.9, 1.05],
    opacity: [1, 0],
    update: function(anim){
        logo.style.filter = 'drop-shadow(0 0 '+ anim.progress / 10 +'px #d1a392) blur(' + anim.progress / 50 + 'px)';
        logo.style.strokeWidth = (anim.progress / 50) + 1 + 'em';
        if (anim.progress <= 50) {
            executed = true;
        };
    },
    easing: 'easeInExpo',
    duration: 11000,
    direction: 'reverse',
});

if(screen.width <= 900){
    document.getElementById("mensaje").innerHTML = "Toca la pantalla";
    caption.style.backgroundColor = "aqua";
};












//? Animación bonfire pendiente
// var bonfire = document.querySelector('.fire');

// function createFire(){
//     //var fire = anime.timeline ({
//     anime({
//         targets: '.fire',
//         opacity: 0.5,
//         easing: 'linear',
//         loop: true,
//     });
// };
// createFire();

// for (var i = 0; i < 10; i++) {
//     fire 
//     .add({
//         translateY: -20,
//         translateX: -10,
//     })
//     .add({
//         translateY: -40,
//         translateX: 0,
//     })
//     .add({
//         translateY: -80,
//         translateX: 2,
//     });
// };