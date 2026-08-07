const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDFmZWYyZTVhNDgyNTc3ZmVmMGQwNTljMzIzMzVlMyIsIm5iZiI6MTc4NjAxNTIyNy40MjgsInN1YiI6IjZhNzQ2ZGZiNWE0NDg4MWUyZjNlYzlkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bKOXiBiKL6TJ0cyOKKlw9vcd3qWPodXAYu7pFioQ_MQ"
const options= {
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

const getDetailMovie = async()=> {
    try{
        const res = await axios.get('https://api.themoviedb.org/3/movie/550?language=en-US', options)
        const title = res.data.title
        const overview = res.data.overview
        const vote_average = res.data.vote_average.toFixed(1)
        const img = res.data.poster_path
        const genres = res.data.genres.map((g)=> g.name )
        return {
            title,
            img,
            overview,
            vote_average,
            genres
        }
    }catch(err) {
        console.error(err.message)
    }
}

const getCrews = async () => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/550/credits?language=en-US",
      options
    );

     const director = res.data.crew.find(
      (person) => person.job === "Director"
    ).name;

     const actors = res.data.cast
      .slice(0, 3)
      .map((actor) => actor.name).join(", ");


    console.log("Director:", director);
    console.log("Actors:", actors);

    return {
      director,
      actors
    };

  } catch(err) {
    console.error(err.message);
  }
};

// getCrews();

const renderData = async() => {
    try {
        const data = await getDetailMovie()
        const dataCrews = await getCrews()
        
        const container = document.querySelector("section>div")
        const poster = document.querySelector("div.poster>img")
        poster.setAttribute("src",` https://image.tmdb.org/t/p/w300/${data.img}`)
        poster.setAttribute("alt", data.title)  
        const title = document.querySelector("div.info>p:nth-child(2)")
        title.textContent = data.title
        const rate = document.querySelector("div.info>div:nth-child(3)>span")
        rate.textContent = data.vote_average
        const overview = document.querySelector("div.info>p:nth-child(4)")
        overview.textContent = data.overview
        const genresContainer = document.querySelector(".genres");
        data.genres.forEach((genre) => {
        const badge = document.createElement("span");
        badge.textContent = genre;
        badge.classList.add(
        "border",
        "px-1",
        "rounded-full",
        );
        genresContainer.appendChild(badge);
        const director = document.querySelector("div.info>p:nth-child(5)")
        director.textContent = `Director: ${dataCrews.director}`
        const cast = document.querySelector("div.info>p:nth-child(6)")
        cast.textContent = `Cast: ${dataCrews.actors}`
        
    });
}catch(err) {
        console.error(err.message)

    }
}

document.addEventListener("DOMContentLoaded", renderData)