import Topbar from "../Components/Navbar/Topbar";
import SideBarMenu from "../Components/SidebarMenu/SidebarMenu";
export function Home(){
    return <div>
        <SideBarMenu></SideBarMenu>
        <Topbar></Topbar>
        <h3>Dashboard</h3>
    </div>
}