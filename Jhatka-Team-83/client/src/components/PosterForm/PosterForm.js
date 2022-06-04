import React from 'react'

function PosterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (EduData) => {

    console.log(EduData)
    
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
      <h3 className="text-center m-4">Add Education Details</h3>
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
            id="title"
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title?.type === "required" && (
            <p className="text-danger">*Enter the title</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="subheading" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Subheading</div>
            </div>
          </label>

          <input
            type="text"
            id="subheading"
            className="form-control"
            {...register("subheading", { required: true })}
          />
          {errors.subheading?.type === "required" && (
            <p className="text-danger">*Enter the subheading</p>
          )}
        </div>
       
         <div className="mb-3">
          <label htmlFor="content" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Content</div>
            </div>
          </label>

          <textarea
            cols='10'
            type="text"
            id="content"
            className="form-control"
            {...register("content", { required: true })}
          />
          {errors.content?.type === "required" && (
            <p className="text-danger">*Enter the Content</p>
          )}
        </div>

        
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Add the image</div>
            </div>
          </label>

          <input
            type="file"
            id="img"
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