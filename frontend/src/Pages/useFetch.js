import { useEffect, useState } from "react";

export default function useFetch(url,size) {
    const [movies, setMovies] = useState([]) ;
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let array = data.results ;
            const newArray = []
            let i = 0 ;
            let j = size ;
            while (j <= array.length){
                newArray.push(array.slice(i,j))
                i = j
                j += size
            }
            if (i < array.length){
                newArray.push(array.slice(i, array.length))
            }
            console.log(newArray)
            setMovies(newArray)
        }).catch((err) => console.log(err));
    },[url])
    //console.log(movies)
    return movies
}