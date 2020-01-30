const axios = require('axios');//importa la libreria axios
//Funcion para obtener el clima de un lugar mediante una api.Recibe como parametros la latitud y longitud de una ciudad
//Es una funcion asincrona
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ccea7499b77c6b76d2d67d22340e6dbb&units=metric`)
    return resp.data.main.temp;
}
//Exportar el modulo
module.exports = {
    getClima
}
