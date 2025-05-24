import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    const location = useLocation();
    if (!token) {
        return <Navigate to="/logs" replace state={{from:location}} />;
    }
    return children;
}
export default ProtectedRoute;