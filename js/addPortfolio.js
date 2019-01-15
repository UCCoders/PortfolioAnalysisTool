
var addPortfolioButton = document.getElementById("addPortfolioButton");
    addPortfolioButton.addEventListener("click", ()=>{
        var name = document.getElementById("portfolioName");
        var n = name.value;
        name.value = null;
        if(n!=""){
            var cmbBox = document.getElementById("portfolioSelect");
            var option = document.createElement("option");
            option.text = n
            cmbBox.add(option)
        }else{
            //alert they did not add a name...
        }

    })
    function checkIfRegistered() {
        user = read_cookie(userCookie);
        if (user == null) {
          
        } else {
            var linker = document.getElementById("userNameLink");
            linker.innerHTML = `Welcome back ${user.name}`
        }
      }
      checkIfRegistered()
