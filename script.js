var main = document.querySelector('.main');
var images = main.querySelector('.images');
var image = document.getElementsByTagName('img');
var imageWidth = main.querySelector('img').clientWidth;
var count = 0;
function left(){
    if (count > 0) {
        count--;
        images.style.transform = 'translateX(' + (-imageWidth * count) + 'px)';
    }
}
document.querySelector('.btn-left').addEventListener('click',  left);
function right(){
    if (count < images.children.length - 1 ) {
        count++;
        images.style.transform = 'translateX(' + (-imageWidth * count) + 'px)';
    }
    if(count == 5){
        count = -1;
    }
}
document.querySelector('.btn-right').addEventListener('click', right);
setInterval(() => {
    const time = new Date();
    const seconds = time.getSeconds();
    right();
    console.log(seconds)
}, 8000);


document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById('sear');
    const input = document.getElementById('text');

    input.addEventListener('keypress', (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            search.click();
        }
    });

    search.addEventListener('click', speak);
    function speak() {
        let synth = window.speechSynthesis;
        let voice = new SpeechSynthesisUtterance(input.value);
        synth.speak(voice);
    }
});


const removeClassAfterDelay = () => {
    const element = document.querySelector('.load');
    const socketElements = document.querySelector('.socket');
    const body = document.querySelector('body');
    setTimeout(() => {
        element.classList.remove('load');
        socketElements.classList.remove('socket');
    }, 3000);
};

removeClassAfterDelay();


