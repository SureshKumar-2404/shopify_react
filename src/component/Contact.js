import { Link, Outlet } from 'react-router-dom';
function Contact() {
    return (
        <div>
            <h1>Contact Us Page</h1>
            <Link to="channel">Channel</Link>
            <br/>   <br/>
            <Link to="company">Company</Link>
            <br/>   <br/>
            <Link to="other">Other</Link>
            <br/>
            <Outlet/>
        </div>
    )
}
export default Contact;