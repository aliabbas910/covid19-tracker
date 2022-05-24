import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { fetchCountry } from '../API';



const CountryPicker = ({ handleChange, country }) => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountry());    
        };

        fetchAPI();
    }, [])

    return <>
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <FormControl sx={{ width: '25%' }} >
                <InputLabel id="demo-simple-select-label">Select a Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Select a Country"
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {
                        countries.map((country, i) => {
                            return <MenuItem value={country} key={i}>{country}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    </>
}

export default CountryPicker;