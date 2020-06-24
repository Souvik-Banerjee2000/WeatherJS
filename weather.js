class Weather{
    constructor(){
        this.api_key = '10ea308a7f68ad5ddbd38dd4a7e47cce';
    }
    async getData(url,city){
        const response = await fetch(`${url}?q=${city}&appid=${this.api_key}`);
        const responseData = await response.json();
        return{
            data:responseData,
            city
        };
    }
}