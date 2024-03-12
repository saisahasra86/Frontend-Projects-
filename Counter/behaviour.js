var counterCount=document.getElementById("count");


function clicking_on_decrease(){
    counterCount.style.color="red";
    var prevNum=counterCount.textContent;
    prevNum=parseInt(prevNum);
    prevNum-=1;
    counterCount.textContent=prevNum;
}

var counterCount=document.getElementById("count");
function clicking_on_increase(){
    counterCount.style.color="green";
    var prevNum=counterCount.textContent;
    prevNum=parseInt(prevNum);
    prevNum+=1;
    counterCount.textContent=prevNum;
}

function clicking_on_reset(){
    counterCount.textContent=0;   
    counterCount.style.color="black";
}