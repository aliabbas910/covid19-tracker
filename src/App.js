import './App.css';
import Cards from './Components/Cards';
import CountryPicker from './Components/CountryPicker';
import Charts from './Components/Charts';
import { fetchData } from "./API/index";

function App() {

  async function shuf() {
    const data = await fetchData();
    console.log(data);
  }

  return <>
    <div className="App">
      <img src="https://covid19statswebsite.netlify.app/static/media/image.d7265326.png" alt="" />
      <Cards />
      <CountryPicker />
      <Charts />
    </div>
  </>
}

export default App;
