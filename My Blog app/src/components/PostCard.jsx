import { Link,useParams } from 'react-router-dom';
import { useState } from 'react';
import { VerticalDots } from './index';
import Blogservice from '../appwrite/BlogAppFunctionalitys';


function PostCard({ Title,image,$id }) {
  const { postID } = useParams();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleEdit = () => {
    // Handle edit action
    console.log('Edit clicked');
  };

  const handleDelete = () => {
    // Handle delete action
    console.log('Delete clicked');
  };

  return (
    <div className="card glass w-96 bg-gray-200 rounded-xl border-2 border-blue-600 shadow-xl shadow-blue-400 relative">
      <figure className="relative h-96">
        <img
          className="rounded-t-xl aspect-auto w-full h-full object-cover"
          src={image?Blogservice.getFilePreview(image):""}
          alt="loding..."
        />
        <div className="absolute top-2 right-2 ">
          <button onClick={toggleDropdown} className="focus:outline-none  border-none bg-transparent">
            <VerticalDots />
          </button>
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <button
                onClick={handleEdit}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </figure>
      <div className="card-body flex flex-col justify-start p-4">
        <h2 className="card-title font-semibold text-gray-700">
          <span className="text-black">Title:</span> {Title}
        </h2>
        {/* <p className="text-gray-700">How to park your car at your garage?</p> */}
        <Link to={`/post/${$id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-red-600 text-white hover:bg-blue-600">
              Open
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;