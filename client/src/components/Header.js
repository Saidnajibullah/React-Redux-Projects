import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = ()=>{
    /*
    we could instead use the anchor tag a instead of Link tag, but the behavior would have been
    totally different: anchor tag always forces the page to reload.
    */
    return(
        <div className="ui secondary pointing menu">
            <div className="right menu"><GoogleAuth /></div>
        </div>
    )
}
export default Header;