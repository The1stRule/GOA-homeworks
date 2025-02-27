import { Navigate } from "react-router-dom"

const ProtectedRote = ({ curUser, children }) => {
    if(Object.keys(curUser) === 0) {
        return <Navigate to="/authorization" />
    }

    return children;
}

export default ProtectedRote;