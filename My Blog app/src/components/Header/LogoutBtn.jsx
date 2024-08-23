import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logoutState } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = async () => {
        try {
            const LogoutResponse = await authService.logout()
            if (LogoutResponse) {
                dispatch(logoutState(LogoutResponse))
                navigate('/')
            }
        } catch (error) {
                console.log('Error logout:', error)
        }
    }

    return (
        <button
            className='inline-bock px-4 py-2 text-lg duration-200 bg-slate-100 hover:bg-sky-600 hover:text-white rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn