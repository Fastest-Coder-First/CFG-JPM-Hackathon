import React, {useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {db} from '../../firebase-config';

function AddSkills() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const localdb =collection(db, "users");

  const onFormSubmit = async(skillData) => {
    const {skill1,skill2,skill3,skill4,skill5} = skillData;
    await addDoc(localdb, {
         skill1,skill2,skill3,skill4,skill5
       });
    console.log(skillData)
  }
  


  // const massEmaildb = collection();

  // let name, value;
  // const postUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setUserData({ ...userData, [name]: value });
  // };

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
      <h3 className="text-center m-4">Add Your 5 Top Skills</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="education-form bg-light mx-auto border border-dark rounded p-3"
      >

        <div className="mb-3">
          <label htmlFor="skill1" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 1</div>
            </div>
          </label>

          <input
            type="text"
            id="skill1"
            className="form-control"
            {...register("skill1", { required: true })}
          />
          {errors.skill1?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="skill2" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 2</div>
            </div>
          </label>

          <input
            type="text"
            id="skill2"
            className="form-control"
            {...register("skill2", { required: true })}
          />
          {errors.skill2?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>
       
        <div className="mb-3">
          <label htmlFor="percent" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 3</div>
            </div>
          </label>

          <input
            type="text"
            id="percent"
            className="form-control"
            {...register("percent", { required: true })}
          />
          {errors.percent?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="percent" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 4</div>
            </div>
          </label>

          <input
            type="text"
            id="percent"
            className="form-control"
            {...register("percent", { required: true })}
          />
          {errors.percent?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="percent" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 5</div>
            </div>
          </label>

          <input
            type="text"
            id="percent"
            className="form-control"
            {...register("percent", { required: true })}
          />
          {errors.percent?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>
        

        <button className="d-block mx-auto btn btn-primary mb-2" type="submit">
          Submit
        </button>
      </form>


    </Container>

    </>
  )
}

export default AddSkills
