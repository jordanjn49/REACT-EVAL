import {Layout} from "antd";
import Header from "./fragments/Header";
import Weather from "./weather/Weather";

const App = ({ weather, error }) => {
    const { Content } = Layout;

    console.log("IN APP")
    console.log(weather)

    return (
        <Layout>
            <Header/>
            <Content>
                
                {weather.city.name}
                {weather.city.cood}
                {weather.city.country}
                {weather.city.population}



                {/* <City city={weather.city} />   */}
                {/* <List list={weather.list} /> */}

            </Content>
        </Layout>
    )
};


export default App;