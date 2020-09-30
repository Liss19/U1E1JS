const fs = require('fs');
var oracion = 'Hola mi nombre es Brenda';
var arro = oracion.split(" ");
var texto;
texto = fs.readFileSync('../texto.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error ${error}`);
    } else {
        console.log(data);
    }
});

var res = texto.split(" ");


for (i = 0; i < arro.length; i++) {
    for (j=0;j<res.length;j++){
        if (res[j] == arro[i]) {
            console.log(res[j]);
        }
    }
}