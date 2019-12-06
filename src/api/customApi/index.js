import { BASE_RICK_AND_MORTY_URL } from '../index';
import axios from 'axios';

const http = axios.create();

const makeCustomApi = ({ client, headersManager }) => ({
    getAllCharacters: () =>
        http.get(`${BASE_RICK_AND_MORTY_URL}`),

});

export default makeCustomApi;