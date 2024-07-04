// src/app/movies/page.js
// localhost:3000/movies

'use client'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import React, { useEffect ,  useState } from 'react'
import Image from 'next/image'

const Movies = () => {
  const [ movies, setMovies ] = useState([])
  const url = `https://yts.mx/api/v2/list_movies.json`  

  let pagePerCount = 5;
  let [currentPage, setCurrentPage ] = useState(1); 
  let lastOfIndex = currentPage * pagePerCount;
  let startOfIndex = lastOfIndex - pagePerCount;

  let pageMovies = movies.slice(startOfIndex, lastOfIndex)
  // 화면에 표시될 영화자라내기 

  useEffect(()=>{
        // const loadMovies = async ()=>{
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     setMovies(data.data.movies)
        // }

        // loadMovies()

        fetch(url)
        .then(res=>res.json())
        .then(res=> setMovies(res.data.movies))
  },[])

  return (
    <div>
        <h1>영화정보 {movies.length} </h1>

        <Image src='https://images.unsplash.com/photo-1719176372344-b29f6613e870?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            width={100} height={180}
        />

        {/* lastOfIndex {lastOfIndex} startOfIndex {startOfIndex} */}

        <div className='grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3'>
            {
                pageMovies.map(item=><Card key={item.title} movie={item} />)
            }
        </div>
        <Pagination pagePerCount={pagePerCount} 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    length={movies.length}
        />
        {/* {
            movies.length && JSON.stringify(movies[0])
        } */}
    </div>
  )
}

export default Movies