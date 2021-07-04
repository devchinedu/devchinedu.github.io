'use strict';

const aboutBtn = document.querySelector('.aboutBtn');
let about = document.querySelector('#about');


aboutBtn.addEventListener('click', function(){
console.log('clic');
about.style.display ='flex';
document.querySelector('header').style.display = 'none';
    
})

