import React from 'react'

import AuthorCard from './AuthorCard'

function Allauthors({content}) {
    console.log(content)
  return (
    <>
    <h3>All Authors</h3>
        <div className="row">
                {content.map((item,index)=>{
                    return <AuthorCard content={item}key={index}></AuthorCard>
                })}
        </div>
    </>
    // <div className="col mt-3">
    
    // </div>
  )
}

export default Allauthors;