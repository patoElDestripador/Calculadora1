function ops(){
    
    let operaciones = document.getElementById('operacion').value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    document.getElementById("texto").innerText = eval(num1+operaciones+num2)
    }