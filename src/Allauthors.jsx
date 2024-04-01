import React from 'react'

import AuthorCard from './AuthorCard'

function Allauthors({content}) {
    console.log(content)
  return (
    
    <div className="col-lg-8 mt-3">
        <div className="row">
                {content.map((item,index)=>{
                    return <AuthorCard content={item}key={index}></AuthorCard>
                })}
        </div>
    </div>
  )
}

export default Allauthors;