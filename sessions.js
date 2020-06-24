function storeInSession(data,cityName){
    data['city'] = cityName;
    if(sessionStorage.getItem('weather') === null ){
        let items = [];
        items.push(data);
        sessionStorage.setItem('weather', JSON.stringify(items));
    }else{
        let items = JSON.parse(sessionStorage.getItem('weather'));
        items.push(data);
        sessionStorage.setItem('weather',JSON.stringify(items));
    }

}
function ifCityNameExists(cityName){
    if (JSON.parse(sessionStorage.getItem('weather')) !== null){
        this.seen = false;
        let self = this;
        let datas = JSON.parse(sessionStorage.getItem('weather'));
        for(var i = 0;i<datas.length;i++){
            if(datas[i].city === cityName){
                self.seen = true;
                break;
            }
        }
        if(self.seen){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }
}