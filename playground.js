const keys = 'abcdefghijklmnopqrstuvwxyz';
const keysArray = keys.split('');

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColor(e) {
    const key = document.getElementById(e);
    key.classList.remove('bg-orange-400');
}


function handleKeyboardKeyUpPress(event) {
    const userPressed = event.key;
    const currentLetter = document.getElementById('display-key').innerText.toLowerCase();
    if (userPressed === currentLetter) {
        removeBackgroundColor(currentLetter);
        continueGame();
        const liveScore = getTextElementValueById('current-score');
        const updateValue = liveScore + 1;
        updateTextValue('current-score', updateValue);
        // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
        // let currentScore = document.getElementById('current-score');
        // const currentP =currentScore.innerText;
        // const liveScore = parseInt(currentP);
        // currentScore.innerText = liveScore + 1;
        // console.log(liveScore);
    }
    else {
        const aliveLife = getTextElementValueById('current-life');
        const updateLife = aliveLife - 1;
        updateTextValue('current-life', updateLife);
        if(updateLife === 0){
         gameOver();
        }

        // .....................................//
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLife = currentLifeElement.innerText;
        // const aliveLife = parseInt(currentLife);
        // currentLifeElement.innerText = aliveLife - 1;
    };
}
function gameOver(){
    getField('your-field', 'your-score');
}

function getTextElementValueById(elementId) {
    const liveScoreElement = document.getElementById(elementId);
    const liveScoreValue = liveScoreElement.innerText;
    const value = parseInt(liveScoreValue);
    return value;
}
function updateTextValue(elementId, value) {
    const currentValue = document.getElementById(elementId);
    currentValue.innerText = value;

}

document.addEventListener('keyup', handleKeyboardKeyUpPress);

function continueGame() {
    const randomKey = Math.random() * 25
    const key = Math.round(randomKey);
    const index = keysArray[key];
    const displayKey = document.getElementById('display-key');
    displayKey.innerText = index;

    setBackgroundColor(index)

}