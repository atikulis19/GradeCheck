let btn1 = document.querySelector("#btn1")
let firstClick = document.querySelector('.box_overlay')


btn1.addEventListener("click", buttHide);

function buttHide(){
    firstClick.classList.add('hide');

}






let input = document.querySelector('#input_filed');
input.addEventListener("keyup", gradeShow);

function gradeShow () {
    let inputValue = input.value;
    let converValue = Number.parseInt(inputValue);
    let resulShow = document.querySelector('.resultText')

    input.style.marginBottom = "30px";

    if(converValue<=100 && converValue >=80){
        resulShow.innerHTML = 'You got A+'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(converValue<80 && converValue >=70){
        resulShow.innerHTML = 'You got A'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(converValue<70 && converValue >=60){
        resulShow.innerHTML = 'You got A-'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(converValue<60 && converValue >=50){
        resulShow.innerHTML = 'You got B'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(converValue<50 && converValue >=40){
        resulShow.innerHTML = 'You got C'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(converValue<40 && converValue >=33){
        resulShow.innerHTML = 'You got D'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(converValue<33 && converValue>=0){
        resulShow.innerHTML = 'You got F'
        resulShow.style.color = 'red'
    }
    else{
        resulShow.innerHTML = `<i class="bi bi-emoji-smile-upside-down"> </i><i class="bi bi-emoji-smile-upside-down"> </i><i class="bi bi-emoji-smile-upside-down"></i>`;
        
        resulShow.style.color = 'red'
    }

}