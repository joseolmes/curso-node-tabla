const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5 , listar= false, hasta=10) => {
    try {
        let salida  ="";
        let consola = "";        

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} * ${index} = ${base * index}\n`;
            consola += `${base} ${'*'.green} ${index} ${'='.green} ${base * index}\n`;
        }

        if(listar){
            listarTabla(base, consola);
        }        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
};

const listarTabla = (base, consola) =>{
    console.log("==================================".green);
    console.log('    TABLA DEL'.green, colors.blue( base ));
    console.log("==================================".green);
    console.log(consola);
};

module.exports = {
    crearArchivo
}