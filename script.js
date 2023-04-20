const logo = document.querySelector('.svgLogo');
addEventListener("keydown", function(e) {
    e.preventDefault();
    if ( e.code == 'Enter') {
        logo.style.visibility = 'hidden';
    }if ( e.code == 'Escape') {
        logo.style.visibility = 'visible';
    }
});

anime ({
    targets: '.svgLogo',
    scale: [0.9, 1.05],
    opacity: [1, 0],
    update: function(anim){
        logo.style.filter = 'drop-shadow(0 0 '+ anim.progress / 10 +'px #d1a392) blur(' + anim.progress / 50 + 'px)';
        logo.style.strokeWidth = (anim.progress / 50) + 0.7 + 'em';
    },
    easing: 'easeInExpo',
    duration: 11000,
    direction: 'reverse',
});