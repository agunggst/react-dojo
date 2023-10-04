import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const DetailBlog = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
  return ( 
    <div className="detail-blog">
      {isLoading && <p>Loading...</p> }
      {error && <p>{ error }</p> }
      {data && (
        <div className="header">
          <h3 className='page-title'>{ data.title }</h3>
          <p>{ data.body }</p>
        </div>
      )}
    </div>
   )
}
 
export default DetailBlog