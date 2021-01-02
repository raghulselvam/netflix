import React,{useEffect,useState} from 'react'
import axios from "./axios";
import response from "./response";
import "./Row.css"
const baseUrl="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLarge}) {
    const[movies,setmovies]=useState([])
    useEffect(()=>{
        async function fetchData(){
         const request=await axios.get(fetchUrl)
         setmovies(request.data.results);
         return request
        }
     fetchData()
    },[fetchUrl])
    return ( 
        <div className="row">
            <h2>{title}</h2>
            <div className="row_images">
                {movies.map(movie=>(
                <img  className={`all_images ${isLarge && "row_largeposter"}`} src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}/>
          ))}
            </ div>
        </div>
    );
}

export default Row
