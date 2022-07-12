import { ReactComponent as LogoDark } from "../assets/images/logos/imgpsh_fullsize_anim.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark  style={{height:"80px",alignContent:"initial",width:"150px"}}/>
    </Link>
  );
};

export default Logo;
