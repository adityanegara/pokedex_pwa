import CONFIG from './config';

const API_ENDPOINT = {
    GEN_1 : `${CONFIG.BASE_URL}pokemon/?offset=0&limit=151`,
    GEN_2 : `${CONFIG.BASE_URL}pokemon/?offset=151&limit=100`,
    GEN_3 : `${CONFIG.BASE_URL}pokemon/?offset=251&limit=134`,
    DETAIL : (id) => `${CONFIG.BASE_URL}pokemon/${id}`
}

export default API_ENDPOINT;