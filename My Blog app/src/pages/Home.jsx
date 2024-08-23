import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {PostCard} from '../components/index'
import {useSelector} from 'react-redux'
import BlogService from '../appwrite/BlogAppFunctionalitys'

function Home() {

    const [posts, setPosts] = useState([]);


    const IsLogin = useSelector((state) => state.auth.status);
    useEffect(() => {
        BlogService.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents);
            }
        }).catch((error) => {
            console.error("Appwrite service :: getPosts :: error", error);
        });
    }, []);
    return (
        IsLogin ?
        (posts.length>0 ? (
            <div className='bg-white h-full w-auto p-4'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h1 className='text-4xl font-bold text-gray-800 m-2'>Welcome to my Blog App</h1>
                <p className='text-2xl font-thin text-gray-800 m-2'>Start your Blog Journey</p>
            </div>
            <div className='w-full  flex flex-wrap justify-start gap-32 p-10'>
                {posts.slice(0, 3).map((post) => (
                    <div key={post.$id}>
                        <PostCard  Title={post.Title} image={post.image} ID={post.$id} />
                    </div>
                    
                ))}
                
                <div className=' flex justify-center items-center'>
                    <Link to='/all-posts'><button className='bg-blue-600 text-white'>See All</button></Link>
                </div>
                
            </div>
        </div>
        ):(
            <div className='bg-white h-full w-auto'>
            <div className='flex flex-col justify-center items-center h-full p-4'>
                <h1 className='text-4xl font-bold text-gray-800 m-2'>Welcome to my Blog App</h1>
                <p className='text-2xl font-thin text-gray-800 m-2'>Start your Blog Journey</p>
            </div>
            <div className='w-full h-96 flex flex-col justify-center  items-center'>
                <img src="src\components\Icons\folder.png" alt="Empty" className='size-20' />
                <h2>No Posts</h2>
                <p>Posts that you create will show up here</p>
            </div>
        </div>
        )):(<div className='bg-white h-screen'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h1 className='text-4xl font-bold text-gray-800 m-2'>Welcome to my Blog App</h1>
                <p className='text-2xl font-thin text-gray-800 m-2'>Start your Blog Journey</p>
                <div className='flex m-5'>
                    <Link to='/signup'>
                        <button className='bg-red-600 text-white m-2'>Signup</button>
                    </Link>
                    <Link to='/login'>
                        <button className='bg-red-600 text-white m-2'>Login</button>
                    </Link>
                </div>
                
            </div>
        </div>)
    )
}

export default Home
