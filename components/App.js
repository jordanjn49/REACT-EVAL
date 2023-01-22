import {Layout} from "antd";
import Header from "./fragments/Header";
import Weather from "./weather/Weather";
import { Card } from 'antd';


const App = ({ weather, error }) => {
    const { Content } = Layout;
    

    console.log("IN APP")
    console.log(weather)

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
     </Card>
                



                {/* <City city={weather.city} />   */}
                {/* <List list={weather.list} /> */}

            </Content>
        </Layout>
    )
};


export default App;