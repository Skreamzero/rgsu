let fistBtn = document.querySelector("#fistBtn")
let secondBtn = document.querySelector("#secondBtn")
let thirdBtn = document.querySelector("#thirdBtn")

let blockOne = document.querySelector("#blockOne");
let blockTwo = document.querySelector("#blockTwo");
let blockThree = document.querySelector("#blockThree");

let containerOne = document.querySelector("#containerOne")
let containerTwo = document.querySelector("#containerTwo")
let containerThree = document.querySelector("#containerThree")

fistBtn.addEventListener('click', function () {
    containerOne.classList.toggle('visible')
    containerTwo.classList.add('visible')
    containerThree.classList.add('visible')
})
secondBtn.addEventListener('click', function () {
    containerOne.classList.add('visible')
    containerTwo.classList.toggle('visible')
    containerThree.classList.add('visible')
    blockOne.classList.add('opacity')
    blockTwo.classList.remove('opacity')
    blockThree.classList.add('opacity')
})
thirdBtn.addEventListener('click', function () {
    containerOne.classList.add('visible')
    containerTwo.classList.add('visible')
    containerThree.classList.toggle('visible')
    blockOne.classList.add('opacity')
    blockTwo.classList.add('opacity')
    blockThree.classList.remove('opacity')
})
fistBtn.addEventListener("click", function() {
    if (blockOne.classList.contains('opacity')){
        blockOne.classList.remove('opacity')  
        blockTwo.classList.add('opacity')
        blockThree.classList.add('opacity')  
    }else if (blockTwo.classList.contains('opacity') == false){
        blockTwo.classList.add('opacity')
        blockThree.classList.add('opacity')  
    }else {
        blockTwo.classList.remove('opacity')
        blockThree.classList.remove('opacity') 
    }
});
secondBtn.addEventListener("click", function() {
    if (blockTwo.classList.contains('opacity')){
        blockTwo.classList.remove('opacity')
        blockOne.classList.add('opacity')  
        blockThree.classList.add('opacity')  
    }else if(blockOne.classList.contains('opacity') != false || blockThree.classList.contains('opacity') != false){
        blockOne.classList.add('opacity')
        blockThree.classList.add('opacity')  
    }else {
        blockOne.classList.remove('opacity')
        blockThree.classList.remove('opacity') 
    }
});
thirdBtn.addEventListener("click", function() {
    if (blockThree.classList.contains('opacity') && blockTwo.classList.contains('opacity') != false && blockOne.classList.contains('opacity') != false){
        blockOne.classList.add('opacity')  
        blockTwo.classList.add('opacity')
        blockThree.classList.remove('opacity')  
    }else if (blockOne.classList.contains('opacity') != false || blockTwo.classList.contains('opacity') != false){
        blockTwo.classList.add('opacity')
        blockOne.classList.add('opacity')  
    }else {
        blockTwo.classList.remove('opacity')
        blockOne.classList.remove('opacity') 
    }
});

var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var secondslideIndex = 1;
secondshowSlides(secondslideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function secondplusSlide() {
    secondshowSlides(secondslideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function secondminusSlide() {
    secondshowSlides(secondslideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function secondcurrentSlide(b) {
    secondshowSlides(secondslideIndex = b);
}

/* Основная функция слайдера */
function secondshowSlides(b) {
    var a;
    var secondslides = document.getElementsByClassName("secondItem");
    if (b > secondslides.length) {
        secondslideIndex = 1
    }
    if (b < 1) {
        secondslideIndex = secondslides.length
    }
    for (a = 0; a < secondslides.length; a++) {
        secondslides[a].style.display = "none";
    }
    secondslides[secondslideIndex - 1].style.display = "block";
}
var slideIndexThree = 1; 
showSlidesThree(slideIndexThree); 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/ 
function plusSlideThree() { 
    showSlidesThree(slideIndexThree += 1); 
} 
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/ 
function minusSlideThree() { 
    showSlidesThree(slideIndexThree -= 1);   
} 
 
/* Устанавливает текущий слайд */ 
function currentSlideThree(n) { 
    showSlidesThree(slideIndexThree = n); 
} 
 
/* Основная функция слайдера */ 
function showSlidesThree(n) { 
    var i; 
    var slides = document.getElementsByClassName("achievements__slider--block"); 
    if (n > slides.length) { 
      slideIndexThree = 1 
    } 
    if (n < 1) { 
        slideIndexThree = slides.length 
    } 
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }
    slides[slideIndexThree - 1].style.display = "flex"; 
}

let qstBtnOne = document.querySelector("#qstBtnOne")
let hidetxtOne = document.querySelector("#hidetxtOne")

let qstBtnTwo = document.querySelector("#qstBtnTwo")
let hidetxtTwo = document.querySelector("#hidetxtTwo")

let qstBtnThree = document.querySelector("#qstBtnThree")
let hidetxtThree = document.querySelector("#hidetxtThree")

let qstBtnFour = document.querySelector("#qstBtnFour")
let hidetxtFour = document.querySelector("#hidetxtFour")

let qstBtnFive = document.querySelector("#qstBtnFive")
let hidetxtFive = document.querySelector("#hidetxtFive")

let qstBtnSix = document.querySelector("#qstBtnSix")
let hidetxtSix = document.querySelector("#hidetxtSix")

qstBtnOne.addEventListener('click', function () {
    qstBtnOne.classList.toggle('question__pic-Revers')
    hidetxtOne.classList.toggle('visible')
})
qstBtnTwo.addEventListener('click', function () {
    qstBtnTwo.classList.toggle('question__pic-Revers')
    hidetxtTwo.classList.toggle('visible')
})
qstBtnThree.addEventListener('click', function () {
    qstBtnThree.classList.toggle('question__pic-Revers')
    hidetxtThree.classList.toggle('visible')
})
qstBtnFour.addEventListener('click', function () {
    qstBtnFour.classList.toggle('question__pic-Revers')
    hidetxtFour.classList.toggle('visible')
})
qstBtnFive.addEventListener('click', function () {
    qstBtnFive.classList.toggle('question__pic-Revers')
    hidetxtFive.classList.toggle('visible')
})
qstBtnSix.addEventListener('click', function () {
    qstBtnSix.classList.toggle('question__pic-Revers')
    hidetxtSix.classList.toggle('visible')
})


function toggleButton(){
        var username = document.getElementById('username').value;
        var number = document.getElementById('number').value;
 
        if (username && number) {
            alert('a')
            document.getElementById('submitButton').disabled = false;
        } else {
            alert('b')
             document.getElementById('submitButton').disabled = true;
        }
}


