const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'X-RapidAPI-Key': '029c27ae7cmsh5550739d5e3c030p1165fajsne2b5c5514448' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}