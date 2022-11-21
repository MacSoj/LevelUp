
// Esta es la variable que ira incrementando, disminuyendo o reseteando
var contador = 0;


// esta es la función para incrementar el contador 
function incrementar() {
    actualizar(++contador);
    if(contador>0){
    document.getElementById("counter-label").style.color='green';
    }else{

    }
    
}


// esta es la función para resetear el contador 
function resetear() {
    contador = 0;
    actualizar(contador);
    if(contador==0){
        document.getElementById("counter-label").style.color='black';
    }
}

// esta es la función nos ayuda a colocar el valor del contador en la pagina
function actualizar(val) {
    document.getElementById("counter-label").innerHTML = val;
}


// esta es la función para disminuir el contador
function disminuir(){
    actualizar(--contador);
    if(contador>0){

    }else{
    document.getElementById("counter-label").style.color='red';
    }
}  