import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/';
const newsapikey = process.env.NEWS_API;

const genconfig = (path, params) => ({
    method: 'get',
    baseURL: API_URL,
    url: path,
    headers: {
        'Authorization': `Bearer ${newsapikey}`,
    },
    params,
});

export function getApiEverything(query, callback) {
    return axios(genconfig('/everything', {q: query})).then(callback);
}

export function getApiTophead(query, callback) {
    return axios(genconfig('/top-headlines', {q: query})).then(callback);
}

export function getApiEnvironment(callback) {
    return axios(genconfig('/everything?q=environment'))
        .then(callback);
}