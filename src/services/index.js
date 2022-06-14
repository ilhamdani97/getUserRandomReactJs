import axios from 'axios';
import CONFIG from '../config';

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}`;
};

const getWithSlug = (api) => (slug, timemout = true) => {
    return axios(`${fullURL(api)}${slug}`,
        {
            method: 'GET'
        },
        timemout
    ).catch((err) => {
        const {
            history: { push }
        } = this.props;
        push('/');
    })
};

export const getUser = getWithSlug('');

const API = {
    getUser
};

export default API;
