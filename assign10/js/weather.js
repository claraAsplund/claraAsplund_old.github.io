const API_KEY = "32d04dc5616e542d7552353479b7d5ef";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(lat,lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).
    then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;

    });
}

function onGeoError(){
    alert("Can NOT find you! No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);