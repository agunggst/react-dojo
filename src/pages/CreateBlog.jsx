import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  const navigate = useNavigate()

  const onCreateSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/blogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, author })
    })
    .then(() => {
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (  
    <div className="create-blog">
      <h3 className='page-title'>Create New Blogs</h3>
      <form className="create-form" onSubmit={e => onCreateSubmit(e)}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '550px' }}>
          <label>Blog title:</label>
          <input 
            type="text" 
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '550px' }}>
          <label>Blog body:</label>
          <textarea
            rows={6}
            required
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '550px' }}>
          <label>Blog author:</label>
          <input 
            type="text" 
            required
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  )
}
 
export default CreateBlog