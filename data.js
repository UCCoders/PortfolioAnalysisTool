function fetchData(url,callback){
    const request = new XMLHttpRequest();
    request.open('GET',url,true);
    request.onload = function(){
        if(request.status === 200){
            try{
                const data = JSON.parse(request.responseText);
                callback(null, data);
            }catch(error){
                const msg = `API call recieved bad JSON`
                callback(msg);
            }
        }else{
            const msg = `API call recieved a status of ${request.status}`
            callback(msg);
        }
    }
    request.onerror = function(){
        callback("Bad stuff happened...")
    }
    request.send();
}