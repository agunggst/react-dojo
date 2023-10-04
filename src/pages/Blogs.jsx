import { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';

const Blogs = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/blogs', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      setBlogs(data)
    })
  }, [])

  const onDeleteBlog = (blogId) => {
    setBlogs(blogs.filter(blog => blog.id !== blogId))
  }

  return ( 
    <div className="blogs">
      <h3 className='page-title'>Blogs</h3>
      <div className="blogs-container">
        {blogs && <BlogList blogs={blogs} onDeleteBlog={onDeleteBlog}/>}
      </div>
    </div>
  );
}
 
export default Blogs;