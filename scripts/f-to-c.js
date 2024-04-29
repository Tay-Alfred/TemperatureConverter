"use strict";

function fahrenheitToCelsius() {

    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  
    const celsius = (fahrenheit - 32) * 5 / 9;
  
    document.getElementById("result").innerHTML = `${fahrenheit}°F is ${celsius}°C`;
  
  }