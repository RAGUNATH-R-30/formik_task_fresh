import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbooks } from './reducer/bookauthorlist'
import { Link, useNavigate } from 'react-router-dom'


function Createbook({modalclose}) {


  const dispatch =useDispatch()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      bookname:"",
      authorname:"",
      isbnnumber:"",
      publicationdate:""
    },
    validate:(values)=>{
      console.log(values.publicationdate)
      let error = {};
      if(values.bookname.length==0){
        error.bookname = "Enter the BookName"
      }
      if(values.bookname.length<3){
        error.bookname = "Enter Bookname greater than three."
      }
      if(values.authorname ==""){
        error.authorname = "Enter the AuthorName"
      }
      if(values.authorname.length<3){
        error.authorname = "Enter AuthorName greater than three."
      }
      if(values.isbnnumber.length<13){
        error.isbnnumber = "Enter 13 digit ISBN Number."
      }
      if(values.publicationdate.length==0){
        error.publicationdate = "Enter the Publication Date."
      }
      return error;
    },
    onSubmit:(values)=>{
      console.log(values)
      createbook(values)
    }
  })


  const createbook = async(values)=>{
    try {
      const createbookapi = await axios.post("https://6605376c2ca9478ea17fb6d1.mockapi.io/books",values)
      dispatch(
        addbooks({
          id:createbookapi.data.id,
          avatar:createbookapi.data.avatar,
          bookname:values.bookname,
          authorname:values.authorname,
          isbnnumber:values.isbnnumber,
          publicationdate:values.publicationdate
        })
      )
      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

    <div className="col-lg-4 mt-3">
     <h3>Create Book</h3>
     <form onSubmit={formik.handleSubmit}>

    <div style={{ fontFamily: "sans-serif", fontSize: 14 }}>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name='bookname'
            value={formik.values.bookname}
            onChange={formik.handleChange}
          />
        </div>
        {formik.getFieldMeta("bookname").error&&formik.getFieldMeta("bookname").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("bookname").error}</span>)}
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='authorname'
            value={formik.values.authorname}
            onChange={formik.handleChange}
          />
        </div>

        {formik.getFieldMeta("authorname").error&&formik.getFieldMeta("authorname").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("authorname").error}</span>)}

        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            ISBN Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name='isbnnumber'
            value={formik.values.isbnnumber}
            onChange={formik.handleChange}
          />
        </div>
        {formik.getFieldMeta("isbnnumber").error&&formik.getFieldMeta("isbnnumber").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("isbnnumber").error}</span>)}

        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Publication Date
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name='publicationdate'
            value={formik.values.publicationdate}
            onChange={formik.handleChange}
          />
        </div>
        {formik.getFieldMeta("publicationdate").error&&formik.getFieldMeta("publicationdate").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("publicationdate").error}</span>)}
        <div className="row ">
          <div className="col">
       
            <button
              type="submit"
              className="btn btn-primary "
              style={{ backgroundColor: "#20236D", border: "none" }}
              onClick={() => { }}
            >
              Submit
            </button>
       
            
          </div>
        </div>
      </div>
     </form>
    </div>
      
    </>
  )
}

export default Createbook