function parseWeatherData(data){
    return {
        main : parseWeather(data).main,
        description:parseWeather(data).description,
        icon : parseWeather(data).icon,
        temperature:parseMain(data).temperature,
        humidity:parseMain(data).humidity,
        pressure:parseMain(data).pressure,
        windSpeed:parseWind(data).speed

    }
}
function parseWeather(data){

    const description = data.weather[0].description;
    const main = data.weather[0].main;
    const icon = data.weather[0].icon;
    return {
        description,
        main,
        icon
    }

} 

function parseMain(data){
    const temperature = data.main.temp;
    const pressure = data.main.pressure;
    const humidity = data.main.humidity;

    return {
        temperature,
        pressure,
        humidity
    }
}

function parseWind(data){
    const speed = data.wind.speed;
    return {
        speed
    }

}