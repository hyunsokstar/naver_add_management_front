import React from 'react'
import axios from "axios";

import api from "../utils/api"
import styled from "styled-components";
import { useForm } from "react-hook-form";
import router, { useRouter } from 'next/router'


type Props = {}

/** styled area */

const Form = styled.form`
  width: 500px;
//   border: 1px solid black;
`;


const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  color: blue;
  font-size: 15px;
  font-weight: 200;
`;

const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    font-size: 14px;
`;

interface Itype {
    email: String,
    name: String,
    password: String,
    confirm_password: String
}

function SignUpForm({ }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data: Itype) => {
        console.log("data : ", data);

        // try {
        //     const response = await axios.post(
        //         `${api.cats}`,
        //         data,
        //     );

        //     console.log("response : ", response);
        //     if (response.data.success) {
        //         console.log("response.data : ", response.data);

        //         router.push('/')
        //     }
        // } catch (error) { }

    };


    return (
        // <div>SignUpForm</div>
        <div style={{ display: "flex", flexDirection: "column", "justifyContent": "center", alignItems: "center", height: "100vh" }}>
            <header>
                <h2>회원 가입 </h2>
            </header>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>email</Label>
                <Input defaultValue="" {...register("email", { required: true })} />
                {errors.name && <span>email is required</span>} <br />

                <Label>name</Label>
                <Input defaultValue="" {...register("username", { required: true })} />
                {errors.name && <span>name is required</span>} <br />

                <Label>phoneNumber</Label>
                <Input defaultValue="" {...register("phoneNumber", { required: true })} />
                {errors.phoneNumber && <span>phoneNumber is required</span>} <br />     

                <Label>userPhoneNumber</Label>
                <Input defaultValue="" {...register("userPhoneNumber", { required: true })} />
                {errors.userPhoneNumber && <span>userPhoneNumber is required</span>} <br />   

                <Label>companyName</Label>
                <Input defaultValue="" {...register("companyName", { required: true })} />
                {errors.companyName && <span>companyName is required</span>} <br />                  

                <Label>companyRegisterNumber</Label>
                <Input defaultValue="" {...register("companyRegisterNumber", { required: true })} />
                {errors.companyRegisterNumber && <span>companyRegisterNumber is required</span>} <br />                                           

                <Label>password</Label>
                <Input {...register("password", { required: true })} />
                {errors.password && <span>password is required</span>} <br />

                <Label>confirm password</Label>
                <Input {...register("confirm_password", { required: true })} />
                {errors.confirm_password && <span>confirm_password is required</span>} <br />

                <Input type="submit" />

            </Form>


        </div>
    )
}

export default SignUpForm