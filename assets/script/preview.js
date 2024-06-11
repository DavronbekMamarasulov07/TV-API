import axios from "./axios.js"
import { renderPreviewMovie } from "./render.js"


const URL = location.search
const IMAGE_ID = new  URLSearchParams(URL).get("movie-id")


const loadPrerewImg = async (id) => {
    try {
        const response = await axios(`/shows/${id}`)
        renderPreviewMovie(response.data)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
loadPrerewImg(IMAGE_ID)