'use strict';

const aboutBtn = document.querySelectorAll('.aboutBtn');
const resumeBtn = document.querySelectorAll('.resume');
const portofolioBtn = document.querySelectorAll('.portofolio');
const contactBtn = document.querySelectorAll('.contact');

const removeHeader = function(){
    document.querySelector('header').style.display = 'none';
}

const removeFlex = function(){
    if(
        document.querySelector('#about').style.display = 'flex',
        document.querySelector('#resume').style.display = 'flex',
        document.querySelector('.gridContainer').style.display = 'flex',
        document.querySelector('#contact').style.display = 'flex'
    ){
        document.querySelector('#about').style.display = 'none',
        document.querySelector('#resume').style.display = 'none',
        document.querySelector('.gridContainer').style.display = 'none',
        document.querySelector('#contact').style.display = 'none'
    }
}








  aboutBtn.forEach(function(i){
      i.addEventListener('click', function(){
        removeHeader();
        removeFlex();
        document.querySelector('#about').style.display = 'flex';
      })
  })


  resumeBtn.forEach(function(i){
    i.addEventListener('click', function(){
    removeHeader();
    removeFlex();
    document.querySelector('#resume').style.display = 'flex';

})
})

portofolioBtn.forEach(function(i){
    i.addEventListener('click', function(){
    removeHeader();
    removeFlex();
    document.querySelector('.gridContainer').style.display = 'flex';
   
})
})


contactBtn.forEach(function(i){
    i.addEventListener('click', function(){
    removeHeader();
    removeFlex();
    document.querySelector('#contact').style.display = 'flex';
})
})
