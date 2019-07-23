const fs = require('fs');
fs.writeFile('./archivo1.txt', 'linea 1 \nLinea 2', error => {
    if (error) {
        console.log(error);
    } else {
        console.log('El archivo fue creado, melo');
    }
});
console.log('ultima linea del programa');
/*
Lo de arriba tambien se puede programar asi -->(mirar abajo), sino que las arrow functions son las mas utilizadas , hacen lo mismo

fs.writeFile('./archivo1.txt','línea 1\nLínea 2',function(error){
  if (error)
    console.log(error);
  else
    console.log('El archivo fue creado');
});

*/