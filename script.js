const advice = document.querySelector('.advice');
const adviceID = document.querySelector('.adviceID');
const button = document.querySelector('.button');
let newAdvice;
const url = 'https://api.adviceslip.com/advice/';

let getAdvice = () => {
    let randomNumber = Math.floor(Math.random() * (224 - 1) + 1);
    fetch(url + randomNumber)
    .then(data => data.json())
    .then(advice.style.opacity = "0")
    .then(item => {
        if(item.slip == undefined)
            {
                getAdvice();
            }
        else{
            advice.innerHTML = item.slip.advice;
            adviceID.innerHTML = `#${randomNumber}`;
            advice.style.opacity = "1";
            }
        })
}
getAdvice();
button.addEventListener("click", getAdvice)
