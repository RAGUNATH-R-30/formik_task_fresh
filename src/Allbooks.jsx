import React from 'react'
import BookCard from './BookCard'

function Allbooks({content}) {
  return (
    <>
  <h3>All Books</h3>
<div className="col-lg-8 mt-3">
        <div className="row">
            {
                content.map((item,index)=>{
                    return<BookCard content={item} key={index}></BookCard>
                })
            }
                
        </div>
    </div>
    </>
    
  )
}

export default Allbooks