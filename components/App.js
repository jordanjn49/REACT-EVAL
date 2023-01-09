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
                
            
                {/* <City city={weather.city} />   */}
                {/* <List list={weather.list} /> */}

            </Content>
        </Layout>
    )
};


export default App;