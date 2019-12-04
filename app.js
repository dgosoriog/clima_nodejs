const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');
//clima.getClima(-0.19, -78.5).then(console.log);
//configurar como opciones
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let ubc = await ubicacion.getLugarLatLong(direccion);
        let temp = await clima.getClima(ubc.lat, ubc.long);
        return `El clima en ${ubc.name} es de ${temp}`
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }
};
getInfo(argv.nombre).then(res => { console.log(res); }).catch(err => console.log(err));