const apiKey = "2cde358d529df0b4181c2b03913e1b23";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const ikonCuaca = document.querySelector(".ikon-cuaca");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function cekCuaca(kota) {
    const response = await fetch(apiUrl + kota + `&appid=${apiKey}`);
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".cuaca").style.display = "none";
    } 
    else {
        var data = await response.json();

        document.querySelector(".nama-kota").innerHTML = data.name;
        document.querySelector(".temperatur").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".kelembapan").innerHTML = data.main.humidity + "%";
        document.querySelector(".angin").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            ikonCuaca.src = "gambar/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            ikonCuaca.src = "gambar/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            ikonCuaca.src = "gambar/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            ikonCuaca.src = "gambar/drizzle.png";
        }
        else if(data.weather[0].main == "Clouds"){
            ikonCuaca.src = "gambar/clouds.png";
        }
        else if(data.weather[0].main == "Mist"){
            ikonCuaca.src = "gambar/mist.png";
        }


        document.querySelector(".error").style.display = "none";
        document.querySelector(".cuaca").style.display = "block";
    }

    
}

searchBtn.addEventListener('click',()=> {
    cekCuaca(searchBox.value);
})

