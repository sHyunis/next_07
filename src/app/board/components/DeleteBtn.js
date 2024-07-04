"use client"

import { useRouter } from "next/navigation";
// react useNavigate()
// CSR 컴포넌트에서만 사용 가능 

const DeleteBtn = ({ id }) => {
  const router = useRouter();

  const deleteBoardId = async (id)=>{
    const url = `http://localhost:3000/api/board/${id}`
    const res = await fetch(url, { method : "DELETE"}); 

    if( res.ok ){
       router.push('/board')
    } 
  }

  return (
    <button onClick={ ()=>deleteBoardId(id) }>삭제</button>
  )
}

export default DeleteBtn