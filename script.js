function numberInput(id) {
    const tryLeft = document.getElementById('try-left').innerText;
    if (tryLeft != 0) {
        const stringNumber = id.innerText;
        for (let i = 0; i < stringNumber.length; i++) {
            const element = stringNumber[i];
            const value = document.getElementById('generator-output').value;
            const newValue = value + element + '';
            document.getElementById('generator-output').value = newValue;
        }
    }
}

function clearLastOne() {
    let element = document.getElementById('generator-output').value;
    let newElement = element.slice(0, element.length - 1)
    document.getElementById('generator-output').value = newElement;
}

function clearButton() {
    document.getElementById('generator-output').value = null;
}

function submit() {
    const tryLeft = document.getElementById('try-left').innerText;
    const tryLeftNumber = parseInt(tryLeft);
    if (tryLeftNumber >= 1) {
        submitWork();
    }
}

function submitWork() {
    const generatorInput = document.getElementById('generator-input').value;
    const generatorOutput = document.getElementById('generator-output').value;
    displayNoneBlock();
    if(generatorInput.length != 4 ){
        displayNoneBlock();
        document.getElementById('enter-generate-input').style = 'display:block';
    }
    else if(generatorOutput.length < 4){
        displayNoneBlock();
        document.getElementById('enter-generate-output').style = 'display:block';
    }
    else if (generatorInput == generatorOutput) {
        document.getElementById('match').style = 'display: block';
        document.getElementById('try-left').innerText = 3;
        clearButton();
        document.getElementById('generator-input').value = null;
    }
    else {
        document.getElementById('not-match').style = 'display: block';
        tryLeftHandler();
    }
}

function tryLeftHandler() {
    const tryLeftInput = document.getElementById('try-left').innerText;
    const tryLeftInputNumber = parseInt(tryLeftInput);
    const newValue = tryLeftInputNumber - 1;
    if (newValue == 0) {
        reSetTime();
    }
    else {
        document.getElementById('try-left').innerText = newValue;
    }
}

function reSetTime() {
    document.getElementById('try-left').innerText = 0;
    document.getElementById('try-left-full').innerText = "try left. Please wait a few seconds.";
    setTimeout(reSetNumber, 5000);
}
function reSetNumber() {
    document.getElementById('try-left').innerText = 3;
    document.getElementById('try-left-full').innerText = 'try left';
}

function setGenerateInput() {
    const tryLeft = document.getElementById('try-left').innerText;
    if (tryLeft != 0) {
        const generateInput = (Math.random() * 10000 + '').split(',')[0];
        const generateInputNumber = parseInt(generateInput)
        const toFixed = generateInputNumber.toFixed(0);
        if (toFixed.length == 4) {
            document.getElementById('generator-input').value = toFixed;
        }
        clearButton();
        displayNoneBlock();
    }
}

function displayNoneBlock() {
    document.getElementById('match').style = 'display: none';
    document.getElementById('not-match').style = 'display: none';
    document.getElementById('enter-generate-input').style = 'display: none';
    document.getElementById('enter-generate-output').style = 'display: none';
}
