var nav = document.querySelector('.myNav');
var toggle = document.querySelector('.toggle');
var btn = document.getElementsByClassName('dd-btn');
var menu = document.getElementsByClassName('dd-menu');

// Responsive Design
var navStatus = true;


toggle.addEventListener('click', function(){
	if(navStatus == true) {
	nav.style.left = '0px';
	toggle.style.left = '250px';
	navStatus = false;
} else if (navStatus == false){
	nav.style.left = '-250px';
	toggle.style.left = '15px';
	navStatus = true;
} 
})



// Dropdown-design
function reset(){
for (var a = 0; a < menu.length; a++){
	menu[a].classList.add('hide');
}
}
reset();


for(let i = 0; i < btn.length; i++){
	btn[i].addEventListener('click', function(){
		
		menu[i].classList.toggle('hide');
	})
}







// slider-active
var slideItem = document.querySelectorAll('.slider-item');
var slideLeft = document.querySelector('.slide-left');
var slideRight = document.querySelector('.slide-right');

var current = 0;

function reset(){
	for (var i = 0; i < slideItem.length; i++){
		slideItem[i].style.display = 'none';
	}

}
reset();

function startSlide(){
	reset();
	slideItem[0].style.display = 'block';
}
startSlide();

function leftSlide() {
	reset();
	slideItem[current - 1].style.display = 'block';
	current--;
}
function rightSlide() {
	reset();
	slideItem[current + 1].style.display = 'block';
	current++;
}
slideLeft.addEventListener('click', function(){
	if(current===0){
		current = slideItem.length;
	}
	leftSlide();
})
slideRight.addEventListener('click', function(){
	if(current===slideItem.length -1){
		current = -1;
	}
	rightSlide();
})









// IMAGE-MODAL
var mainImg = document.querySelectorAll('.main-img');
var modalImg = document.querySelector('.modal-img');
var modalImg = document.querySelector('.close');



for(let i = 0; i < mainImg.length; i++){
	mainImg[i].addEventListener('click', function(){
		document.getElementsById('display-modal').style.display = 'block';
		mainImg.src = mainImg[i].src;
	})
}
close.addEventListener('click', function(){
	document.getElementsById('display-modal').style.display = 'none';

});