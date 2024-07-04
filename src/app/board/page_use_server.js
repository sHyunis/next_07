'use server'

import Link from 'next/link';
import React from 'react'

// src/app/board/page.js
// localhost:3000/board
// 내 로컬에서 데이터 읽기
const getBoards = async ()=>{
    const url = `http://localhost:3000/api/board`
    const res = await fetch(url);
    const boards = await res.json();
    return boards
}

const Boards = async () => {
  const boards = await getBoards();

  return (
    <div>
      <h1> Boards </h1>
      {
          boards.map(item=><div key={item.id}
                                style={{ display : 'flex'}}
          >
            <Link href={`/board/${item.id}`} style={{ color: 'red'}}> {item.id} {item.title} </Link>
            <p>  {item.content} </p>
          </div>)
      }
    </div>
  )
}

// 1. api/board 사용법과 같이 사용할 수 있음 
// import { boards } from '../api/model/boardData'
// const Boards = () => {
//   return (
//     <div>
//       <h1> Boards </h1>
//       {
//           boards.map(item=><div key={item.id}
//                                 style={{ display : 'flex'}}
//           >
//             <h2 style={{ color: 'red'}}> {item.id} {item.title} </h2>
//             <p>  {item.content} </p>
//           </div>)
//       }
//     </div>
//   )
// }

export default Boards