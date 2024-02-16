const keys = 'abcdefghijklmnopqrstuvwxyz';
const keysArray = keys.split('');

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function continueGame (){
    const randomKey = Math.random()*25
    const key = Math.round(randomKey);
    const index = keysArray[key];
    const displayKey = document.getElementById('display-key');
    displayKey.innerText = index;

    setBackgroundColor(index)
    
}