import { BASE_RICK_AND_MORTY_URL } from "../index";
import axios from "axios";

const http = axios.create();

const makeCustomApi = ({ client, headersManager }) => ({
    getAllCharacters: async page => {
        console.log("numberOfPageInApi", page);
        return await http.get(`${BASE_RICK_AND_MORTY_URL}${page}`);
    }
});

export default makeCustomApi;