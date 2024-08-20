
  const apiKey = "11024392b39d93ed439df91c95f0dd3a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");



        async function checkWeather(cityName) {
            const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
             const data = await response.json();

                if(response.status == 404){
                    document.querySelector(".error").style.display = "block";
                    document.querySelector(".weather").style.display = "none";
                } else {
                    document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png";
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/mist.png";
                }
            } 
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
        

        document.getElementById("searchButton").addEventListener("click", () => {
            const cityName = document.getElementById("cityInput").value.trim();
            if (cityName) {
                checkWeather(cityName);
            } else {
                alert('Please enter a city name');
            }
        });
       
        searchBtn.addEventListener("click" , ()=>{
        checkWeather(searchBox.value);
       })
  
