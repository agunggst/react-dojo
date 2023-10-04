import BlogList from '../components/BlogList';
import useFetch from '../hooks/useFetch';

const Blogs = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

  const onDeleteBlog = (blogId) => {
    fetch(`http://localhost:8000/blogs/${blogId}`, { method: 'DELETE' })
  }

  return ( 
    <div className="blogs">
      <h3 className='page-title'>Blogs</h3>
      <div className="blogs-container">
        {isLoading && <p>Loading...</p> }
        {error && <p>Loading...</p> }
        {blogs && <BlogList blogs={blogs} onDeleteBlog={onDeleteBlog}/>}
      </div>
    </div>
  )
}
 
export default Blogs