const body = document.querySelector('body');
const sec1 = document.querySelector('.sec1');
const div1 = document.querySelector('.div1');
const sec2 = document.querySelector('.sec2');
const div2 = document.querySelector('.div2');
const sec3 = document.querySelector('.sec3');
const div3 = document.querySelector('.div3');
const sec4 = document.querySelector('.sec4');
const caption1 = document.getElementById('caption1');
const caption2 = document.getElementById('caption2');
const caption3 = document.getElementById('caption3');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const caption4 = document.getElementById('caption4');
const caption5 = document.getElementById('caption5');
const caption6 = document.getElementById('caption6');
const caption7 = document.getElementById('caption7');
const img3 = document.getElementById('img3');

body.addEventListener('scroll', function(event) {
    var height = (body.scrollTop/(body.scrollHeight-window.innerHeight));//0 -> 1
    
    function middleOpacity (element) {
        if (height > 0.5){
            element.style.opacity = (1-height)*2 + '0';
        }else{
            element.style.opacity = (height*2) -0.01 + '0';
        }
    };
    
    sec1.style.opacity = 1 - (height*5) + '0';
    div1.style.opacity = 0.9 - (height*2) + '0';
    sec2.style.opacity = 0.9 - (height*0.9) + '0';
    middleOpacity(div3);
    sec3.style.opacity = height - 0.05 + '0';
    div3.style.opacity = height - 0.1 + '0';
    sec4.style.opacity = height - 0.15 + '0';

    caption1.style.transform = 'translateY('+(height*3000)+'px)';
    caption2.style.scale = (1.5-(height*2));
    caption3.style.scale = (2.2-(height*2));
    img1.style.scale = (1.6-(height*2));
    img2.style.scale = (1.6-(height*2));
    caption4.style.scale = (height*2);
    
    caption5.style.scale = (height*1.6);;
    caption6.style.scale = (height*1.1);
    caption7.style.transform = 'translateX('+(height*500)+'px)';
    img3.style.transform = 'translateX('+(height*1000)+'px)';
});
