// //? Pantalla de carga
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

window.scrollTo( 0, 0 );

//? Animación bonfire pendiente
var fragment = document.createDocumentFragment();
var numberOfFires = 100;
var duration = 5000;
var midScreenX = window.innerWidth / 2;
var midScreenY = window.innerHeight / 2;

function createFire() {
    var fire = document.createElement('div');
    radius = (Math.random() * (100 - 10 + 1) + 10);
    fire.classList.add('fire');
    fire.style.backgroundColor = '#f0eaf2';
    fire.style.boxShadow = '0 5px 5px #ec9633';
    fire.style.borderRadius = '10px';
    fire.style.width = '5px';
    fire.style.height = '10px';
    return fire;
}

for (var i = 0; i < numberOfFires; i++){
    var fires = createFire();
    var angle = Math.random() * Math.PI * 2;
    console.log(angle)
    function animation(target) {
        anime ({
            targets: target,
            scale: [0.5, 1, 0],
            opacity: [0, 1.5],
            left: [anime.random((midScreenX-35),(midScreenX+22)) + 'px', anime.random(400, 1200) + 'px'],
            top: [640 + 'vw', -1000 + 'px'],
            delay: (duration/numberOfFires) * i,
            duration: duration,
            easing: 'linear',
            loop: true,
        });
        fragment.appendChild(target);
    };
    animation(fires);
};
document.body.appendChild(fragment);




const main = document.querySelector('.main');
const img3 = document.querySelector('.img3');
const div = document.querySelector('.div');
const divImg = document.querySelector('.div-img');
const body = document.querySelector('body');
var executed = false;

body.addEventListener('scroll', function(event) {
    var height = (body.scrollTop/(body.scrollHeight-window.innerHeight));//0 -> 1
    
    function middleOpacity (element) {
        if (height > 0.5){
            //console.log("+-");
            element.style.opacity = (1-height)*2 + '0';
        }else{
            //console.log("-+");
            element.style.opacity = (height*2) -0.01 + '0';
        }
    };
    
    main.style.opacity = 0.9 - (height*0.9) + '0';
    div.style.boxShadow = '0 0 50 ' + 1 - (height*3) + 'px #000000;';
    middleOpacity(div);
    img3.style.opacity = height + '0';
});



