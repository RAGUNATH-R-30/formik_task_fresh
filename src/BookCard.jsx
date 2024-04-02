import React, { useState } from "react";
import { LiaBookSolid } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Bookmodal from "./editbookmodal";
import DeleteBookModal from "./DeleteBookModal";
function BookCard({content}) {

  const [modalstate,setshowmodal]=useState(false);

  const [deletemodal, setdeletemodal] = useState(false);
  let modalclose = (bool) => {
    setshowmodal(bool);
  };
  let deletemodalclose = (bool) => {
    setdeletemodal(bool);
  };
  return (
    <>
    <div className="col-lg-12 col-md-6">
      <div className="card mb-3" style={{ maxWidth: "100%", }}>
        <div className="row g-0">
          <div className="col-lg-3 col-md-5 col-sm-5">
            <div
              style={{
                height: 211,
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`${content.avatar}`}
                alt="Error"
                style={{ width: "100%", height: "100%", objectFit: "cover",borderTopLeftRadius:5,borderBottomLeftRadius:5}}
              />
            </div>
          </div>
          <div className="col-lg-9 col-md-7 col-sm-6">
            <div className="card-body">
              <div className="row d-flex justify-content-end ">
                <div className="col-lg-12">
                  
                    <CiEdit size={30} onClick={()=>setshowmodal(true)}/>
                  
                </div>
              </div>
              <h5 className="card-title"><FaBook size={18}/>{` -${content.bookname}`}</h5>
              <p className="card-text">
              <FaPen size={18}/>
               {` -${content.authorname}`}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {`ISBN Number: ${content.isbnnumber}`}
                </small>
              </p>
              {/* <button type="button"
                className="btn btn-outline-danger"
                onClick={() => {
                  setdeletemodal(true);
                }}

                >Delete</button> */}

          <div className="row">
            <div className="col">
            <button type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#20236D", border: "none" }}onClick={()=>setshowmodal(true)}>Edit</button>
            <button type="button"
                className="btn btn-outline-danger ms-3"
                onClick={() => {
                  setdeletemodal(true);
                }}

                >Delete</button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {modalstate&&<Bookmodal content={content} modalclose={modalclose}/>}
    {deletemodal && (
        <DeleteBookModal content={content} deletemodalclose={deletemodalclose} />
      )}
    </>
  );
}

export default BookCard;
