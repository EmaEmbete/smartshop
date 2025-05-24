import {useLocation} from "react-router-dom";
import Navbar from "./navbar";
import Footers from "./footer";

const Layout = ({children}) =>{
    const location = useLocation();
    const cacher = ["/logs","/clients"];

    return (
        <>
        {!cacher.includes(location.pathname)&&<Navbar/>}
        <main> {children} </main>
        {!cacher.includes(location.pathname)&&<Footers/>}
        </>
    );
}

export default Layout;