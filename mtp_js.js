
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
    $('.screensaver-slogan, .screensaver-text').click(function () {
        $('.screensaver-slogan').toggleClass('in').next().slideToggle();
    });
});

// TPE
$(document).ready(function () {
    $('.product-tpe-list, .product-tpe-text').click(function () {
        $('.product-tpe-list').toggleClass('in').next().slideToggle();
    });
});

// Краситель белый 
$(document).ready(function () {
    $('.product-white-list, .product-white-text').click(function () {
        $('.product-white-list').toggleClass('in').next().slideToggle();
    });
})
// Краситель ЧЕРНЫЙ 
$(document).ready(function () {
    $('.product-black-list, .product-black-text').click(function () {
        $('.product-black-list').toggleClass('in').next().slideToggle();
    });
})
// Компаунды РР РА  
$(document).ready(function () {
    $('.product-comp-list, .product-comp-text').click(function () {
        $('.product-comp-list').toggleClass('in').next().slideToggle();
    });
})
// Краситель Цветные 
$(document).ready(function () {
    $('.product-color-list, .product-color-text-list').click(function () {
        $('.product-color-list').toggleClass('in').next().slideToggle();

    });
    
})
