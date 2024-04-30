" use strict ";

const celsiusInput = document.getElementById("celsiusInput");
const calculateButton = document.getElementById("calculateButton");
const fahrenheitOutput = document.getElementById("fahrenheitOutput");

window.onload = init;

function init(){
    calculateButton.onclick = onCalculateButtonClicked;
}

function onCalculateButtonClicked(){
    //get my starting values
    let celsius = Number(celsiusInput.value);

    // compute the unknowns
    let fahrenheit = ( 9 / 5 * celsius) + 32;

    //display the result
    fahrenheitOutput.value = fahrenheit;

}