"use strict";

var txt1,txt2,imc;

txt1 = parseInt( prompt('Introduzca su altura: ') );
txt2 = parseInt( prompt('Introduzca su peso: ') );

imc = (txt2 / ( (txt1/100)*(txt1/100) ) ).toFixed(2);

if(imc < 16){
    alert("Delgades severa");
}else if(imc < 16.99){
    alert("Delgades Moderada");
}else if(imc < 18.49){
    alert("Delgades Aceptable");
}else if(imc < 24.99){
    alert("Peso normal");
}else if(imc < 29.99){
    alert("Sobrepeso");
}else if(imc < 34.99){
    alert("Obesidad");
}else{
    alert("Obesidad morvida");
}