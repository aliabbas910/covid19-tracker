import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const response = await axios.fetch(url);
        return response;
    } catch (error) {

    }
}
