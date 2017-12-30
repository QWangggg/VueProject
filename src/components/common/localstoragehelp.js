

export function getData(){
    return JSON.parse(localStorage.getItem('goodsList') || '[]');
}

export function setData(json){
    // console.log(json)
    let flag = true
    let data = getData()
    data.forEach(function(item) {
        if(item.id == json.id) {
            item.count += +json.count
            flag = false
        } 
    }, this);
    if(flag){
        console.log(flag)
        data.push(json)
    }
    localStorage.setItem('goodsList',JSON.stringify(data));
}