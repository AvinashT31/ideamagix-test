let question1 = document.getElementById('question1');
let plusIcon = document.getElementById('plusicon');
let answer1 = document.getElementById('answer1');

question1.addEventListener('click', () => {
    if (answer1.style.display === 'none') {
        answer1.style.display = 'block';
        plusIcon.innerHTML = '<i class="fa-solid fa-minus"></i>';
    } else {
        answer1.style.display = 'none';
        plusIcon.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
});

let question2 = document.getElementById('question2');
let plusIcon1 = document.getElementById('plusicon2');
let answer2 = document.getElementById('answer2');

question2.addEventListener('click', () => {
    if (answer2.style.display === 'none') {
        answer2.style.display = 'block';
        plusIcon1.innerHTML = '<i class="fa-solid fa-minus"></i>';
    } else {
        answer2.style.display = 'none';
        plusIcon1.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
});

let question3 = document.getElementById('question3');
let plusIcon3 = document.getElementById('plusicon3');
let answer3 = document.getElementById('answer3');

question3.addEventListener('click', () => {
    if (answer3.style.display === 'none') {
        answer3.style.display = 'block';
        plusIcon3.innerHTML = '<i class="fa-solid fa-minus"></i>';
    } else {
        answer3.style.display = 'none';
        plusIcon3.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
});

let question4 = document.getElementById('question4');
let plusIcon4 = document.getElementById('plusicon4');
let answer4 = document.getElementById('answer4');

question4.addEventListener('click', () => {
    if (answer4.style.display === 'none') {
        answer4.style.display = 'block';
        plusIcon4.innerHTML = '<i class="fa-solid fa-minus"></i>';
    } else {
        answer4.style.display = 'none';
        plusIcon4.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
});




