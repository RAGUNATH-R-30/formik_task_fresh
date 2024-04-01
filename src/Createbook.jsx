import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addbooks } from './reducer/bookauthorlist'

function Createbook({modalclose}) {


  const dispatch =useDispatch()

  const formik = useFormik({
    initialValues:{
      bookname:"",
      authorname:"",
      isbnnumber:"",
      publicationdate:""
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