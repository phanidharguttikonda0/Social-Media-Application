import movieTrailer from "movie-trailer";
export default function useGetUrl(name){
    movieTrailer(name) // Searches for "Inception" trailer on YouTube
    .then(url => {
        for(let x = 0 ; x < url.length ; x++){
            if(url[x]==='='){
                console.log(url.substring(x+1,url.length))
                return url.substring(x+1,url.length)
            }
        }
    })
    .catch(error => console.log());
}

