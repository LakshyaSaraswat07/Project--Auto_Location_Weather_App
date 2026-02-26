const apiKey="4c632c119febf27a6dd59e5c06ed3acf";

if(!navigator.geolocation){error.innerText="Geolocation not supported";}
else{
navigator.geolocation.getCurrentPosition(loadWeather,()=>error.innerText="Permission denied");
}

async function loadWeather(pos){
try{
const {latitude,longitude}=pos.coords;
const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
const data=await res.json();

city.innerText=`${data.name}, ${data.sys.country}`;
temp.innerText=`${data.main.temp} °C`;
weather.innerText=data.weather[0].main;

document.body.style.backgroundImage=`url(https://source.unsplash.com/1600x900/?${data.weather[0].main},sky)`;
}catch{error.innerText="Failed to load weather"}
}