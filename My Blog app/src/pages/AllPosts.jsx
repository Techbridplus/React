import React,{useState,useEffect} from 'react'
import PostCard from '../components/PostCard'
import BlogService from '../appwrite/BlogAppFunctionalitys'

function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await BlogService.getPosts([]);
                if (response) {
                    setPosts(response.documents);
                }
            } catch (error) {
                console.error("Appwrite service :: getPosts :: error", error);
            }
        }

        fetchPosts();
    }, []);
    return (
        posts.length>0?(<div className='w-full '>

            <div className='flex flex-wrap justify-start gap-24 p-4 '>
                
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>

        </div>):(
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
        )
    )
}

export default AllPosts
