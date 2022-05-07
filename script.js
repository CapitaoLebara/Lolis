const slider = document.querySelector("input")
const bar = document.querySelector(".progressbar")
const thumb = document.querySelector(".thumb")
const slider_icon = document.querySelector(".slider-icon")
const body = document.querySelector("body")

slider.oninput = ()=>{
    let value = slider.value
    thumb.style.left = value + "%"
    bar.style.width = value + "%" 
    if(value<20){
        slider_icon.style.marginTop = "0px"
        body.style.background = "linear-gradient(#FF8D8D,#E88574)";

    }
    if(value>=20){
        slider_icon.style.marginTop = "-510px"
        body.style.background = "linear-gradient(#FAF67B,#FAAA28)"

    }
    if(value>=40){
        slider_icon.style.marginTop = "-1100px"
        body.style.background = "linear-gradient(#E440F0,#AD76DE)"
    }
    if(value>=60){
        slider_icon.style.marginTop = "-1800px"
        body.style.background = "linear-gradient(#57C7C6,#7095C7)"
    }
    if(value>=80){
        slider_icon.style.marginTop = "-2400px"
        body.style.background = "linear-gradient(#F08A81,#DBAE57)"
    }
    if(value>=100){
        slider_icon.style.marginTop = "-3000px"
        body.style.background = "linear-gradient(#DBAF8C,#F08B81)"
    }
}