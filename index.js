const textBox = document.getElementById("textBox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){
      if(toFarenheit.checked){
            temp = Number(textBox.value);
            lasttemp = (9/5 * temp )+ 32;
            result = result.textContent = temp + " °C is "+lasttemp.toFixed(3) +" °F";


      }
      else if(toCelcius.checked){
            temp = Number(textBox.value);
            lasttemp = (temp - 32) * (5/9);
            result = result.textContent = temp+ " °F is "+lasttemp.toFixed(3) +" °C";

      }
      else{
            result.textContent = "You have not selected any unit !"
      }
}