import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export default async function FetchData(country) {
    let changeableUrl = url;
    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const response = await axios.get(url);
        // response = response.json();
        return response;
        console.log(response.data);
    } catch {
        console.log("Error Aya Hai");
    }
}

export const fetchCountry = async () => {
    try {
        const { data : { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch (error) {
        return error;
    }
}