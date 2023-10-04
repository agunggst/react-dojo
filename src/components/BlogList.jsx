import ButtonSolid from "./atoms/ButtonSolid";

const BlogList = ({ blogs, onDeleteBlog }) => {
  return ( 
    <div className="blog-list">
      {
        blogs.map((blog, index) => (
          <div className="blog" key={index}>
            <div className="left">
              <h5>{ blog.title }</h5>
              <p>{ blog.body }</p>
              <p style={{ color: '#C1D8C3', fontSize: 12 }}>{ blog.author }</p>
            </div>
            <ButtonSolid 
              id={blog.id}
              buttonText={<span className="material-icons mui-icon-custom">delete</span>} 
              onButtonClick={onDeleteBlog}
            />
          </div>
        ))
      }
    </div>
  );
}
 
export default BlogList;