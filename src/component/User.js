import { useParams } from "react-router-dom";
function User() {
    const params = useParams();
    const { name } = params;
    console.log('name', name);
    return (
        <div>
            <h1>{name} Page</h1>
        </div>
    )
}

export default User;