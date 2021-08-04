import axios from "axios";

export const poemistAPI = axios.create({
    baseURL: "https://www.poemist.com/api/v1/randompoems",
});