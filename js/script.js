const display=document.querySelector(".display");

function appendToDisplay(value){
    if(display.value==="0"||display.value==="Error"){
        display.value=value;
    }else{
        display.value+=value;
    }
}

function clearDisplay(){
    display.value="0";
}

function calculate(){
    try{
     const expression=display.value;
     const result=eval(expression);
     if(isFinite(result)){
        display.value=result;
     }else{
        display.value="Error";
     }

    }
    catch(error){
    display.value="Error";
    }
}