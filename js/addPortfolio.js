
var addPortfolioButton = document.getElementById("addPortfolioButton");
    addPortfolioButton.addEventListener("click", ()=>{
        var cmbBox = document.getElementById("portfolioSelect");
        var option = document.createElement("option");
        var name = document.getElementById("portfolioName");
        option.text = name.value
        setCookie("Portfolio",name.value,365)
        name.value = null;
        cmbBox.add(option)
    })