import "./Topbar.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {Link} from "react-router-dom"
export default function Topbar(){
    return <nav className="nav">
        <div className='site-title'>SITESCALER AI</div>
        <ul>
        <li className="nav-item text-white fs-4">
            <Link to="/profile" className="nav-link text-white fs-5" aria-current="page">
                <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip1">User Profile</Tooltip>}>
                <i className='bi bi-person-circle'></i>
                </OverlayTrigger>
            </Link>
        </li>
        </ul>
    </nav>
}