const textBox=document.getElementById("textBox");
const toF=document.getElementById("toF");
const toC=document.getElementById("toC");
const result=document.getElementById("result");
let temperature;

function convert(){
    if(toC.checked){
        temperature=Number(textBox.value);
        temperature=(temperature-32)*(5/9);
        result.textContent=temperature.toFixed(1) + "°C";
        //to add the degree symbol use alt+0176 in the numpad
    } else if(toF.checked){
        temperature=Number(textBox.value);
        temperature=temperature*9/5+32;
        result.textContent=temperature.toFixed(1) + "°F";
    }else{
        result.textContent="Select a Unit";
    }
}