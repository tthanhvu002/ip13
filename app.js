const btn = document.querySelector('.card-btn-abs')
const step1 = document.querySelector('.step-1')
const step2 = document.querySelector('.step-2')
var ignoreClickOnMeElement = step2

document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target) || step1.contains(event.target) || btn.contains(event.target);
    if (!isClickInsideElement) {
        //Do something click is outside specified element
        document.querySelector('.page-4 >.container').style.filter = 'blur(0px)'
        step2.classList.remove('active')
    }
    
    
});

btn.onclick = () => {
    step1.classList.add('active')
    document.querySelector('.page-4 >.container').style.filter = 'blur(1px)'
    step1.querySelector('.loan-btn').onclick = () => {
        step1.classList.toggle('active')
        step2.classList.add('active')
        
    }
}



