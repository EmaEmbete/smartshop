import {useLocation} from "react-router-dom"
import NavBar from "./navbar";
import Footers from  "./footer";
import { NavLink } from "react-router-dom";

const  Layout = ({children}) => {
    const location = useLocation();

    // Lise des pages sans Nav bar ni footer

    const hideLayoutpaths = ["/users","/logins"];

    return(
        <div>
            <p>Page Introuvable <NavLink to="/logs"> Se Connecter </NavLink></p> 
        </div>
    );

}
export default Layout;
