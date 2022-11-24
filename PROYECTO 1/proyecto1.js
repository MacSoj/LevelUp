var keysAndValues = ({
    A:1,
    B:2,
    C:3
});

var llaves = Object.keys(keysAndValues);
var kes=[]
var values=[]
var total=[]

for(var i=0; i<llaves.length; i++){
    var llave = llaves[i];
    kes.push(llaves[i])
    values.push(keysAndValues[llave])
    if(llaves.length===i+1){
        total.push(kes)
        total.push(values)
    }
}

console.log(total)



