/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateblog } from '../PostsReducer';

const UpdateBlog = () => {
    const {id}=useParams();
    const posts = useSelector(state => state.posts);
    const post = posts.filter(p => p.id === parseInt(id));
    const {title,content,author}=post[0];
    const [updateTitle,setTitle]=useState(title);
    const [updateContent,setContent]=useState(content);
    const [updateAuthor, setAuthor]=useState(author);
  const dispatch=useDispatch();
 const navigate=useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
       dispatch(updateblog({
        id:parseInt(id),
        title:updateTitle,
        content:updateContent,
        author:updateAuthor,
       }))
       alert('updated successfully');
       navigate('/')
    }

  return (
    <div className='d-flex w-100 justify-content-center align-item-center'>
    <div className='w-50 border bg-secondary text-white p-5'  >
        <h3>Update Blog</h3>
        <form onSubmit={handleUpdate}>
          
            <div>
                <label htmlFor="title"> Title: </label>
                <input type="text" name="title" className='form-control'  placeholder='Enter Title'
               value={updateTitle} onChange={e=>setTitle(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="content"> Content: </label>
                <textarea  name="content" className='form-control'  placeholder='Enter Content here...' 
                  value={updateContent}  onChange={e=>setContent(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="author"> Author: </label>
                <input type="text" name="author" className='form-control' placeholder='Enter Author Name' 
                 value={updateAuthor}  onChange={e=>setAuthor(e.target.value)} required/>
            </div>
            <br/>
            <button className='btn btn-info'>Update Blog</button>
        </form>
    </div>
    </div>
  )
}

export default UpdateBlog