import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editbook } from './reducer/bookauthorlist'


function Bookmodal({ content, modalclose }) {
  //states
  const [showmodal, setshowmodal] = useState(true);

  const dispatch = useDispatch();
  const editthebook = async(value)=>{
    try {
        const editapi = await axios.put(`https://6605376c2ca9478ea17fb6d1.mockapi.io/books/${value.id}`,value)
        console.log(editapi.data)
        
        dispatch(editbook({
            id:value.id,
            bookname:value.bookname,
            authorname:value.authorname,
            isbnnumber:value.isbnnumber,
            publicationdate:value.publicationdate,
            avatar:value.avatar 
        }))
        modalclose(false)
    } catch (error) {
        console.log(error)
    }

  } 

  const formik = useFormik(
    {
        initialValues:{
            id:content.id,
            bookname:content.bookname,
            authorname:content.authorname,
            isbnnumber:content.isbnnumber,
            publicationdate:content.publicationdate,
            avatar:content.avatar   
        },
        validate:(values)=>{
          console.log(values)
          let error = {};
          if(values.bookname.length == 0){
            error.bookname = "Please Enter BookName."
          }
          if(values.bookname.length<3){
            error.bookname = "Enter BookName Greater Than Three."
          }
          if(values.authorname.length == 0){
            error.authorname = "Please Enter AuthorName"
          }
          if(values.authorname.length<3){
            error.authorname = "Enter AuthorName Greater Than Three."
          }
          if(values.isbnnumber.length<13){
            error.isbnnumber = "Enter 13 Digit ISBN Number."
          }
          if(values.publicationdate.length == 0){
            error.publicationdate = "Enter the Publication Date."
          }
          return error;
        },
        onSubmit:(values)=>{
            console.log("**********************")
            editthebook(values)
            // modalclose(false);
            console.log(values)
        }
    }
  )
  

  return (
    <>

    <form onSubmit={formik.handleSubmit}>

      <div
        className={showmodal ? "modal fade show" : "modal fade"}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: showmodal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Changes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setshowmodal(false);
                  modalclose(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div style={{ fontFamily: "sans-serif", fontSize: 14 }}>
                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Book Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="bookname"
                    onChange={formik.handleChange}
                    value={formik.values.bookname}
                  />
                </div>

                {formik.getFieldMeta("bookname").error&&formik.getFieldMeta("bookname").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("bookname").error}</span>)}

                <div className="">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Author Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="authorname"
                    onChange={formik.handleChange}
                    value={formik.values.authorname}
                  />
                </div>

                {formik.getFieldMeta("authorname").error&&formik.getFieldMeta("authorname").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("authorname").error}</span>)}

                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    ISBN Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="isbnnumber"
                    onChange={formik.handleChange}
                    value={formik.values.isbnnumber}
                  />
                </div>

                {formik.getFieldMeta("isbnnumber").error&&formik.getFieldMeta("isbnnumber").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("isbnnumber").error}</span>)}

                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Publication date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="publicationdate"
                    onChange={formik.handleChange}
                    value={formik.values.publicationdate}
                  />
                </div>
                
                {formik.getFieldMeta("publicationdate").error&&formik.getFieldMeta("publicationdate").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("publicationdate").error}</span>)}

              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setshowmodal(false);
                  modalclose(false);
                }}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#20236D", border: "none" }}
                onClick={() => {
                  
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  );
}

export default Bookmodal;