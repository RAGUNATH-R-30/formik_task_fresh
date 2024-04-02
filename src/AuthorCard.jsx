import { useFormik } from "formik";
import React, { useState } from "react";
import Authormodal from "./editauthormodal";
import DeleteAuthorModal from "./DeleteAuthorModal";

function AuthorCard({ content }) {

  const [modalstate,setshowmodal]=useState(false);
  const [deletemodal, setdeletemodal] = useState(false);

  let modalclose = (bool) => {
    setshowmodal(bool);
  };
  let deletemodalclose = (bool) => {
    setdeletemodal(bool);
  };
  // console.log(content)
  const formik =useFormik({
    initialValues:{
      id:content.id,
      authorname:content.name,
      birthdate:content.birthdate,
      biography:content.biography,
      avatar:content.avatar
    }
  })
  return (
 
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card mt-3 ms-2" style={{ }}>
        <div className="card-body">
          <div className="row ">
            <div className="col ">
              <div className="mb-2"
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 100,
                  backgroundColor:"green"
                }}
              >
                <img src={`${content.avatar}`} alt="" style={{borderRadius:100,objectFit:"cover",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} />
              </div>
            </div>
          </div>
          <h5 className="card-title">{`${content.name}`}</h5>
          <span className="card-subtitle mb-2 text-body-secondary" style={{fontSize:15}}>{`${content.birthdate}`}</span>
                <hr />
          <div style={{}}>

          <p className="card-text">{`${content.biography}`}</p>
          </div>
          <hr />
          <div className="row">
            <div className="col">
            <button type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#20236D", border: "none" }}onClick={()=>setshowmodal(true)}>Edit</button>
            </div>
            <div className="col">
            <button type="button"
                className="btn btn-outline-danger"
                onClick={() => {
                  setdeletemodal(true);
                }}

                >Delete</button>
            </div>
          </div>
          
        </div>
      </div>
      {modalstate&&<Authormodal content={content} modalclose={modalclose}/>}
      {deletemodal && (
        <DeleteAuthorModal content={content} deletemodalclose={deletemodalclose} />
      )}
    </div>
    
    
    
  );
}

export default AuthorCard;
