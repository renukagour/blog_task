/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { addblog } from '../PostsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [author, setAuthor]=useState('');
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form submitted', title, content, author);
        dispatch(addblog({id:posts[posts.length-1].id+1,title, content, author}));
        navigate('/');
    }

  return (
    <div className='d-flex w-100 justify-content-center align-item-center'>
        <div className='w-50 border bg-secondary text-white p-5'  >
            <h3>Add New Blog</h3>
            <form onSubmit={handleSubmit}>
              
                <div>
                    <label htmlFor="title"> Title: </label>
                    <input type="text" name="title" className='form-control'  placeholder='Enter Title'
                    onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="content"> Content: </label>
                    <textarea  name="content" className='form-control'  placeholder='Enter Content here...' 
                      onChange={e=>setContent(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="author"> Author: </label>
                    <input type="text" name="author" className='form-control' placeholder='Enter Author Name' 
                      onChange={e=>setAuthor(e.target.value)}/>
                </div>
                <br/>
                <button className='btn btn-info'>Add Posts</button>
            </form>
        </div>
        </div>
  )
}

export default AddBlog