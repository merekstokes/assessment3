function handleColor(){
    alert('blue')
}

function handlePlace(){
    alert('home')
}

function handleRitual(){
    alert('ritual?')
}


let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

color.addEventListener('click', handleColor);
place.addEventListener('click', handlePlace);
ritual.addEventListener('click', handleRitual);