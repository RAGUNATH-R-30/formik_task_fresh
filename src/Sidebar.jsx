import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

    const [active, setactive] = useState("ALL BOOKS")
    const handlechange = (item) => {
        setactive(item)

    }
    const isactive = (item) => {
        return active == item ? { borderBottom: "3px solid #0dba4b", color: "#0dba4b" } : {};
    }
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100 position-fixed" style={{width: 280}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
      <span className="fs-4">Book Shelf</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link className="nav-link text-white" to={"/"} style={{ textDecoration: "none", color: "grey" }}> <span style={{ ...isactive("ALL BOOKS") }} onClick={() => handlechange("ALL BOOKS")}>ALL BOOKS</span>
        </Link>
      </li>
      <li>
        <Link to={'/allauthors'}className="nav-link text-white" style={{ textDecoration: "none", color: "grey" }}>
    
        <span style={{ ...isactive("ALL AUTHORS") }} onClick={() => handlechange("ALL AUTHORS")}>ALL AUTHORS</span>
        </Link>
      </li>
      <li>
     <Link to={'/createbook'} className="nav-link text-white" style={{ textDecoration: "none", color: "grey" }}>
     <span style={{ ...isactive("CREATE BOOK") }} onClick={() => handlechange("CREATE BOOK")}>CREATE BOOK</span>
     </Link>
      </li>
      <li>
        <Link to={'/createauthor'} className="nav-link text-white" style={{ textDecoration: "none", color: "grey" }}>
        <span style={{ ...isactive("CREATE AUTHOR") }} onClick={() => handlechange("CREATE AUTHOR")}>CREATE AUTHOR</span>
        </Link>
      </li>
    </ul>
    
  </div>
  )
}

export default Sidebar