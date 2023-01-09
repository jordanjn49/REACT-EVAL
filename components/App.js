import {Layout} from "antd";
import Header from "./fragments/Header";
import WeatherAPI from "./api/WeatherAPI";

const App = ({ title }) => {
    const { Content } = Layout;

    console.log("IN APP")

    return (
        <Layout>
            <Header/>
            <Content>
                <WeatherAPI></WeatherAPI>
            </Content>
        </Layout>
    )
};


export default App;