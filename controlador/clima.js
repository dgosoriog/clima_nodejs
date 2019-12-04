const axios = require('axios');
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ccea7499b77c6b76d2d67d22340e6dbb&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}