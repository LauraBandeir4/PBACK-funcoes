function CalcularMedia(){
    let v1 = parseFloat(document.getElementById("n1").value);
    let v2 = parseFloat (document.getElementById("n2").value);
    let v3 = parseFloat(document.getElementById("n3").value);
    let total = (v1 + v2 + v3)/3;
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}