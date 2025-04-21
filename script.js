function checkNum() {
    const input= document.getElementById("amount").value;
    const output = document.getElementById("output");

    if(input > 100){
        output.innerHTML = "Value is greater than 100, please double check if you want to transfer this amount?";
    }else{
        output.innerHTML = "";
    }
}