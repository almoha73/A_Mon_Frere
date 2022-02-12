const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

//MODALE

const modalContainer = document.querySelector('.modal-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => trigger.addEventListener('click', toggleModal));

function toggleModal(){
    modalContainer.classList.toggle("active");
}
    