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
    const div=document.createElement("div")
    div.setAttribute("class","row col-lg-4 col-sm-12")
    div.innerHTML=`
    <div class="col p-2 bg-warning  ">
    <div class="card-header bg-black text-center text-bg-primary ">${a[i].name.common}</div>
      <img src="${a[i].flags.png}" class="card-img  " alt="...">
      <div class="card-body ">
        <h5 class="Capital">Capital: ${a[i].capital} </h5>
        <h5 class="Region">Region : ${a[i].region} </h5>
        <h5 class="Code">Country Code : ${a[i].cca3} </h5>
      </div>
      <div class="button d-flex justify-content-center">
      <button type="button" class="btn bg-primary">Click for Weather</button>
      </div> 
      </div>
     
    `;
  
    
    document.body.append(div)  
    
}



});
const button=document.querySelector(".btn")
button.addEventListener("click",(location)=>{
 return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={4941b3d646a8b97dee48870bc7b6f485}`).then((data)=>resolve(data)).catch((error)=>reject(error));
})


