import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editauthor, editbook } from "./reducer/bookauthorlist";

function Authormodal({ content, modalclose }) {
    console.log("content",content)
  //states
  const [showmodal, setshowmodal] = useState(true);

  const dispatch = useDispatch();
  const edittheauthor = async (value) => {
    console.log("value",value)
    console.log("id value",value.id)
    try {
      const editauthorapi = await axios.put(
        `https://6605376c2ca9478ea17fb6d1.mockapi.io/users/${value.id}`,
        value
      );
      dispatch(
        editauthor({
          id: value.id,
          name: value.name,
          birthdate: value.birthdate,
          biography: value.biography,
          avatar: value.avatar,
        })
      );
      modalclose(false);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      id: content.id,
      name: content.name,
      birthdate: content.birthdate,
      biography: content.biography,
      avatar: content.avatar,
    },
    validate:(values)=>{
      console.log(values)
      let error = {}
      if(values.name.length==0){
        error.name = "Enter AuthorName"
      }
      if(values.name.length<3){
        error.name = "Enter Name greater than 3."
      }
      if(values.birthdate.length==0){
        error.birthdate = "Enter Birthdate"
      }
      if(values.biography.length ==0){
        error.biography = "Enter Biography"
      }
      if(values.biography.length<3){
        error.biography = "Enter Biography greater than 3 letters."
      }
      return error;
    },
    onSubmit: (values) => {
      console.log(values);
      edittheauthor(values)
    },
  });

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
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      AuthorName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </div>

                  {formik.getFieldMeta("name").error&&formik.getFieldMeta("name").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("name").error}</span>)}

                  <div className="">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Birthdate
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="birthdate"
                      onChange={formik.handleChange}
                      value={formik.values.birthdate}
                    />
                  </div>

                  {formik.getFieldMeta("birthdate").error&&formik.getFieldMeta("birthdate").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("birthdate").error}</span>)}

                  <div className="">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Biography
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="biography"
                      onChange={formik.handleChange}
                      value={formik.values.biography}
                    />
                  </div>

                  {formik.getFieldMeta("biography").error&&formik.getFieldMeta("biography").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("biography").error}</span>)}

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
                  onClick={() => {}}
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

export default Authormodal;
