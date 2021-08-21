function numberInput(id) {
    const stringNumber = id.innerText;
    for (let i = 0; i < stringNumber.length; i++) {
        const element = stringNumber[i];
        const value = document.getElementById('generator-output').value;
        const newValue = value + element + '';
        console.log(newValue)
        document.getElementById('generator-output').value = newValue;
    }
}

function submit(){
    const generatorInput = document.getElementById('generator-input').value;
    const generatorOutput = document.getElementById('generator-output').value;
    if(generatorInput == generatorOutput){
        document.getElementById('match').style = 'display: block';
    }
    else{
        document.getElementById('not-match').style = 'display: block';
    }
}

function clearButton(){
    document.getElementById('generator-output').value = null;
}

function setGenerateInput() {
    const generateInput = (Math.random()*10000+'').split(',')[0];
    const generateInputNumber = parseInt(generateInput)
    const toFixed = generateInputNumber.toFixed(0);
    if(toFixed.length == 4) {
        document.getElementById('generator-input').value = toFixed;
    }
    console.log(toFixed);
}



