import {Layout} from "antd";
import { data } from "../data/data"
import ListRecipe from "./recipe/ListRecipe"
import BarChart from "./charts/BarChart"
import Header from "./fragments/Header";

const { Content } = Layout;


const App = ({ title }) => {
    const { Content } = Layout;
    console.log("IN APP")

    return (
        <Layout>
            <Header/>
            <Content>
                <BarChart/>
            </Content>
        </Layout>
    )
};

export default App;