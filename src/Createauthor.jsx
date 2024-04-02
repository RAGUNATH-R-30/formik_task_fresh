import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addauthor} from "./reducer/bookauthorlist";
import { useNavigate } from 'react-router-dom';

function Createauthor() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
        initialValues:{
            name:"",
            birthdate:"",
            biography:""
        },
        validate:(values)=>{
          console.log(values)
            let error = {}
            if(values.name.length==0){
                error.name = "Please Enter AuthorName"
            }
            if(values.name.length<3){
              error.name = "Enter Name greater than 3."
            }

            if(values.biography.length==0){
              error.biography = "Enter Biography."
            }
            if(values.biography.length<3){
              error.biography = "Enter biography greater than 3."
            }
            if(values.biography.length>163){
              error.biography = "Characters Does not exceed 163."
            }
            if(values.birthdate==0){
              error.birthdate = "Enter the Date Of Birth."
            }
            return error
        },
        onSubmit:(values)=>{
          createauthor(values)
            console.log(values)
        }
    })

    const createauthor = async(values)=>{
      try {
      const createauthorapi = await axios.post("https://6605376c2ca9478ea17fb6d1.mockapi.io/users",values)
      

      dispatch(
        addauthor({
          id:createauthorapi.data.id,
          name:values.name,
          birthdate:values.birthdate,
          biography:values.biography,
          avatar:createauthorapi.data.avatar
        })
      )
        navigate("/allauthors")
      console.log(createauthorapi)
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
 
    <div className="col-lg-4 mt-3">
     <h3>Create Author</h3>


     <form onSubmit={formik.handleSubmit}>   
    <div style={{ fontFamily: "sans-serif", fontSize: 14 }}>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        {formik.getFieldMeta("name").error&&formik.getFieldMeta("name").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("name").error}</span>)}

        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Birth Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='birthdate'
            value={formik.values.birthdate}
            onChange={formik.handleChange}
          />
        </div>

        {formik.getFieldMeta("birthdate").error&&formik.getFieldMeta("birthdate").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("birthdate").error}</span>)}

        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Short Biography
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="exampleInputPassword1"
            style={{resize:"none"}}
            name='biography'
            value={formik.values.biography}
            onChange={formik.handleChange}
          />
        </div>
        {formik.getFieldMeta("biography").error&&formik.getFieldMeta("biography").touched&&(<span style={{color:"red"}}>{formik.getFieldMeta("biography").error}</span>)}

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
      
  )
}

export default Createauthor