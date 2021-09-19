const axios = require("axios");

const url = "https://vocadb.net/api/songs/top-rated?maxResults=20&fields=PVs";

const getSongs = async () => {
    return axios.get(url)
        .then(songs => songs.data)
        .catch(() => []);
}

export default { getSongs }
