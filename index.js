"use strict";
console.log("start index.js");

window.onload = init;

function init(){
    console.log("start init.")


const AddBtn = document.getElementById("AddBtn");
AddBtn.onclick = onAddBtnClicked;

const SubtractBtn = document.getElementById("SubtractBtn");
SubtractBtn.onclick = onSubtractBtnClicked;

const MultiplyBtn = document.getElementById("MultiplyBtn");
MultiplyBtn.onclick = onMultiplyBtnClicked;

const DivideBtn =document.getElementById("DivideBtn");
DivideBtn.onclick = onDivideBtnClicked;
console.log("end init.")
}
function onAddBtnClicked (){
    console.log("btn clicked");
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    let numberValue = number1Field.value + number2Field.value;
    let answer = numberValue;
   // const answerField = document.getElementById(answerField);
 //   answerField.innerHTML = answer;
}
function onSubtractBtnClicked (){
    console.log("btn clicked");
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    let numberValue = number1Field.value - number2Field.value;
    //let answer = numberValue;
 //   alert(message);
}function onMultiplyBtnClicked (){
    console.log("btn clicked");
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    let numberValue = number1Field.value * number2Field.value;
  //  let answer = numberValue;
 //   alert(message);
}
function onDivideBtnClicked (){
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    let numberValue = number1Field.value / number2Field.value;
  //  let answer = numberValue;
  //  alert(message);
}
