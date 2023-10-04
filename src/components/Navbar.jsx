import ButtonLink from "./atoms/ButtonLink";
import { Link } from "react-router-dom"

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="left">
        <h2>React Blog</h2>
      </div>
      <div className="right">
        <Link to="/">
          <ButtonLink buttonText="Blogs" />
        </Link>
        <Link to="/create">
          <ButtonLink buttonText="New Blog" />
        </Link>
      </div>
    </div>
  )
}
 
export default Navbar;