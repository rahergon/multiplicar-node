//multiplicar.js

const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido en base ${base} no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido en limite ${limite} no es un número.`);
            return;
        }

        console.log('===================='.green);
        console.log(`tabla de ${ base }`.green);
        console.log('===================='.green);

        for (let i = 0; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i}`);
        }

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';


        for (let i = 0; i <= limite; i++) {
            data += `${base}*${i}=${i*base}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`)
            }
            //console.log(`The file tabla-${base}.txt has been saved!`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}