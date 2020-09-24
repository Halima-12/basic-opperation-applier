function applyChosenOption() {
    var radioValues = document.getElementsByName("option");
    var chosenValue = getChosenRadioValue(radioValues);
    var typeFirstNumber = Number(document.getElementById("typeFirstNumber").value);
    var typeSecondNumber = Number(document.getElementById("typeSecondNumber").value);

    if (!typeFirstNumber || !typeSecondNumber) {
        alert("please enter numbers");
        return;
    }

    if (chosenValue === "addition") {
        additionAnswer = addition(typeFirstNumber, typeSecondNumber);
        answer(additionAnswer);
    }
    else if (chosenValue === "subtraction") {
        subtractionAnswer = subtraction(typeFirstNumber, typeSecondNumber);
        answer(subtractionAnswer);
    }
    else if (chosenValue === "multiplication") {
        multiplicationAnswer = multiplication(typeFirstNumber, typeSecondNumber);
        answer(multiplicationAnswer);
    }
    else {
        divisionAnswer = division(typeFirstNumber, typeSecondNumber);
        answer(divisionAnswer);
    }
}



function addition(typeFirstNumber, typeSecondNumber) {
    return typeFirstNumber + typeSecondNumber;
}

function subtraction(typeFirstNumber, typeSecondNumber) {
    return typeFirstNumber - typeSecondNumber;
}

function multiplication(typeFirstNumber, typeSecondNumber) {
    return typeFirstNumber * typeSecondNumber;
}

function division(typeFirstNumber, typeSecondNumber) {
    return typeFirstNumber / typeSecondNumber;
}

function answer(aNumber){
    document.getElementById("output").innerHTML = aNumber;
}

function getChosenRadioValue(radioValues){
    for (var chosenValue of radioValues) {
        if (chosenValue.checked) {
            return chosenValue.value;
        }
    }
}