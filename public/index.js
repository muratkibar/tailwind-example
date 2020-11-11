const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else{
        menu.classList.add('hidden');
    }
});

const mbHoverAbout = document.querySelector('#mb-hover-about');
mbHoverAbout.addEventListener('mouseover', func1, false);
mbHoverAbout.addEventListener('mouseout', func2, false);

const mbHoverContact = document.querySelector('#mb-hover-contact');
mbHoverContact.addEventListener('mouseover', func3, false);
mbHoverContact.addEventListener('mouseout', func4, false);

function func1(){
    mbHoverAbout.classList.remove('border-white');
    mbHoverAbout.classList.add('border-primary');
}

function func2(){
    mbHoverAbout.classList.remove('border-primary');
    mbHoverAbout.classList.add('border-white');
}

function func3(){
    mbHoverContact.classList.remove('border-white');
    mbHoverContact.classList.add('border-primary');
}

function func4(){
    mbHoverContact.classList.remove('border-primary');
    mbHoverContact.classList.add('border-white');
}