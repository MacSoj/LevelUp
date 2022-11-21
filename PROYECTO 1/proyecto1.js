let valor1 = prompt("Ingrese el primer valor");
let valor2 = prompt("Ingrese el segundo valor");
let valor3 = prompt("Ingrese el tercer valor");


function keysAndValues(diccionario){
     var llaves = Object.keys(diccionario);
     var kes= []
     var values= []
     var total= []

     for(var i=0; i<llaves.length; i++){
         var llave=llaves[i];
         kes.push(llaves[i]);
         values.push(diccionario[llave]);
         if(llaves.length == i+1){
             total.push(kes)
             total.push(values)
         }
     }
     return total
}

if(typeof document !== 'undefined'){
 document.write(keysAndValues({a:valor1, b:valor2, c:valor3}));
}



