const all_inpt = [
    "locate",
    "message",
    "search",
    "duration" , "gender",
    "duration__persoon1" , "duration__persoon2" , "gender_persoon1" , "gender_persoon2",
    "duration_ov" , "gender_ov",
    "date","start__time","end__time"
]
const side_form = [
    "locate",
    "message",
    "search"
]
const condition_form = {
    "Enkei"         : ["duration" , "gender"],
    "Duo"           : ["duration__persoon1" , "duration__persoon2" , "gender_persoon1" , "gender_persoon2"],
    "Opeenvolgend"  : ["duration_ov" , "gender_ov"]
}

const validate__all__form = (form) => {
    const results = form.map(v => {
        const el = $(`input[name='${v}']`);
        switch(el.attr('type')){
            case "radio":
                if($(`input[name='${v}']:checked`).length) {
                    return true;
                }
                break;
            default:
                if($(`input[name='${v}']`).val() != '') return true;
                break;
        }
        return false;
    })
    return !(new RegExp(results.join("|")).test('false'));
}

$("input").on('change' , function(){
    const input_name = $(this).attr('name');
    const is_contain = new RegExp(all_inpt.join("|")).test(input_name);
    if(is_contain){
        const side_form_status = validate__all__form(side_form);
        const side_form_con_status = validate__all__form(condition_form[$(`input[name='message']:checked`).attr("id")])
        if(side_form_status && side_form_con_status){
            $(".calendar__description__wrapper").css('height', 'auto');
            const schedule = validate__all__form(["date" , "start__time" , "end__time"]);
            if(schedule){
                // generate the cost here ont XXXX

                $("#generate_cost").css('visibility' , 'unset')
            }
        }else{
            $(".calendar__description__wrapper").css('height', '0');
        }
    }
})