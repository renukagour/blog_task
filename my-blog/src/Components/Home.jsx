// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Home = () => {
    const posts = useSelector(state => state.posts);
    console.log(posts);
  return (
    <div className='container'>
        <h2>CRUD App with JSON Server</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
{posts.map((post,index)=>{
    return(
        <tr key={index}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.author}</td>
            <td>
                <button className='btn btn-sm btn-primary'>Edit</button>
                <button className='btn btn-sm btn-danger ms-2'>Delete</button>
            </td>
        </tr>
    )  
})}
            </tbody>
        </table>
    </div>
  )
}

export default Home