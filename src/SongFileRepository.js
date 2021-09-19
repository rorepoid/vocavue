const getSongs = async () => Array(20).fill(getSong());

const getThumbUrl = () => require("~/assets/aimaina.png")

const getSong = () => {
    return {
        name: "Life's too short",
        pvs: [
            {
                url: 'https://vocadb.net',
                thumbUrl: getThumbUrl,
                author: 'rorepoid',
                pvType: 'Original'
            }
        ]
    }
}

export default { getSongs }