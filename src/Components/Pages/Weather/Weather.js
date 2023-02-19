import { Search } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Card from "../../Ui/Card/Card";
import { Button } from "@mui/material";
import "../../Ui/CSS/ComponentsStyle.css";
import { getWeather } from "../../Service/WeatherServices";
import TableUi from "../../Ui/TableUi/TableUi";

import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment/moment";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weatherReport, setWeatherReport] = useState({ DailyForecasts: "" });
  const [localInfo, setLocalInfo] = useState([]);

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    getWeather(
      search,
      (res, res2) => {
        console.log(res, "1", res2);
        setWeatherReport(res);
        setLocalInfo(res2);
      },
      (err) => {
        console.log(err, "2");
      }
    );
  };
  return (
    <div>
      <Card
        cardTitle="Weather Search"
        subTitle="Location Name...."
        style={{ width: "50%", caretColor: "none" }}
      >
        <div style={{ marginTop: 10, display:"flex",justifyContent: "space-around"}}>
          <input type="text" onChange={onChange} />
          <Button
            type="submit"
            variant="contained"
            color="success"
            onClick={onSubmit}
          >
            <Search />
          </Button>
        </div>
      </Card>
      <Card
        cardTitle={`${
          localInfo?.LocalizedName ? localInfo?.LocalizedName : ""
        } Weather Report`}
        subTitle={`${moment(weatherReport?.DailyForecasts[0]?.Date).format(
          "DD-MM-YYYY"
        )}`}
        style={{ width: "50%", caretColor: "none" }}
      >
        <div>
          {/* Temp Stats */}
          <table className="table">
            <thead className="text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Maximum Temparature</th>
                <th scope="col">Minimum Temparature</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>
                  {weatherReport
                    ? weatherReport?.DailyForecasts[0]?.Temperature.Maximum
                        .Value
                    : ""}
                  {weatherReport?.DailyForecasts[0]?.Temperature.Maximum.Unit}
                </td>
                <td>
                  {weatherReport?.DailyForecasts[0]?.Temperature.Minimum.Value}
                  {weatherReport?.DailyForecasts[0]?.Temperature.Maximum.Unit}
                </td>
              </tr>
            </tbody>
          </table>
          {/* feels like stat */}
          <table className="table">
            <thead className="text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Feels Like Maximum</th>
                <th scope="col">Feels Like Temparature</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>
                  {weatherReport
                    ? weatherReport?.DailyForecasts[0]?.RealFeelTemperature
                        .Maximum.Value
                    : ""}
                  {
                    weatherReport?.DailyForecasts[0]?.RealFeelTemperature
                      .Maximum.Unit
                  }
                </td>
                <td>
                  {
                    weatherReport?.DailyForecasts[0]?.RealFeelTemperature
                      .Minimum.Value
                  }
                  {
                    weatherReport?.DailyForecasts[0]?.RealFeelTemperature
                      .Maximum.Unit
                  }
                </td>
              </tr>
            </tbody>
          </table>
          {/* sun stat */}
          <table className="table">
            <thead className="text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sun Rise At</th>
                <th scope="col">Sun Set At</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>
                  {weatherReport
                    ? moment(weatherReport?.DailyForecasts[0]?.Sun.Rise).format(
                        "HH:MM:SS"
                      )
                    : ""}
                </td>
                <td>
                  {weatherReport
                    ? moment(weatherReport?.DailyForecasts[0]?.Sun.Set).format(
                        "HH:MM:SS"
                      )
                    : ""}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Weather;
