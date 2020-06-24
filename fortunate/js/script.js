const quotes = [
{
  quote: 'Your amazing smile stirs up a unique kind of feeling in my heart, so enjoyable that i would not want to let go off'
 }
]
const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.images');
const picBtn = document.querySelector('.picBtn')
quoteBtn.addEventListener('click', displayQuote);
function displayQuote(){
quote.innerHTML = quotes[0].quote;
document.getElementsByClassName("picBtn")[0].style.display="flex";
}
picBtn.addEventListener('click', displayPic);
function displayPic () {
	document.getElementsByClassName("see")[0].style.display="flex";
}


/*let counter = 0;
let images = [];
nextBtn.addEventListener('click', slidePhoto);
images[0] = 'img/background-0.jpg'
images[1] = 'img/background-1.jpg';
function slidePhoto(){
document.slide.src = images[counter];
/*container.style.backgroundImage = images[counter];*/
/*if(counter < images.length){
counter++;	
}else{
	counter = 0;
}

/*container.style.backgroundImage ='url(img/background-${counter}.jpg'
}*/
