// src/app/api/board/[id]/route.js
// localhost:3000/api/board/1
// localhost:3000/api/board/2
// localhost:3000/api/board/3
import { boards } from '../../model/boardData';
import { redirect } from 'next/navigation';

export async function GET(request, {params}){
    const { id } = params; 

    //  error
    //  if (parseInt(params.id) > boards.length) {
    //         redirect("/api/board");
    //  }

    const find = boards.find(item=>item.id === id); 
    // find : {}, filter : [{}]
    return Response.json(find)
}

import fs from 'fs';
import path from 'path';
// src/app/api/board/[id]/route.js
export async function PUT(request, { params }){
    // const body = await request.json()
    // {
    //     "title" : "html",
    //     "content" : "html content ...",
    // },
    const { id } = params;
    const { title, content } = await request.json()
     
    const index = boards.findIndex(item=>item.id === id)
    const updateBoard = { id, title, content }
    boards[index] = updateBoard
    boards.splice(index, 1, updateBoard)

    // pwd 파워셀 경로 가져오기 
    // console.log(process.cwd()); // D:\frontend_5\board
    const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js')
    // 
    fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8')

    return Response.json(updateBoard)
}

export async function DELETE(request, { params }){
    const { id } = params; 
     
    const index = boards.findIndex(item=>item.id === id)  
    const deleted = boards.splice(index, 1)
    // 지운 데이터를 배열로 리턴

    const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js')
    // 
    fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8')

    return Response.json(deleted[0])
}

 