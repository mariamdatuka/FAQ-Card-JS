const questions = document.querySelectorAll('.question-box');



questions.forEach(box=>{
    box.addEventListener('click', onClick)
})

function onClick(e){
 //clear active class for all question boxes
 questions.forEach(box=>{
    box.classList.remove('active');
 })
 //add active class on target question
 e.target.parentElement.classList.add('active');
 
}

