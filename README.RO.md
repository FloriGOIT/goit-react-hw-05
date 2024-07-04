trending
movieDetails
movieCreditsCast
movieReviews
movieSearch

    fetch(urlTrending).then((res)=>{})
                      .then((data)=>{})
                      .catch((error)=>{})


const urlTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=46829fa1f677f290fd75025af8b47e21";
fetch(urlTrending).then((res)=>{if(!res.ok){alert("There seems to be an issue with the API source")}
                                    else{return res.json()}})
                      .then((data)=>{const resultTrending = data.results; console.log(resultTrending)})
                      .catch((error)=>{return alert("The Fetch could not be made")})




