
var addStockButton = document.getElementById("addStockButton");
    addStockButton.addEventListener("click", ()=>{
        var name = document.getElementById("ticker");
        var n = name.value;
        var quantity = document.getElementById("quantity");
        var qty = quantity.value;
        name.value = null;
        quantity.value = null;
        var cmbBox = document.getElementById("portfolioSelect");
        var ptfolioName = cmbBox.value;
        if(n!=""){
            alert(`user selected ${n} with quantity ${qty} to go in portfolio ${ptfolioName}`)
        }else{
            //alert they did not add a name...
        }

    })
