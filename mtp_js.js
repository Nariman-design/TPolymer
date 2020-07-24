
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



// TPE- модальное окно

$(document).ready(function ($) {
    $('.cont__tp-item1-modal-open').click(function () {
        $('.cont__tp-item1-info').fadeIn();
        return false;
    });

    $('.cont__tp-item1-info-modal-close').click(function () {
        $(this).parents('.cont__tp-item1-info').fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.cont__tp-item1-info').fadeOut();
        }
    });

    $('.cont__tp-item1-info').click(function (e) {
        if ($(e.target).closest('.cont__tp-item1-info-modal').length == 0) {
            $(this).fadeOut();
        }
    });
});
// Краситель белый модальное окно
$(document).ready(function ($) {
    $('.cont__tp-item3-modal-open').click(function () {
        $('.cont__tp-item3-info').fadeIn();
        return false;
    });

    $('.cont__tp-item3-info-modal-close').click(function () {
        $(this).parents('.cont__tp-item3-info').fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.cont__tp-item3-info').fadeOut();
        }
    });

    $('.cont__tp-item3-info').click(function (e) {
        if ($(e.target).closest('.cont__tp-item3-info-modal').length == 0) {
            $(this).fadeOut();
        }
    });
});
// Краситель ЧЕРНЫЙ модальное окно
$(document).ready(function ($) {
    $('.cont__tp-item4-modal-open').click(function () {
        $('.cont__tp-item4-info').fadeIn();
        return false;
    });

    $('.cont__tp-item4-info-modal-close').click(function () {
        $(this).parents('.cont__tp-item4-info').fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.cont__tp-item4-info').fadeOut();
        }
    });

    $('.cont__tp-item4-info').click(function (e) {
        if ($(e.target).closest('.cont__tp-item4-info-modal').length == 0) {
            $(this).fadeOut();
        }
    });
});
// Компаунды РР РА  модальное окно
$(document).ready(function ($) {
    $('.cont__tp-item5-modal-open').click(function () {
        $('.cont__tp-item5-info').fadeIn();
        return false;
    });

    $('.cont__tp-item5-info-modal-close').click(function () {
        $(this).parents('.cont__tp-item5-info').fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.cont__tp-item5-info').fadeOut();
        }
    });

    $('.cont__tp-item5-info').click(function (e) {
        if ($(e.target).closest('.cont__tp-item5-info-modal').length == 0) {
            $(this).fadeOut();
        }
    });
});
// Краситель Цветные модальное окно
$(document).ready(function ($) {
    $('.cont__tp-item7-modal-open').click(function () {
        $('.cont__tp-item7-info').fadeIn();
        return false;
    });

    $('.cont__tp-item7-info-modal-close').click(function () {
        $(this).parents('.cont__tp-item7-info').fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.cont__tp-item7-info').fadeOut();
        }
    });

    $('.cont__tp-item7-info').click(function (e) {
        if ($(e.target).closest('.cont__tp-item7-info-modal').length == 0) {
            $(this).fadeOut();
        }
    });
});