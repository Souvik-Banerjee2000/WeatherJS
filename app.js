const weather = new Weather;
const url = 'http://api.openweathermap.org/data/2.5/weather';
const ui = new UI;

document.addEventListener('DOMContentLoaded',(e)=>{
    ui.showData();
    e.preventDefault();

});


document.getElementById('add-form').addEventListener('submit',(e)=>{
    const cityName = document.getElementById('cityName').value;
    //Make Request to the api
    weather.getData(url,cityName)
        .then(res => {
            let parsedData = parseWeatherData(res['data']);
            if (ifCityNameExists(cityName) === true){
                let message = 'This CityName Already Exists In Sessions';
                ui.showAlert(message,'alert-danger');
            }else{
                let message = 'Successfully Added'
                storeInSession(parsedData, cityName);
                ui.appendData(cityName,parsedData);
                ui.showAlert(message,'alert-success');
            }
        });

    //Make the value to be none    
    ui.removeItemValue();
    e.preventDefault();

});

document.getElementById('searchCities').addEventListener('keyup',(e)=>{
    let cards  = document.getElementsByClassName('card');
    let cardsContent = Array.from(cards);
    let text = e.target.value.toLowerCase();
    ui.searchElements(cardsContent,text);
})

