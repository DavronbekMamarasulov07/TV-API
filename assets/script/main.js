import axios from "./axios.js"
import { renderTV } from "./render.js"

const loadTV = async () =>{
    try {
        const response = await axios("/shows")
        let data = response.data
        renderTV(data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

loadTV()