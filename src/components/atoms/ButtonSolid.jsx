const ButtonSolid = ({ buttonText, onButtonClick, id }) => {
  return ( 
    <button className="button button-solid" onClick={() => onButtonClick(id)}>
      { buttonText }
    </button>
  );
}
 
export default ButtonSolid;