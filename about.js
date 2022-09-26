console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function handleMouseover(){
	alert('here is a compliment');
}


let form = document.querySelector('#contact');
let picture = document.querySelector('#picture');

form.addEventListener('submit', handleSubmit);
picture.addEventListener('mouseover', handleMouseover);