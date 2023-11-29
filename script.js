const url="https://restcountries.com/v3.1/all";
const result=fetch(url);



result.then((data)=>data.json()).then((a)=>{

  
const maindiv=document.createElement("div")
maindiv.setAttribute("class","container")
const title=document.createElement("h1")
title.setAttribute("class","text-center")
title.setAttribute("id","title")
title.innerHTML="List of Countries";
maindiv.appendChild(title)

document.body.append(maindiv)


for(i=0;i<a.length;i++){
    console.log(a[i]);
    const main=document.createElement("div")
    main.innerHTML=`<div class="row">
    <div class="col">
     <div class="card">
    <div class="card-header bg-black text-center text-bg-primary ">${a[i].name.common}</div>
      
      <div class="card-body ">
      <img src="${a[i].flags.png}" class="card-img  " alt="Flag Image">
        <p class="Capital"><b>Capital: ${a[i].capital}</b> </p>
        <p class="Region"><b>Region : ${a[i].region}</b> </p>
        <p class="Code"><b>Country Code : ${a[i].cca3} </b></p>
        <button class="btn btn-primary" onclick="getWeatherData('${a[i].name.common}')">Click for Weather</button>
      </div>
      </div
      </div>
      </div> 
      </div>`;
  
      maindiv.append(main)

}






});
function getWeatherData(restCountryName) {
  // Use restCountryName in your fetch request to get weather data.
  const apiKey = "4941b3d646a8b97dee48870bc7b6f485";
  const Url = `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`;

  fetch(Url)
    .then((response) => response.json())
    .then((weatherData) => {
      const weatherCountryName = weatherData.name;

      if (weatherCountryName === restCountryName) {
        
         alert(`Weather in ${weatherData.name}: ${weatherData.main.temp_min} min:deg&c  && ${weatherData.main.temp_max} max:deg&c`)
        
        
      } else {
        alert("Country names do not match.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert`Error fetching weather data.`;
    });

  }
