import axios from 'axios';

const api = axios.get('https://api.covid19api.com/summary');

// const global = api.Global;
// const countriesData = api.Countries;

export const fetchData = async (country) => {
    let changeableAPI = api;
    if (country) {
        changeableAPI = `${api}${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableAPI);
        console.log(confirmed)
        console.log(recovered)
        console.log(deaths)
        console.log(lastUpdate)
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error) {
        console.log(error);
    }
};

export const fetchGlobalData = async () => {
    try {
        const { data } = await axios.get(api.Global)
        // console.log(confirmed)
        // console.log(deaths)
        // console.log(reportDate)
        // console.log(date)
        return data.map(({ TotalConfirmed, TotalDeaths, reportDate: Date }) => ({
            confirmed: TotalConfirmed, deaths: TotalDeaths, Date
        }));
    }
    catch (error) {
        return error;
    }
}

export const fetchCountries = async () => {
    try {

        const { data: { countries } } = await axios.get(api.Countries);
        console.log(countries)
        return (
            countries.map((key) => key.Country)
        )
    }
    catch(error){
        return error;
    }
}
