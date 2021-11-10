const fs = require('fs')

const crearArchivoTabla = async ( base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '';

        for( let i = 1;i <= hasta;i++){
            salida += (`${base} x ${i} = ${i*base} \n`);
        }
        if( listar ) {
            console.log('================');
            console.log(`Tabla del: ${base}`);
            console.log('================')
            console.log(salida);
        }
        fs.writeFileSync( `./output/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }


}


module.exports = {
    crearArchivoTabla
}

