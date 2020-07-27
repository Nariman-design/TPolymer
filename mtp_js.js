
//Кнопка Вверх
mybutton = document.getElementById("myBtn");
// cСкроллим  550px после чего появится кнопка ВВЕРХ
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// кликаем на кнопку и оказываемся в ТОПЕ-550
function topFunction() {
    document.body.scrollTop = 550; // For Safari
    document.documentElement.scrollTop = 550; // For Chrome, Firefox, IE and Opera
} 




// МЕНЮ
$('.menu__main-burg,.menu__main li').on('click', function () {
    $('.menu__burg-line,.menu__main,.menu__row').toggleClass('in');
    $('body').toggleClass('lock');
})

    
    //Заставка
$(document).ready(function () {
    $('.screensaver-slogan').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });
});

// TPE
$(document).ready(function () {
    $('.product-tpe-list').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });
});

// Краситель белый модальное окно

// Краситель ЧЕРНЫЙ 
$(document).ready(function () {
    $('.product-black-list').click(function () {
        $(this).toggleClass('in').next().slideToggle();
    });
})
// Компаунды РР РА  модальное окно

// Краситель Цветные модальное окно
