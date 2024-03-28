import { useParams, useLocation } from "react-router-dom";
function User() {
    const params = useParams();
    const { name } = params;
    console.log('name', name);
    const Location = useLocation();
    console.log('Location', Location);
    return (
        <div>
            <h1>{name} Page</h1>
        </div>
    )
}

export default User;