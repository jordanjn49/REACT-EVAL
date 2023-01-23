import {Layout} from "antd";
import Header from "./fragments/Header";
import Weather from "./weather/Weather";
import { Card } from 'antd';


const App = ({ weather, error }) => {
    const { Content } = Layout;
    
    const temperatures = weather.list.map(list => {
        if(list.hasOwnProperty("dt_txt") && list.main.hasOwnProperty("temp")){
            return {
                dt: list.dt_txt,
                temp: list.main.temp - 273.15
            }
        }
      });
    
      const pressures = weather.list.map(list => {
        if(list.hasOwnProperty("dt_txt") && list.main.hasOwnProperty("pressure")){

            return {
                dt: list.dt_txt,
                pressure: list.main.pressure
            }
        }
      });

      const clouds = weather.list.map(list => {
        if(list.hasOwnProperty("dt_txt") && list.clouds.hasOwnProperty("all")){
            return {
                dt: list.dt_txt,
                clouds: list.clouds.all
            }
        }
      });

      const humidity = weather.list.map(list => {
        if(list.hasOwnProperty("dt_txt") && list.main.hasOwnProperty("humidity")){
            return {
                dt: list.dt_txt,
                humidity: list.main.humidity
            }
        }
      });

      const winds = weather.list.map(list => {
        if(list.hasOwnProperty("dt_txt") && list.wind.hasOwnProperty("speed") && list.wind.hasOwnProperty("deg")){
            return {
                dt: list.dt_txt,
                wind_speed: list.wind.speed,
                wind_deg: list.wind.deg
            }
        }
      });


    console.log("IN APP")
    console.log(temperatures)
    console.log(clouds)
    console.log(pressures)
    console.log(humidity)
    console.log(winds)



    return (
        <Layout>
            <Header/>
            <Content>
            <Card title="Vôtre ville :">
            <Card.Grid >Nom : {weather.city.name}</Card.Grid>
        <Card.Grid>Pays : {weather.city.country}</Card.Grid>
        <Card.Grid >Population : {weather.city.population} habitants</Card.Grid>
        <Card.Grid>Latitude : {weather.city.coord.lat}</Card.Grid>
        <Card.Grid>Longitude : {weather.city.coord.lon}</Card.Grid>
        <Card.Grid>Longitude : {weather.list.weather}</Card.Grid>

     </Card>
            




            </Content>
        </Layout>
    )
};


export default App;