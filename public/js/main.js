const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real = document.getElementById("temp_real");

const dataHide = document.querySelector(".middle_layer")

const getInfo = async (event) => {
  event.preventDefault();
  //   let url = `http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=8104bb8c6e174a7fd76c8062e008ea5a`;

  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerHTML = "pls write the city name";

    dataHide.classList.add('data_hide');
     

  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8104bb8c6e174a7fd76c8062e008ea5a`;
      const response = await fetch(url);
      //   console.log(response)
      const data = await response.json();
      const arrData = [data];

      city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;

      temp_real .innerHTML = arrData[0].main.temp;
    //   temp_status.innerHTML = arrData[0].weather[0].main;

      const tempMood = arrData[0].weather[0].main;

      if (tempMood == "clear") {
        temp_status.innerHTML = "<i class='fas fa-sun'></i>";
      } else if (tempMood == "clouds") {
        temp_status.innerHTML = "<i class='fas fa-clouds'></i>";  
      } else if (tempMood == "rain") {
        temp_status.innerHTML = "<i class='fas fa-rain'></i>";
      } else {
        temp_status.innerHTML = "<i class='fas fa-cloud'></i>";
      }
    } catch (error) {
      city_name.innerHTML = "pls write the city name";
    dataHide.classList.remove ('data_hide');

    }
  }
};

submitBtn.addEventListener("click", getInfo);
