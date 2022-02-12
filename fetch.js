//After submission popup section
document.getElementById("form").onsubmit = function () {
    var customalert = document.getElementById('CustomAlert');
    var submit = true;
    if (submit == true) {
         customalert.style.display = 'block';
         submit = false;
     }

    return submit;

}
//Redirected to the map location 
function hidealert() {
    document.location.href = "index.html";
}


//Calling the REST API

//Header
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

//Body
var urlencoded = new URLSearchParams();
urlencoded.append("devid", "d8c68c44e70825b746c80c41add7279a");

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: urlencoded,
redirect: 'follow'
};

//Fetching the URL and requestOptions
fetch("http://35.197.106.255:3000/api/v1.1/lastMultiple?devid=d8c68c44e70825b746c80c41add7279a", requestOptions)
.then(response => response.json())
.then(result => appendData(result))
.catch(error => console.log('error', error));

//Function to display the coordinates by API calling
function appendData(result) {
    var mainContainer = document.getElementById("latitude");
    mainContainer.innerHTML = 'Latitude: ' + result.data.latitude+   ',<br> Longitude: ' + result.data.longitude;
}