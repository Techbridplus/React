import React from 'react'
import {Input,Logo,Button} from './index'
import { Link,useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import authService from '../appwrite/auth';
import {useDispatch} from "react-redux"
import { loginState } from '../store/authSlice';
function SignupForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const Submit=async(data)=>{
        try {
        const user= await authService.createAccount(data)
        if(user){
            console.log('Account created:',user);
            dispatch(loginState(user))
            navigate("/")
        }
        } catch (error) {
            console.log('Error creating account:',error);
        }
    }
    return (
        <div className='bg-white h-3/4 md:w-1/3  rounded-xl   border-2 border-blue-600 flex flex-col overflow-hidden'>
            <div className='w-full h-1/5 rounded-xl flex flex-col justify-center items-center'>
                <Logo/>
                <p className='text-lg text-gray-500 font-medium'>Welcom to our Blog</p>
            </div>
            <div className='w-full h-3/5 rounded-xl flex flex-col'>
                <form 
                className='flex flex-col'
                onSubmit={handleSubmit(Submit)}
                >
                    <Input label='Name' type="text" placeholder={'Enter your name'} {...register("name", { required: true })} />
                    <Input label='Email' type="email" placeholder={'Enter your email'} {...register("email", { required: true })} />
                    <Input label='New Password' type='password' placeholder={'Create new password'} {...register("password", { required: true })}/>
                    <Button name='Create account' type={'submit'} className='flex justify-center items-center'/>
                    <div className='flex justify-center items-center'>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>

                </form>
                
                
            </div>
            
            
        </div>
    )
}

export default SignupForm
