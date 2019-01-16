//https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo

const rootUrl = "https://www.alphavantage.co/query?"

function Global_QUOTE(symbol, apiKey){
    var query = `${rootURL}function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    var stockPrice = null;
    // fetchData(query,(err, data)=>{
    //     if(!err){
    //         stockPrice = data.price;
    //     }else{

    //     }
    // })
    if(symbol=="MSFT"){
        return exampleGlobalQuoteMSFT.price
    }else{
        return 1234;
    }
    
}