import axios from "./axios.js";
import { renderTV } from "./render.js";


const loadTV = async () => {
    try {
        const response = await axios("/shows");
        let data = response.data;
        renderTV(data);
    } catch (error) {
        console.log(error);
    }
}

loadTV();

$searchInput.addEventListener("input", async (e) => { 
    e.preventDefault()
    const searchTerm = $searchInput.value.toLowerCase();
    try {
        const response = await axios("/shows"); 
        const allShows = response.data;
        const filteredShows = allShows.filter(show => 
            show.name.toLowerCase().includes(searchTerm)
        );
        console.log(filteredShows);
        renderTV(filteredShows);
    } catch (error) {
        console.log(error);
    }
});


