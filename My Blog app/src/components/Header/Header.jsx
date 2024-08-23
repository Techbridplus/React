import React,{useEffect} from 'react';
import Logo from '../Logo';
import {Link, NavLink} from 'react-router-dom';
import{HomeIcon} from '../index'
import {useSelector,useDispatch} from 'react-redux'
import LogoutBtn  from './LogoutBtn';
import authService from '../../appwrite/auth';
import Blogservice from '../../appwrite/BlogAppFunctionalitys';
import { loginState,sendData } from '../../store/authSlice';




function Header() {
    const IsLogin = useSelector((state) => state.auth.status)
    const dispatch = useDispatch();
    useEffect(() => {
        authService.getCurrentUser().then((user) => {
            if(user){
                dispatch(loginState());
                Blogservice.getPosts().then((response) => {
                    if (response) {
                        console.log("response", response);
                        dispatch(sendData(response.documents));
                    }
                }).catch((error) => {
                    console.error("error", error);
                }
                )
            }
        }).catch((error) => {   
            console.error("error", error);
        }
        )
    }, [IsLogin])
    const navItems = [
        {
          name: 'Home',
          slug: "/",
          LoginStatus: true
        }, 
      {
          name: "All Posts",
          slug: "/all-posts",
          LoginStatus: IsLogin,
      },
      {
          name: "Create +",
          slug: "/createpost",
          LoginStatus: IsLogin,
      },
        
      ]
    return (
        <div className='w-screen bg-slate-100 border border-b-2 border-b-red-600  top-0 left-0 h-20 fixed  z-10 flex items-center overflow-hidden'>
            <nav className='w-full'>
                <div className='flex justify-between'>
                    <div className='pl-6'>
                        <Link to='/'>
                            <Logo/>
                        </Link>
                    </div>
                    <div className='pr-10'>
                        <ul className='flex justify-center items-center '>
                            {navItems.map((item) => (
                                item.LoginStatus&&<li key={item.name}>
                                    <NavLink to={item.slug} className={({isActive}) =>
                                        `${isActive? "text-red-600" : "text-gray-700"} px-4 py-2 duration-200 hover:bg-red-600 hover:text-white rounded-full text-lg font-medium`
                                    }>
                                        {item.name}
                                        </NavLink>
                                </li>
                                
                            ))}
                            {IsLogin && <li>
                                            <LogoutBtn/>
                                        </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;