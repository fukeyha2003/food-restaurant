const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})
srchicon1.addEventListener('click', function(){
    search1.style.display = 'none';
    searchicon1.style.display = 'block';
})
const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})
srchicon2.addEventListener('click', function(){
    search2.style.display = 'none';
    searchicon2.style.display = 'block';
})
const bar = document.querySelector('.ri-align-justify');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(()=>{
        cross.style.display ='block';
    },200);
    headerbar.style.right ='0%';
})
cross.addEventListener('click', function(){
        cross.style.display ='none';
    headerbar.style.right ='-100%';
})
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const menu = document.querySelector('.food-menu');
const book = document.querySelector('.book-table');

home.addEventListener('click', function(){
    cross.style.display ='none';
    headerbar.style.right ='-100%';
})
about.addEventListener('click', function(){
    cross.style.display ='none';
    headerbar.style.right ='-100%';
})
menu.addEventListener('click', function(){
    cross.style.display ='none';
    headerbar.style.right ='-100%';
})
book.addEventListener('click', function(){
    cross.style.display ='none';
    headerbar.style.right ='-100%';
})