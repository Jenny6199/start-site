"use strict";

let header = document.getElementById('top');
let header_box = document.getElementById('header-text');

function change_header_color() {
    header.classList.add('header_2');
}

function turn_header_color() {
    header.classList.remove('header_2');
}

setTimeout(change_header_color, 3000);
setTimeout(turn_header_color, 8000);

header_box.addEventListener('click', function() {
    alert("Тут нет кнопки, кажется Вы промахнулись :)")
});