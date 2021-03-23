$('.tooltip__wrapper > .tooltip__btn').hover(function() {
    $($(this)[0].nextElementSibling).fadeIn();
} , function() {
    $($(this)[0].nextElementSibling).fadeOut();
})

// calendar code
var selected__day = new Date();
const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];
function generate__calendar(date){
    const today = new Date(date);
    $("#date__value").attr('value' , `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`);
    $(".month__name").text(months[today.getMonth()]);
    let last__day = new Date(today.getFullYear() , today.getMonth() + 1 , 0);
    let prev__last__day = new Date(today.getFullYear() , today.getMonth() , 0);
    let last__day__index = new Date(today.getFullYear() , today.getMonth() + 1, 0).getDay();
    const next__day = 7 - last__day__index - 1;
    today.setDate(1);
    const first__index = today.getDay();
    let days = "";
    for(let x = first__index; x > 0 ; x--){
        days += `<div class="day__item disable__day">${prev__last__day.getDate() - x + 1}</div>`;
    }
    for(let i = 1; i<= last__day.getDate(); i++){
        days += `<div class="day__item">${i}</div>`;
    }
    for(let z = 1;z <= next__day;z++){
        days += `<div class="day__item disable__day">${z}</div>`;
    }

    $('.days__wrapper').html(days);
    $(".day__item").click(function() {
        const getClass = $(this).attr('class');

        const is__desc = $(".calendar__description__wrapper").css('display');
        if(is__desc !== 'none'){
            $(".calendar__description__wrapper").hide();
            $(".time__lists__wrapper").css('display' , 'flex');
        }

        if(!getClass.toString().includes('disable__day')){
            $(".active__day").removeClass('active__day');
            $(this).addClass('active__day');
            let getCurrentDate = new Date($("#date__value").attr('value'));
            getCurrentDate.setDate($(this).text());
            $("#date__value").attr('value', `${getCurrentDate.getMonth() + 1}/${getCurrentDate.getDate()}/${getCurrentDate.getFullYear()}`);
        }
    })
}

generate__calendar(selected__day);
$(".next__month").click(function(){
    selected__day.setMonth(selected__day.getMonth() + 1);
    generate__calendar(selected__day);
})
$(".prev__month").click(function(){
    selected__day.setMonth(selected__day.getMonth() - 1);
    generate__calendar(selected__day);
})

$(".time__item").click(function() {
    $(".active__time__item").removeClass("active__time__item");
    const getData = $(this).text().replace(" " , '').split("-");
    $(this).addClass("active__time__item");
    $("#start__time").attr("value" , getData[0]);
    $("#end__time").attr("value" , getData[1]);
})

$(".select__package__button").click(function() {
    $(".show__package").removeClass('show__package');
    const target = $(this).attr('message-type');
    console.log(target);
    $(`#${target}`).addClass('show__package');
})