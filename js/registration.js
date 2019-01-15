
const onLoadMethod = ()=>{
    const member = read_cookie(userCookie)
    if(member==null){
        var btn = document.getElementById("submitRegistration")
        btn.addEventListener("click",()=>{
            var un = document.getElementById("userName")
            var rk = document.getElementById("apiKey")
            var user = create_user(un.value,rk.value)
            set_cookie(userCookie,user,365)
            window.location.replace("\portfolio.html")
        })
    }else{
        window.location.replace("\portfolio.html")
    }
}
onLoadMethod();

