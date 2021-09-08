const inputt =document.querySelector('input'); 
const city = document.getElementById('city'); 
const dat = document.getElementById('date'); 
const temp = document.getElementById('temp'); 
const minmax = document.getElementById('min-max'); 
const weather = document.getElementById('weather'); 
 
 
 
 
function getInfo(searchText){ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=019f6e46b167690b5db84fd4e81f08c5`) 
        .then((res)=>{ 
            return res.json(); 
         
        }) 
        .then((data)=>{ 
             
            console.log(data); 
         
        let txt=data.weather[0].description; 
        weather.innerHTML=txt; 
        if(data.weather[0].description== 'broken clouds') { 
             
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1614368558175-ad4a95a6d8d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyb2tlbiUyMGNsb3Vkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"; 
             
        } else if(data.weather[0].description == 'haze') { 
             
            document.body.style.backgroundImage = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"; 
             
        }     else if(data.weather[0].description== 'rain') { 
             
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"; 
             
        } else if(data.weather[0].description == 'Snow') { 
             
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')"; 
             
        } else if(data.weather[0].description == 'Thunderstorm') { 
             
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"; 
             
        }  
         
                else { 
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1505533542167-8c89838bb19e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"; 
                     
                }  
         
        txt=data.name+", "+data.sys.country; 
        city.innerHTML=txt; 
         
        txt=parseInt(data.main.temp-273); 
        temp.innerHTML=txt+"&deg;C"; 
 
        txt=parseInt(data.main.temp_min-273); 
        let txt2=parseInt(data.main.temp_max-273); 
        minmax.innerHTML=txt+"&deg;C(min) / "+txt2+"&deg;C(max)"; 
         
        let today = new Date(); 
        dat.innerHTML=today; 
 
 
         
 
        }) 
        .catch((err)=>{ 
            console.log(err.message); 
        }) 
} 
 
 
 
inputt.addEventListener("keypress",(e)=>{ 
    if(e.which===13){ 
        const searchText = inputt.value; 
 
        getInfo(searchText); 
 
        inputt.value=""; 
    } 
 
     
})