class UI {
    constructor() {
        this.name = 'Weather';
    }
    appendData(city,data){
        this.result = document.getElementById('results');
        this.result.innerHTML += `
            <hr>
            <div class="card">
                <div class="card-header">
                    <h4>${city}</h4>
                </div>
                <div class="card-body">
                    <img src="icons/${data.icon}.png">
                    <div class="">Humidity:${data.humidity}</p>
                    <p>Description:${data.description}</p>
                    <p>presure:${data.description}</p>
                    <p>temperature:${data.temperature}</p>
                    <p>main:${data.main}</p>
                    <p>WindSpeed: ${data.windSpeed}</p>
                </div>
            </div>
        `

    }
    showData() {
        //Works Only when the data is initially Loaded
        this.result = document.getElementById('results');
        //Get Data From session storage
        let sessionedWeathers = JSON.parse(sessionStorage.getItem('weather'));
        if(sessionedWeathers === null)
            return;    
        sessionedWeathers.forEach(data => {
        this.result.innerHTML += `
            <hr>
            <div class="card">
                <div class="card-header">
                    <h4>${data.city}</h4>
                </div>
                <div class="card-body">
                    <img src="icons/${data.icon}.png">
                    <div class="">Humidity:${data.humidity}</p>
                    <p>Description:${data.description}</p>
                    <p>presure:${data.description}</p>
                    <p>temperature:${data.temperature}</p>
                    <p>main:${data.main}</p>
                    <p>WindSpeed: ${data.windSpeed}</p>
                </div>
            </div>
        `
        });
        
    }
    removeItemValue() {
        document.getElementById('cityName').value = '';
    }
    removeAlert() {
        let container = document.querySelector('.alert');
        container.innerHTML = '';
    }
    showAlert(message,className){
        let container = document.querySelector('.alert');
        container.appendChild(document.createTextNode(message));
        className += ' alert';
        container.className = className;
        setTimeout(() => {
            this.removeAlert();
        }, 2000);
        
    }
    searchElements(cardsContent,text){
        cardsContent.forEach((element, index) => {
            const item = cardsContent[index].firstElementChild.firstElementChild.textContent;
            let val = item.toLowerCase().indexOf(text); // The index of the text will be -1 if it does not contain the item thats when we want to display it none
            if (text === "") {
                val = -1; //If the text is blank we want display all the elements :)=> Suppose someone hits L and then deletes it thats when it will be triggered
                cardsContent[index].style.display = 'block';
            }
            else{
                if (val != -1) {
                    cardsContent[index].style.display = 'block';
                } else {
                    cardsContent[index].style.display = 'none';
                }
            }
        });
    }
    
}