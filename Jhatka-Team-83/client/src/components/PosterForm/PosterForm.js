import React, {useState} from 'react'
import { addDoc, collection } from "firebase/firestore";
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {db} from '../../firebase-config';
import {useNavigate} from 'react-router-dom';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';

function PosterForm() {

  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [newLocation, setNewLocation]=useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const localdb = collection(db, "Poster");

  const onFormSubmit = async(PosterData) => {
    const {Title,Subheading,Content,Image} = PosterData;

    await addDoc(localdb, {
        Date:firebase.firestore.Timestamp.now().toDate(),
        Title:newTitle,Subheading:newDescription,Content:newSummary,Image:newLocation
       });
    console.log(PosterData);
    navigate('/postertemplate')
    
  }
  

  // const submitData = async (event) => {
  //   event.preventDefault();
  //   const {username, email, message} = userData;

  //    if (username && email && message){
  //      await addDoc(massEmaildb, {
  //        username,
  //        email,
  //        message
  //      });
  //    }
  // }



  return (
    <>
      <Container fluid>
      <h3 className="text-center m-4">Add Poster Details</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="education-form bg-light mx-auto border border-dark rounded p-3"
      >

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Enter the Title</div>
            </div>
          </label>

          <input
            type="text"
            id="Title"
            onChange={(event) => {
              setNewTitle(event.target.value);
            }
          }
            className="form-control"
            //{...register("Title", { required: true })}
          />
          {errors.Title?.type === "required" && (
            <p className="text-danger">*Enter the title</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="Subheading" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Subheading</div>
            </div>
          </label>

          <input
            type="text"
            id="Subheading"
            className="form-control"
             onChange={(event) => {
              setNewDescription(event.target.value);
            }
          }
            //{...register("Subheading", { required: true })}
          />
          {errors.Subheading?.type === "required" && (
            <p className="text-danger">*Enter the subheading</p>
          )}
        </div>
       
         <div className="mb-3">
          <label htmlFor="Content" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Content</div>
            </div>
          </label>

          <textarea
            cols='10'
            type="text"
            id="Content"
            onChange={(event) => {
              setNewSummary(event.target.value);
            }
          }
            className="form-control"
            //{...register("Content", { required: true })}
          />
          {errors.Content?.type === "required" && (
            <p className="text-danger">*Enter the Content</p>
          )}
        </div>

        
        <div className="mb-3">
          <label htmlFor="Image" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Add the image</div>
            </div>
          </label>

          <input
            type="text"
            id="Image"
            onChange={(event) => {
              setNewLocation(event.target.value);
            }
          }
            className="form-control"/>
          </div>

        <button className="d-block mx-auto btn btn-primary mb-2" type="submit">
          Submit
        </button>
      </form>

    </Container>

    </>
  )
}

export default PosterForm