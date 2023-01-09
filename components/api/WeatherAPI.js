import axios from 'axios';
import React from "react";

const API_KEY       = 'a73f7e47897e972617ae88c542735dce';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;

class App extends React.Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(response => {
        this.setState({
          temperature: response.data.main.temp,
          city: response.data.name,
          country: response.data.sys.country,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          error: 'Error retrieving data'
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.temperature && (
          <div>
            {this.state.city}, {this.state.country}
            <br />
            {this.state.temperature}°F
            <br />
            {this.state.humidity}% humidity
            <br />
            {this.state.description}
          </div>
        )}
        {this.state.error && <div>{this.state.error}</div>}
      </div>
    );
  }
}
