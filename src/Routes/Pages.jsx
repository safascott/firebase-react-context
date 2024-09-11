import Topbar from "../Components/Navbar/Topbar";
import SideBarMenu from "../Components/SidebarMenu/SidebarMenu";
export function Pages(){

    return <div className='pages-table'>
        <SideBarMenu></SideBarMenu>
        <Topbar></Topbar>
        <div className="pages-create-personalization"></div>
        <iframe className="pages-frame" src="https://cresta.com/" title='A youtube video on React hooks'></iframe>
        
        
    </div>
}