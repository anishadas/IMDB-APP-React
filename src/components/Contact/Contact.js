import React, { useContext } from 'react'
import { MyBox, MyTextField, MyPaper } from './styles';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }
  return (


    <MyPaper elevation={3}>
      <h1 style={{textAlign:"center"}}>Feedback / Queries</h1>
      <MyBox p={3} >
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: "column" }}>
          <MyTextField
            id="name"
            name="name"
            label="Name"
            type="text"
            {...register("name", { required: true, maxLength: 15,minLength:3 })}
          />
          {errors.name && <p style={{color:"red"}}>Please check the Name</p>}
          <MyTextField
            id="email"
            name="email"
            label="Email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {errors.email && <p style={{ color: "red" }}>Please check the email</p>}
          <MyTextField
            id="age"
            name="age"
            label="Age"
            type="number"
            {...register("age", { required: true, maxLength: 2, })}
          />

          {errors.age && <p style={{ color: "red" }}>Please check the age</p>}
          <MyTextField
            id="feedback"
            name="feedback"
            label="Feedback"
            type="text"
            {...register("feedback")}
          />
          {errors.age && <p style={{ color: "red" }}>Feedback cannot be empty</p>}
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </MyBox>
    </MyPaper>
  )
}

export default Contact
