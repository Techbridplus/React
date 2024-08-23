import React,{useEffect,useState} from 'react'
import { Logo,Button} from '../components/index'
import { Link, useNavigate, useParams } from "react-router-dom";
import Blogservice from '../appwrite/BlogAppFunctionalitys';
import parse from 'html-react-parser';
function Post() {
    const { postID } = useParams();
    const [bgImage, setBgImage] = useState(null);
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        setBgImage("url('https://github.com/Techbridplus/recources/blob/main/pexels-pixabay-276514.jpg?raw=true')");
        Blogservice.getPost(postID).then((post) => {
            if (post) {
                setPost(post);
            }

        }).catch((error) => {
            console.log("Error while getting post",error)
            });
    }, [postID])
    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className=''>
        <div
        className=' w-full flex flex-col justify-center items-center'
        > 
        <div className='flex w-full relative'>
            <div className='w-2/6 flex flex-col justify-start items-center p-8'>
                <div className='w-full h-20 bg-white flex justify-center items-center border-2 border-blue-600 '>
                    <h1 className='text-xl font-bold'>Thumbnail</h1>
                </div>
                <div className='bg-white border-2 border-blue-600 rounded-b-xl   '>
                    <div >
                        <img src={Blogservice.getFilePreview(post.image)} alt={post.Title} className='aspect-auto' />
                    </div>
                    <div className=' flex justify-center items-center'>
                         <h1 className='text-xl font-semibold text-gray-500'>{post.Title}</h1>
                    </div>
                   
                </div>
            </div>
            <div className='w-3/6 flex flex-col justify-center items-center'>
                <div className='bg-white border-2 border-blue-600 rounded-xl h-20 w-3/4 mt-20 flex justify-center items-center'>
                    <Logo/>
                </div>
                <div className='bg-white border-2 border-blue-600 rounded-lg w-full min-h-lvh m-10'>
                    <div className='w-full  p-5 border-b-2 border-black'>
                        <h1 className="text-2xl font-bold">{post.Title}</h1>
                    </div>
                    <div className='w-full p-5'>
                        <p className='text-lg'>{parse(post.Content)}</p>
                    </div>
                </div>
            </div>
            <div className='flex  w-1/4 justify-center items-start p-10'>
                <Link to={`/edit-post/${postID}`}>
                    <Button name='Edit' edit={true} className='mr-2' hover={'hover:bg-green-600'}/>
                </Link>
                
                <Button name='Delete' deleteButton={true} className='ml-2'hover={'hover:bg-red-600'}
                onClick={() => {
                    console.log("Delete post")
                    Blogservice.deletePost(postID).then((status) => {
                        if (status) {
                            console.log("status",status)
                            Blogservice.deleteFile(post.image);
                            navigate("/");
                        }else{
                            console.log("Error while deleting post")
                        }
                    }).catch((error) => {
                        console.log("Error while deleting post",error)
                    }
                    );
                }
                }
                />
            </div>
        </div>
            
            
        </div>
       
        </div>
        
    )
}

export default Post
