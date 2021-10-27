import React from 'react';
import { Controller, useForm } from "react-hook-form";
import './Register.css'
import DatePicker from 'react-datepicker'

const Register = () => {

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='container mt-5'>
            <h2 className='text-center mt-3 mb-3'>Register as a Volunteer</h2>
            {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="" {...register("example")} placeholder='Full Name' />
                <input defaultValue="" {...register("example")} placeholder='Username or Email' />
                <input defaultValue="" {...register("example")} placeholder='Date' />
                <input defaultValue="" {...register("example")} placeholder='Description' />
                
                
                
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
            
        </div>
    );
};

export default Register;