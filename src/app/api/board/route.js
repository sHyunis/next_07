// src/app/api/board/route.js
// localhost:3000/api/board
// mariadb 사용
// route.js에서 연동

import { boards } from '../model/boardData';
import datas from '../model/boardData.json';
// javascript로 자동 parse

import { redirect } from 'next/navigation';
export async function GET(){
    // console.log('datas : ', datas);
    // javascripth 자동 parse
    return Response.json(boards)
}


import fs from 'fs'
import path from 'path'
// //1.
// export async function POST(request){
//     const { title, content } = await request.json()
//     console.log(title, content )
     
//     const newBoard = { id :`${ boards.length + 1 }`, title, content }
//     boards.push(newBoard);
//     const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js') 
//     fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8')

//     return Response.json( newBoard )
// }

//2.  api/board/route.js

export async function POST(request){

    const formData = await request.formData(); // 
    // console.log( formData )
    // FormData {
    //     [Symbol(state)]: [
    //         { name: 'title', value: 'CSR' },
    //         { name: 'body', value: 'client side  rendering' }
    //     ]
    // }
     
    const { title , content } = Object.fromEntries( formData )

    const newBoard = { id :`${ boards.length + 1 }`, title, content }
    boards.push(newBoard);
    const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js') 
    fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8')

    return Response.json( null, {
        status : 302,
        headers : {
            Location : '/board'
        }
    })
}

// 2.
// export async function POST(request){
//     const body = await request.json()
    
//     console.log(body)
//     return Response.json( body )
// }
// 출력형식
// {
//     "title" : "html",
//     "content" : "html content ...",
// },