import React from 'react'
import {  MyTextField, MyPaper } from './styles';
import { Button,Box } from '@mui/material';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }
  return (


    <MyPaper elevation={3}>
      <h1 style={{textAlign:"center"}}>Feedback / Queries</h1>
      <Box p={3} sx={{
        width: 280,
        height: 300,
      }}>
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
              pattern: /[a - zA - Z0 - 9] +\.[a-zA-Z0-9]+@gmail\.com/
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
      </Box>
    </MyPaper>
  )
}

export default Contact
