import "./Topbar.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {Link} from "react-router-dom"
import logo from '../../assets/logo.png';
export default function Topbar(){
    return <nav className="nav">
        <div className='site-title'>
            <span><img src={logo} style={{marginLeft:'2px', marginRight:'9px', width:'32px', height:'32px' }}/></span><span>SITESCALER AI</span>
        </div>
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