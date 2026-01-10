let moviesContainer = document.getElementById("movies-container");
let API_KEY="16d93320"
// console.log(moviesContainer)

function displayMovies(movies) {
    moviesContainer.innerHTML ="";

    movies.map(()=>{
        moviesContainer.innerHTML +=`
        <div class="rounded bg-white shadow hover:scale-105 transition cursor-pointer">
            <Img
            src=""
            class="rounded h-64 w-full object-cover"
            />
            <div class="p-3">
                <h3 class="font-bold text-sm"></h3>
                <p class="font-xs text-gray-500">year </p>
        </div>
        </div>
        `
        ;
    })
}

async function loadDefaultMovies() {
    moviesContainer.innerHTML="<p>Loading...</p>"

    try {
        let res=await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=all`); 
let data=await res.json()
console.log(data)
    } catch (error) {
        console.log("something went wrong")
    }

}
window.addEventListener("load", () => {
    loadDefaultMovies()
})