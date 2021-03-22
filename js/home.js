$('.tooltip__wrapper > .tooltip__btn').hover(function() {
    $($(this)[0].nextElementSibling).fadeIn();
} , function() {
    $($(this)[0].nextElementSibling).fadeOut();
})