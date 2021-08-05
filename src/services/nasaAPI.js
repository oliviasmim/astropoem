import axios from "axios";


// const apiKey = process.env.REACT_APP_NASA_KEY;

// export const nasaAPI = axios.create({
//     baseURL: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
// });

export const nasaAPI = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod?api_key=4FyIgMGadOtPxXMbdx8Chz3K4KpPEjWfJoHaFAeF`,
});