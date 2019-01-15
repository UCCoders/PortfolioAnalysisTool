const userCookie = "user"
const api1Cookie = "api1"
const api2Cookie = "api2"
const api3Cookie = "api3"
const api4Cookie = "api4"
const api5Cookie = "api5"
const apiCountCookie = "apiCount"

function create_user(name, apikey){
    var user = {
        name : `${name}`,
        apikey : `${apikey}`
    }
    return user
}
function set_cookie(name,value,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    var cookie = [name, '=', JSON.stringify(value), '; path=/;'].join('');
    document.cookie = cookie;
  }
  function read_cookie(name) {
    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
   }
  