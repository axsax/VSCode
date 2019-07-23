const os = require('os');
console.log('Memoria libre es: ' + os.freemem);
var vector = [1000000] //no hay necesidad de definir el tamaño del vector, se puede dejar como const vec=[]; y en el for se le coloca el tamaño.

rellenar();


function rellenar() {
    for (i = 0; i < vector.length - 1; i++) {
        vector.push(i);
    }
    console.log('Supuestamente esta rellenito');
    console.log('Memoria libre es: ' + os.freemem);
}