import React from 'react'
import BookCard from './BookCard'

function Allbooks({content}) {
  return (
    <div className="col-lg-8 mt-3">
        <div className="row">
            {
                content.map((item,index)=>{
                    return<BookCard content={item} key={index}></BookCard>
                })
            }
                
        </div>
    </div>
  )
}

export default Allbooks