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