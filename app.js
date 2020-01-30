const axios = require('axios');//importa libreria axios
const ubicacion = require('./controlador/ubicacion');//importa modulo ubicacion
const clima = require('./controlador/clima');//importa modulo clima
//clima.getClima(-0.19, -78.5).then(console.log);
//configurar parámetros
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad',
        demand: true
    }
}).argv;
//Funcion para obtener el clima de una ciudad. Recibe como parametro el nombre de la ciudad
//Es una funcion asincrona
let getInfo = async(direccion) => {
    try {
        let ubc = await ubicacion.getLugarLatLong(direccion);
        let temp = await clima.getClima(ubc.lat, ubc.long);
        return `El clima en ${ubc.name} es de ${temp}`
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }
};
//Prueba la funcion creada arriba.Imprime los resultados en consola
getInfo(argv.nombre).then(res => { console.log(res); }).catch(err => console.log(err));
