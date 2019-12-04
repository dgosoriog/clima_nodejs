const axios = require('axios');

const getCiudadLatLon = async(nombre) => {
    const ciudad = encodeURI(nombre);
    //crear instancia para la API
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'x-rapidapi-key': '82bcaeb5eemsh96210c86b08918dp1e1752jsn21ec3b8fec8d' }
    });
    const resp = await instance.get();
    // instance.get().then(resp => { console.log(resp.data.Results[0]); }).catch(err => {
    //     console.log('Error', err);
    // });
    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados');
    }
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        name,
        lat,
        lon
    }
}
module.exports = {
    getCiudadLatLon
}