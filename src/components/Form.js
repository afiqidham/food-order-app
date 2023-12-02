// Form.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, TextareaAutosize } from '@mui/material';

const Form = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Food Name"
        variant="outlined"
        {...register('name', { required: true })}
      />
      <TextareaAutosize
        rowsMin={3}
        placeholder="Description"
        {...register('description', { required: true })}
      />
      <TextField
        type="number"
        label="Price"
        variant="outlined"
        {...register('price', { required: true })}
      />
      <Button variant="contained" type="submit">
        Add Item
      </Button>
    </form>
  );
};

export default Form;
