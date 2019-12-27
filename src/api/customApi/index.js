import { BASE_RICK_AND_MORTY_URL } from "../index";
import { BASE_ONE_CHARACTER_URL } from "../index";
import { BASE_EPISODE_URL } from "../index";

import axios from "axios";

const http = axios.create();

const makeCustomApi = ({ client, headersManager }) => ({
    getAllCharacters: async page => {
        return await http.get(`${BASE_RICK_AND_MORTY_URL}${page}`);
    },
    getOneCharacter: async id => {
        return await http.get(`${BASE_ONE_CHARACTER_URL}${id}`);
    },
    getEpisodeById: async id => {
        return await http.get(`${BASE_EPISODE_URL}${id}`);
    },
    getCharacterNames: async arrOfNamesID => {
        console.log("arr in makeCustomApiGetCharacterNames", arrOfNamesID);
        return await http.get(`${BASE_ONE_CHARACTER_URL}${arrOfNamesID}`);
    }
});

export default makeCustomApi;