// Animation 4 : flou

const btn1 = document.querySelector('.minibox1');
const btn2 = document.querySelector('.minibox2');
const btn3 = document.querySelector('.minibox3');
const btn4 = document.querySelector('.minibox4');
const btn5 = document.querySelector('.minibox5');
const btn6 = document.querySelector('.minibox6');

btn1.addEventListener('mouseenter', () => {
    btn2.classList.add('flou');
    btn3.classList.add('flou');
    btn4.classList.add('flou');
    btn5.classList.add('flou');
    btn6.classList.add('flou');
})
btn1.addEventListener('mouseleave', () => {
    btn2.classList.remove('flou');
    btn3.classList.remove('flou');
    btn4.classList.remove('flou');
    btn5.classList.remove('flou');
    btn6.classList.remove('flou');
})

btn2.addEventListener('mouseenter', () => {
    btn1.classList.add('flou');
    btn3.classList.add('flou');
    btn4.classList.add('flou');
    btn5.classList.add('flou');
    btn6.classList.add('flou');
})
btn2.addEventListener('mouseleave', () => {
    btn1.classList.remove('flou');
    btn3.classList.remove('flou');
    btn4.classList.remove('flou');
    btn5.classList.remove('flou');
    btn6.classList.remove('flou');
})

btn3.addEventListener('mouseenter', () => {
    btn1.classList.add('flou');
    btn2.classList.add('flou');
    btn4.classList.add('flou');
    btn5.classList.add('flou');
    btn6.classList.add('flou');
})
btn3.addEventListener('mouseleave', () => {
    btn1.classList.remove('flou');
    btn2.classList.remove('flou');
    btn4.classList.remove('flou');
    btn5.classList.remove('flou');
    btn6.classList.remove('flou');
})
btn4.addEventListener('mouseenter', () => {
    btn1.classList.add('flou');
    btn2.classList.add('flou');
    btn3.classList.add('flou');
    btn5.classList.add('flou');
    btn6.classList.add('flou');
})
btn4.addEventListener('mouseleave', () => {
    btn1.classList.remove('flou');
    btn2.classList.remove('flou');
    btn3.classList.remove('flou');
    btn5.classList.remove('flou');
    btn6.classList.remove('flou');
})
btn5.addEventListener('mouseenter', () => {
    btn1.classList.add('flou');
    btn2.classList.add('flou');
    btn3.classList.add('flou');
    btn4.classList.add('flou');
    btn6.classList.add('flou');
})
btn5.addEventListener('mouseleave', () => {
    btn1.classList.remove('flou');
    btn2.classList.remove('flou');
    btn3.classList.remove('flou');
    btn4.classList.remove('flou');
    btn6.classList.remove('flou');
})
btn6.addEventListener('mouseenter', () => {
    btn1.classList.add('flou');
    btn2.classList.add('flou');
    btn3.classList.add('flou');
    btn4.classList.add('flou');
    btn5.classList.add('flou');
})
btn6.addEventListener('mouseleave', () => {
    btn1.classList.remove('flou');
    btn2.classList.remove('flou');
    btn3.classList.remove('flou');
    btn4.classList.remove('flou');
    btn5.classList.remove('flou');
})





// Animation 5 : gloss

const text = document.querySelector('.box5 .txt');

text.addEventListener('mouseenter', () => {
    text.classList.add('anim');
})
text.addEventListener('mouseleave', () => {
    text.classList.remove('anim');
})

// Animation 7 cursor

const cursor = document.querySelector('.cursor');
const box7 = document.querySelector('.box7');

box7.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - box7.offsetTop -20}px`
    cursor.style.left = `${e.pageX - box7.offsetLeft-20}px`
    cursor.style.display = "block"
    
});

box7.addEventListener('mouseout', () => {
    cursor.style.display = "none"
});

