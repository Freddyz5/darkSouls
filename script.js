const logo = document.querySelector('.svgLogo');

anime ({
    targets: '.svgLogo',
    scale: [0.9, 1.05],
    opacity: [1, 0],
    update: function(anim){
        logo.style.filter = 'blur(' + 5 * anim.progress / 50 + 'px)'
        logo.style.filter = 'drop-shadow(0 0 1em #d1a392)'
    },
    easing: 'easeInExpo',
    duration: 11000,
    direction: 'reverse',
    loop: true
})