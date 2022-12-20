import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
function Entertainment() {
    const[news,setnews]=useState([])
    useEffect(()=>{
        try{
            async function fetchdata(){
               const url ='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5a76ec9e227c47b1818d24d0f47d8107'
                 const res = await axios.get(url)
                 setnews(res.data.articles)
                 console.log(res.data.articles)
            }
            fetchdata()
        }
        catch(error){
            console.log(error.message);
        }
    },[])
  return (
   <div className='homescreen'>
    <Navbar/>
    <h1>Entertainment News</h1>
    <div className='entertainment'>
    {news.length &&  news.map((news, i) => (
            <div key={i}>
              {i < 3 && (
                <div className="col1">
                  <img
                    src={
                      news.urlToImage
                        ? news.urlToImage
                        : "https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png"
                    }
                    className='si'
                  />
                  <div>
                 
                    <h3>{news.title}</h3>
                    <span>{news.description}</span>
                  </div>
                </div>
              )}
            </div>
          ))} 
    </div>

   </div>
  )
}

export default Entertainment