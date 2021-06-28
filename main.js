//example users and passwords
var dataBaseTest = [
    {
        username: "sami",
        password: "0770"
    },
    {
        username: "silja",
        password: "0880"
    },
    {
        username: "marko",
        password: "0990"
    },
]


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < dataBaseTest.length; i++){
        if(username == dataBaseTest[i].username && password == dataBaseTest[i].password) {
            console.log(username + " is logged in")
            return
        }  
    }       
    console.log("incorrect username or password")
}