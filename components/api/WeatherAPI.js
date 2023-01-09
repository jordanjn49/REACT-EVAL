import React from "react";
import axios from "axios";

export default class WeatherAPI extends React.Component {
    state = {
        weather: []
      }

      componentDidMount() {
        const API_URL       = 'https://api.openweathermap.org/data/2.5/forecast';
        const API_KEY       = 'a73f7e47897e972617ae88c542735dce';
        const LOCATION_CODE = '3037656';
       
        axios
            .get(API_URL, {
                params: {
                    id: LOCATION_CODE,
                    appid: API_KEY,
                    units: 'metric'
                }
            })
            .then(response => {
                const data = response.data;
                this.setItem(data)
        })
        .catch(error => console.log("Error", error));
      }

      render() {
        return (
          <ul>
            {
              this.state.weather
                .map(weather =>
                  <li key={weather.id}>{weather.name}</li>
                )
            }
          </ul>
        )
      }
}