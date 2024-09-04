import "./SidebarMenu.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom'
function SideBarMenu(){
    return (
        <div className="sidebarMenu">
            <div className="row">
                <div className="bg-dark col-auto min-vh-100">
                <div className="sideBarMenu-spacer-top"></div>
                    <ul className="sideBarMenu-list">                      
                        <li className="nav-item text-white fs-4">
                            <Link to="/home" className="nav-link text-white fs-5" aria-current="page">
                                <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id="tooltip1">Dashboard</Tooltip>}>
                                <i className='bi bi-speedometer2'></i>
                                </OverlayTrigger>
                            </Link>
                        </li>
                        <li className="nav-item text-white fs-4">
                            <Link to="/target" className="nav-link text-white fs-5" aria-current="page">
                                <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id="tooltip1">Target Accounts</Tooltip>}>
                                <i className='bi bi-broadcast'></i>
                                </OverlayTrigger>
                            </Link>
                        </li>
                        <li className="nav-item text-white fs-4">
                            <Link to="/personalization" className="nav-link text-white fs-5" aria-current="page">
                                <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id="tooltip1">Personalization</Tooltip>}>
                                <i className='bi bi-calendar2'></i>
                                </OverlayTrigger>
                            </Link>
                        </li>
                        <li className="nav-item text-white fs-4">
                            <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id="tooltip1">Analytics</Tooltip>}>
                                <i className='bi bi-activity'></i>
                                </OverlayTrigger>
                            </a>
                        </li>
                    </ul>
                    <div style={{position:"absolute", bottom:10, width:'100%', left:5}}>
                            <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id="tooltip1">Company Settings</Tooltip>}>
                                <i className='bi bi-gear'></i>
                                </OverlayTrigger>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarMenu