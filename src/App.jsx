import { useEffect, useState } from "react";
import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allbooks from "./Allbooks";
import Allauthors from "./Allauthors";
import Createbook from "./Createbook";
import Createauthor from "./Createauthor";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setauthors, setbooks  } from "./reducer/bookauthorlist";

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.app)
  

  let getdata = async()=>{
    try {

    const alldata = await axios.get("https://6605376c2ca9478ea17fb6d1.mockapi.io/books")
      dispatch(setbooks(alldata.data))
 
    } catch (error) {
      console.log(error)
    }
    

  }

  let getauthor = async()=>{
    try {
      const authordata = await axios.get("https://6605376c2ca9478ea17fb6d1.mockapi.io/users")
      dispatch(setauthors(authordata.data))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if (data.booklist.length == 0) {
      getdata();
    }
    if(data.authorslist.length == 0){
      getauthor();
    }
    
  }, []);



  return (
    <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 ps-0">
        <Sidebar></Sidebar>
        </div>
        <Routes>
      <Route path="/" element={<Allbooks content={data.booklist}/>}></Route>
      <Route path="/allauthors" element={<Allauthors content={data.authorslist}/>}></Route>
      <Route path="/createbook" element={<Createbook/>}></Route>
      <Route path="/createauthor" element={<Createauthor/>}></Route>
    </Routes>
      </div>
    </div>


    
    </BrowserRouter>
  );
}

export default App;