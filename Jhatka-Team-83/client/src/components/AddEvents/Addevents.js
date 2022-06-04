import React from 'react'
import { useForm } from 'react-hook-form'
import {Container} from 'react-bootstrap'

import './Addevents.css'

const Addevents = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onFormSubmit = (campaignDetails) => {
    console.log(campaignDetails)
  }

  return (
    <Container>
    <h2 className="text-center m-2">Add Events</h2>

    <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="post-form-width mx-auto bg-light border border-dark rounded p-3 mb-4"
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title?.type === "required" && (
            <p className="text-danger">*Enter your title</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-lable">
            Description
          </label>
          <textarea type="text"
            id="description"
            rows="10"
            className="form-control"
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">*Enter your description</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="summary" className="form-lable">
            Summary
          </label>
          <textarea type="text"
            id="summary"
            rows="5"
            className="form-control"
            {...register("summary", { required: true })}
          />
          {errors.summary?.type === "required" && (
            <p className="text-danger">*Enter your summary</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload image
          </label>

          <input type="file" accept="image/*" id="image" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          
          <input type="date" id="date" className="form-control" />
        </div>


        <div className="mb-3"> 
          <div className="mb-2">Type of event</div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="Petition" id="flexRadioDefault1" {...register('eventType', {required: true})} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Petition
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="fundraiser" id="flexRadioDefault2" {...register('eventType', {required: true})} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Fund Raiser
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="other events" id="flexRadioDefault3" {...register('eventType', {required: true})} />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Other Event
            </label>
          </div>
        </div>

        <button className="d-block mx-auto btn btn-primary" type="submit">
          Post It!
        </button>
      </form>
    </Container>
  )
}

export default Addevents