let number = 5e+14
current_min = 0
current_max = (5e+14)*2
let number_box = document.getElementById("number")

number_box.innerText = number.toString()

function greater(){
    current_min = number;
    number = parseInt((current_max + current_min) / 2)
    number_box.innerText = number.toString()
}
function lesser(){
    current_max = number;
    number = parseInt((current_max + current_min) / 2)
    number_box.innerText = number.toString()
}