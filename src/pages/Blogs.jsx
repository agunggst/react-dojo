import { useState } from 'react';
import BlogList from '../components/BlogList';

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const onDeleteBlog = (blogId) => {
    setBlogs(blogs.filter(blog => blog.id !== blogId))
  }

  return ( 
    <div className="blogs">
      <h3 className='page-title'>Blogs</h3>
      <div className="blogs-container">
        <BlogList blogs={blogs} onDeleteBlog={onDeleteBlog}/>
      </div>
    </div>
  );
}
 
export default Blogs;