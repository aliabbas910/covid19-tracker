import './App.css';
import Cards from './Components/Cards';
import CountryPicker from './Components/CountryPicker';
import Charts from './Components/Charts';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FetchData from './API';

const App = () => {
  const [data, setData] = useState({
    confirmed: {
      value: 0
    },
    deaths: {
      value: 0
    },
    recovered: {
      value: 0
    }
  });
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function getData() {
      let {data: {confirmed, deaths, recovered}} = await FetchData();
      setData({confirmed, deaths, recovered});
    }
    getData();
  },[])

  const handleChange = async (country) => {
    const data = await FetchData(country);
    setCountry(country);
    setData(data);
  }

  return <>
    <div className="App">
      <Box sx={{textAlign: "center"}}>
        <img src="https://covid19statswebsite.netlify.app/static/media/image.d7265326.png" alt="" />
      </Box>
      <Cards data={data} country={country} />
      <CountryPicker handleChange={handleChange} country={country}/>
      <Charts />
    </div>
  </>
}

export default App;
