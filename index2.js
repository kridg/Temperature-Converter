const numBox=document.getElementById("numBox");
const toAUD=document.getElementById("toAUD");
const toNRS=document.getElementById("toNRS");
const toUSD=document.getElementById("toUSD");
const toNRS2=document.getElementById("toNRS2");
const answer=document.getElementById("answer");
let curr;
function change(){
    if(toAUD.checked){
        curr=Number(numBox.value);
        curr=curr/85.35;
        answer.textContent="$"+curr.toFixed(2);
    } else if(toNRS.checked){
        curr=Number(numBox.value);
        curr=curr*86.35;
        answer.textContent="Nrs."+curr.toFixed(2);
    }else if(toUSD.checked){
        curr=Number(numBox.value);
        curr=curr/138.16;
        answer.textContent="$"+curr.toFixed(2);
    } else if(toNRS2.checked){
        curr=Number(numBox.value);
        curr=curr*138.16;
        answer.textContent="Nrs."+curr.toFixed(2);
    }
    else{
        answer.textContent="Select a Conversion type";
    }
}