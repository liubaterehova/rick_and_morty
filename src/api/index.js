import makeCustomApi from "./customApi";

export const BASE_RICK_AND_MORTY_URL =
    "https://rickandmortyapi.com/api/character/?page=";

export const BASE_ONE_CHARACTER_URL = "https://rickandmortyapi.com/api/character/"

export const BASE_EPISODE_URL = 'https://rickandmortyapi.com/api/episode/'

export const makeApi = (dependencies = {}) => ({
    custom: makeCustomApi(dependencies)
});

export default makeApi;