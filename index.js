function insert(num){
    let numero = window.document.querySelector("#resultado").innerHTML;
    document.querySelector('#resultado').innerHTML= numero+num;
}

function clean(){
    let clean= window.document.querySelector('#resultado');
    clean.innerHTML="";
}

function calcular(){
    let resultado = window.document.querySelector('#resultado').innerHTML;
    if(resultado){
        document.querySelector('#resultado').innerHTML= eval(resultado);
    }else{
        document.querySelector('#resultado').innerHTML= "nada";
    }
}