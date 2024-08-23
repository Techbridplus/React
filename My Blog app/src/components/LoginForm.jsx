import React from 'react'
import {Input,Logo,Button} from './index'
import { Link,useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import authService from '../appwrite/auth';
import {useDispatch} from "react-redux"
import { loginState } from '../store/authSlice';
function LoginForm() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Submit = async (data)=>{
        
        try {
            const user= await authService.login(data)
            if(user){
                console.log('Login successFully :: ',user);
                dispatch(loginState(user))
                navigate("/")
            }
            } catch (error) {
                console.log('Error Login :',error);
            }
    }
    return (
        <div className='bg-white h-3/5 md:w-1/3  rounded-xl   border-2 border-blue-600 flex flex-col overflow-hidden'>
            <div className='w-full h-1/5 rounded-xl flex flex-col justify-center items-center'>
                <Logo/>
                <p className='text-lg text-gray-500 font-medium'>Welcom to our Blog</p>
            </div>
            <div className='w-full h-3/5 rounded-xl'>
                <form 
                className='w-full h-full  flex flex-col'
                onSubmit={handleSubmit(Submit)}
                >
                    <Input 
                    label='email'
                    type="email"
                    placeholder={'enter your email'}
                    {...register("email", { required: true })}
                    />
                    <Input 
                    label='password'
                    type="password" 
                    placeholder={'enter your password'}
                    {...register("password", { required: true })}
                    />
                    <Button name='Login' type={'submit'} className='flex justify-center items-center'/>
                    <div className='flex justify-center items-center'>
                    <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
                </div>
                </form>
                
                
                
            </div>
            
            
        </div>
    )
}

export default LoginForm
