import React from 'react'
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import './Login.css'

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (loginData) => {
    console.log(loginData)
  }

  return (
    <Container fluid> 
      <div className="backg" >
      <h3 className="text-center font-link p-4">Login</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="login-form-width bg-light mx-auto border border-dark rounded p-3"
      >

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Username</div>
            </div>
          </label>

          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Enter your username</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Password</div>
            </div>
          </label>

          <input
            type="password"
            id="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">*Enter your password</p>
          )}
        </div>

        <button className="d-block mx-auto btn btn-primary" type="submit">
          Login
        </button>
      </form>

      </div>
    </Container>
  )
}

export default Login