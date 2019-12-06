import makeCustomApi from './customApi';

export const BASE_RICK_AND_MORTY_URL = 'https://ghibliapi.herokuapp.com';

export const makeApi = (dependencies = {}) => ({
    custom: makeCustomApi(dependencies),
});

export default makeApi;