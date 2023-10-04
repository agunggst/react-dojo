import ButtonSolid from "./atoms/ButtonSolid"
import { Link } from "react-router-dom"

const BlogList = ({ blogs, onDeleteBlog }) => {
  return ( 
    <div className="blog-list">
      {
        blogs.map((blog, index) => (
          <Link to={`/blog/${blog.id}`} key={index}>
            <div className="blog">
              <div className="left">
                <h5>{ blog.title }</h5>
                <p>{ blog.body }</p>
                <p style={{ color: '#C1D8C3', fontSize: 12 }}>by { blog.author }</p>
              </div>
              <ButtonSolid 
                id={blog.id}
                buttonText={<span className="material-icons mui-icon-custom">delete</span>} 
                onButtonClick={onDeleteBlog}
              />
            </div>
          </Link>
        ))
      }
    </div>
  );
}
 
export default BlogList;