import {Layout} from "antd";
import BarChart from "./charts/BarChart"
import Header from "./fragments/Header";
import axios from "axios";

const { Content } = Layout;

const API_URL       = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY       = 'a73f7e47897e972617ae88c542735dce';
const LOCATION_CODE = '3037656';
const FULL_API_URL  = `${API_URL}?id=${LOCATION_CODE}&appid=${API_KEY}&units=metric`;

axios
  .get(FULL_API_URL)
  .then(response => {
    // Assign vars to response data
    // const temperatureC = response.data.main.temp;
    // const humidity     = response.data.main.humidity;
    // const windSpeedK   = response.data.wind.speed;
    // const windDeg      = response.data.wind.deg;
    // const cityName     = response.data.name;
    // const countryName  = response.data.sys.country;

    // Handle wind Speed and Direction conversions from m/s
    // const windSpeedMPH = windSpeedK * 2.2369363;
    // const windSpeedKPH = windSpeedK * 3.6;
    // const windSpeedKNS = windSpeedK * 1.9438445;
    // const windDirection = degreesToCardinalDirection(windDeg);
    const list = response.data.list;

    // Construct the human readable response
    const weatherDisplay = "Right now, in ${list}";

    console.log(weatherDisplay)
  })
  .catch(error => console.log("Error", error));

const App = ({ title }) => {
    const { Content } = Layout;
    console.log("IN APP")

    return (
        <Layout>
            <Header/>
            <Content>

            </Content>
        </Layout>
    )
};

export default App;