'use client'

import React, { useState, useEffect , useRef} from 'react'
import { useRouter } from 'next/navigation';

// 화면단 : src/app/board/[id]/edit/page.js
// 데이터처리단 : src/app/api/board/[id]/route.js
// localhost:3000/board/[id]/edit/
// localhost:3000/board/1/edit/
// localhost:3000/board/2/edit/

// localhost:3000/board/[id]/edit/[productid]

const Edit = ({ params }) => {
  const router = useRouter(); 
  const { id } = params;
  const [ isEdit, setIsEdit ] = useState(true)
  const [ board, setBoard ] = useState({})
  const titleRef = useRef(); 

  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  const gotoBoard = ()=>{
     router.push('/board')
  }

  useEffect(()=>{
        fetch(`http://localhost:3000/api/board/${id}`)
        .then(res=>res.json())
        .then(res=>{
            setBoard(res)
            titleRef.current.focus(); // 확인
        })
  }, [])

//   useEffect(()=>{
//      if( id >= 100 ){
//         router.push('/board')
//      }
//   }, [id])

  const titleHandle = (e)=>{
        setTitle(e.target.value);
        const data = { ...board, title : e.target.value }
        setBoard(data)
  }
  const contentHandle = (e)=>{
        setContent(e.target.value);
        const data = { ...board, content : e.target.value }
        setBoard(data)
  }

  const editSaveHandle = ()=>{
        fetch(`http://localhost:3000/api/board/${id}`, {
            method : 'PUT',
            headers : { 'Content-type' : 'application/json;charset=utf8'},
            body: JSON.stringify(board)
        }).then(res=>res.json())
        .then( res=> gotoBoard())
  }
  return (
    <div>
        <h1>Edit {params.id} </h1>
        {
            board && <>
                <input type="text" 
                    value={ board.title } 
                    ref={titleRef}  
                    onChange={ (e)=> titleHandle(e)} 
                />  
                <br />
                <input type="text" 
                    value={ board.content} 
                    onChange={ (e)=> contentHandle(e)} 
                />
            </>
        }
         {
             isEdit ? 
             <button  onClick={editSaveHandle}>저장</button> 
             : <button onClick={gotoBoard}>취소</button>
         } 
    </div>
  )
}

export default Edit