import React from 'react'

const Pagination = ({
    pagePerCount,  currentPage, setCurrentPage, length
}) => {

    // pagination의 개수
    const pagerNumber = []; // [1,2,3,4]
    for( let a=1; a<= Math.ceil(length/pagePerCount) ; a++){
        pagerNumber.push(a)
    }

  return (
    <div className='flex gap-3 justify-center'>
        {/* <h1>Pagination</h1> */}
        <button style={{
                    display :  currentPage === pagerNumber[0] ? "none" : "block"
                }}
                onClick={ ()=>setCurrentPage( currentPage - 1)}

                className={`w-[30px] h-[30px] text-center bg-gray-900 text-white rounded-md cursor-pointer text-2xl hover:bg-yellow-300 hover:text-pink-900`}
        > &lt;  </button>
        <ul className='flex gap-3'>
            {
                pagerNumber.map((item, index)=><li key={item} 
                        className={`w-[30px] h-[30px] text-center bg-pink-900 text-white rounded-md cursor-pointer text-2xl hover:bg-yellow-300 hover:text-pink-900 active:bg-red-700 ${ currentPage === index + 1 &&  'focus:border-2 focus:border-red-600' }`}

                        onClick={()=>setCurrentPage(item)}
                >{item}</li>)
            }
        </ul>

        <button style={{
                    display :  currentPage === pagerNumber[pagerNumber.length - 1] ? "none" : "block"
                }}
                onClick={ ()=>setCurrentPage( currentPage + 1)}

                className={`w-[30px] h-[30px] text-center bg-gray-900 text-white rounded-md cursor-pointer text-2xl hover:bg-yellow-300 hover:text-pink-900`}
        > &gt; </button>   


    </div>
  )
}

export default Pagination