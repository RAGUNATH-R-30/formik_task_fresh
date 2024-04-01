import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteauthor } from './reducer/bookauthorlist';
import axios from 'axios';

function DeleteAuthorModal({content,deletemodalclose}) {

  //States
  const dispatch = useDispatch();

//The below function is used to delete user.
  let deleteauthorapi = async (id) => {
    try {
      const deleteuserrequest = await axios.delete(
        `https://6605376c2ca9478ea17fb6d1.mockapi.io/users/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Delete User
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                deletemodalclose(false);
              }}
            ></button>
          </div>
          <div className="modal-body">Are you sure.You want to delete?</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              style={{ backgroundColor: "#66C6BA", border: "none" }}
              data-bs-dismiss="modal"
              onClick={() => {
                deletemodalclose(false);
              }}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                deleteauthorapi(content.id);
                dispatch(deleteauthor(content));
                deletemodalclose(false);
              }}
            >
              yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAuthorModal