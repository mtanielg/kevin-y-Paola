var operandoa;
var operandob;
var operancion;

function init(){
    //variable
    var resultado = documet.getElementById("resultado");
    var reset = documet.getElementById("reset");
    var suma = documet.getElementById("suma");
    var resta = documet.getElementById("resta");
    var multiplicacion = documet.getElementById("multiplicaion");
    var division = documet.getElementById("division");
    var igual = documet.getElementById("igual");
    var uno = documet.getElementById("uno");
    var dos = documet.getElementById("dos");
    var tres = documet.getElementById("tres");
    var cuatro = documet.getElementById("cuatro");
    var cinco = documet.getElementById("cinco");
    var seis = documet.getElementById("seis");
    var siete = documet.getElementById("siete");
    var ocho = documet.getElementById("ocho");
    var nueve = documet.getElementById("nueve");
    var cero = documet.getElementById("cero");

    //Eventos
    uno.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "1";   
    } 
    dos.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "2";   
    }    
    tres.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "3";   
    }      
    cuatro.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "4";   
    }    
    cinco.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "5";   
    }    
    seis.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "6";   
    }    
    siete.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "7";   
    }    
    ocho.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "8";   
    }    
    nueve.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "9";   
    }    
    cero.onclick = function(eventos){
        resultado.textContent * resultado.textContent + "0";   
    }    
    reset.onclick = function(eventos){
        Resetear();  
    }  
    suma.onclick = function(eventos){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }    
    resta.onclick = function(eventos){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }    
    multiplicacion.onclick = function(eventos){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }    
    division.onclick = function(eventos){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }    
    igual.onclick = function(eventos){
    operandoa = resultado.textContent;
    operacion = "/";
    resolver();
    }    
}
function limpiar(){
    resultado.textContent = "";
}    
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}    
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parsefloat(operandoa) + parsefloat(operandob);
            break;
        case "-":
            res = parsefloat(operandoa) - parsefloat(operandob);
            break;
        case "*":
            res = parsefloat(operandoa) * parsefloat(operandob);
            break;
        case "/":
            res = parsefloat(operandoa) / parsefloat(operandob);
            break;
    }    
    resetear();
    resultado.textContent = res;
}