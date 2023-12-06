let entered;
let celcius;
let far;
let selected;

document.getElementById("button").onclick = function(){
    entered = parseInt(document.getElementById("temp").value);

    celcius = ((entered-32) * 5/9).toFixed(2);
    far = ((entered*1.8) + 32).toFixed(2);    

    if (isNaN(entered)) {
        window.alert("Please enter a valid number for temperature.");
        return;
    }

    if (document.getElementById("Far").checked) {
        entered = far;
        selected = 1;
    } else if (document.getElementById("Celcius").checked) {
        entered = celcius;
        selected = 2;
    } else {
        window.alert("Please select a temperature type.");
        return;
    }

    if(selected===1){
        document.getElementById("result").innerText = entered + "°C";
    }else{
        document.getElementById("result").innerText = entered + "°F";
    }    
};