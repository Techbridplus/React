import React,{useEffect} from 'react';
import { useForm} from 'react-hook-form';
import {Input,Button,RTE} from './index'
import Blogservice from '../appwrite/BlogAppFunctionalitys';
import { useNavigate } from "react-router-dom";

function PostForm({post}) {
  const navigate = useNavigate();
  const { control, handleSubmit, register,getValues,setValue} = useForm({
    defaultValues: {
        Title: post?.Title || "",
        slug: post?.$id || "",
        Content: post?.Content || "",
    },
});
    // useEffect(() => {
    //   if (post) {
    //       setValue("Content", post.Content);
    //   }
    // }, [post, setValue,getValues]);

  const onSubmit = async (data)=>{
    console.log("Data",data)
    if (post) {
      console.log("Post",post)
      const file = data.image[0] ? await Blogservice.uploadFile(data.image[0]) : null;
      console.log("file : ",file);
      if (file) {
       
        Blogservice.deleteFile(post.image);
      }

      const dbPost = await Blogservice.updatePost({Title: data.Title,image: file? file.$id:post.image, Content: data.Content, slug: post.$id});
      console.log("Post updated",dbPost)
      if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
      }
  } else {
    try {
        const file = await Blogservice.uploadFile(data.image[0]);
        console.log("file : ",file);
        if(file){
            data.image = file.$id;
            const dbPost = await Blogservice.createPost(data);
            console.log("Post created",dbPost)
            if (dbPost) {
              navigate(`/post/${dbPost.$id}`);
          }
        }
    }catch(error){
        console.log("Error while uploading file",error)
    }
  }

    
    // try{
    //   const result = await Blogservice.createPost(data)
    //   console.log("Post created",result)
    // }catch(error){
    //   console.log("Error while creating post",error)
    // }
  }
  const slugTransform = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className='w-full h-full flex flex-col '
    >
      <div className=' w-full h-full flex justify-between  '>

        <div>
          <Input
          label='Title'
          type='text'
          {...register("Title", { required: true })}
          placeholder={'The Moon'}
          className='font-semibold text-lg'
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
        }
        }
          />
        </div>
        <div>
          <Input
          label='Select Thumbnail'
          type='file'
          {...register("image", { required: false })}
          accept="image/png, image/jpg, image/jpeg, image/gif"
          className='font-serif text-green-600'
          />
        </div>
        {post&&<div className='w-40 h-40'>
            <img src={Blogservice.getFilePreview(post.image)} alt="Image" className='aspect-auto '/>
        </div>}
        
        <div className='flex justify-center items-center mr-20 mt-4'>
          <Button
          name={post?"save changes":'Upload'}
          type='submit'
          upload={post?false:true}
        
          />
        </div>
      </div>
      <div className='w-full'>
        <RTE name="Content"  control={control} defaultValue={getValues("Content")} />
      </div>
      
      
    </form>
  );
}

export default PostForm;