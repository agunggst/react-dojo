import ButtonLink from "./atoms/ButtonLink";

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="left">
        <h2>React Blog</h2>
      </div>
      <div className="right">
        <ButtonLink buttonText="Blogs" />
        <ButtonLink buttonText="New Blog" />
      </div>
    </div>
  )
}
 
export default Navbar;