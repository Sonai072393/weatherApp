import axios from "axios";

export const getWeather = async (location,onSuccess, onFailure) => {
  try {
    await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=eijEJ976YZow8FZa2oupIpzjKn2oiLkE&q=${location}`
    ).then(async(res)=>{
        const locationKey = res.data[0].Key

       const WeatherData = await axios.get(
            `http://dataservice.accuweather.com/forecasts/v1/daily/1day/apikey=eijEJ976YZow8FZa2oupIpzjKn2oiLkE?apikey=eijEJ976YZow8FZa2oupIpzjKn2oiLkE&locationKey=${locationKey}&details=true`
        )

        console.log(WeatherData,"3")
        onSuccess(WeatherData.data,res.data[0])
    })
  } catch (error) {
    onFailure("Something Wrong! Please Try again later " + error.response);
  }
};
