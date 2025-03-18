// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ProtectedRoute = ({children}) => {
//     const {user} = useSelector(store=>store.auth);

//     const navigate = useNavigate();

//     useEffect(()=>{
//         if(user === null || user.role !== 'recruiter'){
//             navigate("/");
//         }
//     },[]);

//     return (
//         <>
//         {children}
//         </>
//     )
// };
// export default ProtectedRoute;

//chatgpt code below

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null || user.role !== 'recruiter') {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6 lg:p-8">
                {children}
            </div>
        </div>
    );
};

export default ProtectedRoute;
