import App from "../components/App";

/* CLIENT SIDE */
const Home = ({ weather, error }) => {
  return <App weather={weather} />;
};

/* SERVER SIDE */

export async function getStaticProps() {
  const API_KEY = "a73f7e47897e972617ae88c542735dce";
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=Angers&appid=" + API_KEY;
  
  try {
    const data = await fetch(API_URL);
    const weather = await data.json();
    console.log(data);
    console.log("***");
    console.log(weather);
    return {
      props: {
        weather: weather,
      },
    };
  } catch (err) {
    console.log;
    return {
      props: {
        error: err,
      },
    };
  }
}

export default Home;
