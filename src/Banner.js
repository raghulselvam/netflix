import React, { useEffect, useState } from 'react'
import response from "./response";
import axios from "./axios";
import "./Banner.css"


function Banner() {
    const[movies,setmovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(response.fetchTopRated)
            setmovies(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
            
            return request
           }
        fetchData()
         
    },[])
    console.log(movies);
    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + "..." :str;
    }


    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}
        >


  

        <div className="banner_container">
            <h1 className="title">{movies.original_title}</h1>
            <div className="buttons">
                <button className="button1"> Play</button>
                <button className="button2"> List</button>
            </div>
             
                <h1 className="description">
                    {truncate(movies?.overview,130)}</h1>
            </div>
        
        </header>
    )
}

export default Banner
