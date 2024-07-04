// 'use server'
// localhost:3000/board/create : 글쓰기 페이지
 
export const metadata = {
  title: "Board Create",
  description: "Board next app",
};

const CreateBoard = async () => {
  return (
    <>
         <form action='/api/board' method="POST">
          {/* DELETE, PUT, POST */}
            <input  type="text"  placeholder='제목' name='title' />
            <input  type="text"  placeholder='내용'  name='content' /> 
            <button>등록</button>
        </form>
    </>
  )
}

export default CreateBoard