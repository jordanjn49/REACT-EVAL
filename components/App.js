import {Layout} from "antd";
import Header from "./fragments/Header";
import Footer from "./fragments/Footer";
import { Card } from 'antd';
import { Area, AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';


const App = ({ weather, error }) => {
    const { Content } = Layout;
    
    const temperatures = weather.list.map(list => {
        if(list.hasOwnProperty("dt_txt") && list.main.hasOwnProperty("temp")){
            return {
                dt: list.dt_txt,
                temp: list.main.temp - 273.15,
                max: list.main.temp_max - 273.15, 
                min: list.main.temp_min - 273.15

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

    console.log(temperatures)
    console.log(clouds)
    console.log(pressures)
    console.log(humidity)
    console.log(winds)

    return (
        <Layout>
            <Header/>
                <Content style={{ background: "#cbe7f2" }}>
                    <Card title="Votre ville" style={{ margin: "20px" }}>
                        <Card.Grid >Nom : {weather.city.name}</Card.Grid>
                        <Card.Grid>Pays : {weather.city.country}</Card.Grid>
                        <Card.Grid >Population : {weather.city.population} habitants</Card.Grid>
                        <Card.Grid>Latitude : {weather.city.coord.lat}</Card.Grid>
                        <Card.Grid>Longitude : {weather.city.coord.lon}</Card.Grid> 
                    </Card>
                    
                    
                    <Card title="Informations météorologiques" style={{ margin: "20px" }}>

                    <ResponsiveContainer width="95%" height={300}>
                        <LineChart width={1300} height={300} data={temperatures}>
                            <XAxis dataKey="dt" />
                            <YAxis label={{ value: 'Température (ºC)', angle: -90, position: 'insideLeft' }} />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36}/>
                            <Line type="monotone" dataKey="temp" stroke="#000000" />
                            <Line type="monotone" dataKey="max" stroke="#ad2411" />
                            <Line type="monotone" dataKey="min" stroke="#259bc2" />
                        </LineChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="95%" height={300}>
                        <LineChart width={1300} height={300} data={pressures}>
                            <XAxis dataKey="dt" />
                            <YAxis label={{ value: 'Pression (hPa)', angle: -90, position: 'insideLeft' }} />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36}/>
                            <Line type="monotone" dataKey="pressure" stroke="#000000" />
                        </LineChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="95%" height={300}>
                        <LineChart width={1300} height={300} data={humidity}>
                            <XAxis dataKey="dt" />
                            <YAxis label={{ value: 'Humidité (%)', angle: -90, position: 'insideLeft' }} />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36}/>
                            <Line type="monotone" dataKey="humidity" stroke="#000000" />
                        </LineChart>
                    </ResponsiveContainer>


                    <ResponsiveContainer width="95%" height={300}>
                        <AreaChart width={1300} height={300} data={clouds} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}> 
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#919191" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#919191" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="dt" />
                            <YAxis label={{ value: 'Nuages (%)', angle: -90, position: 'insideLeft' }} />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36}/>
                            <Area type="monotone" dataKey="clouds" stroke="#919191" fillOpacity={1} fill="url(#colorUv)"/>
                        </AreaChart>
                    </ResponsiveContainer>
                    </Card>

                </Content>
            <Footer/>
        </Layout>
    )
};


export default App;