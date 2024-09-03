import Topbar from "../Components/Navbar/Topbar";
import SideBarMenu from "../Components/SidebarMenu/SidebarMenu";
export function Home(){
    return <div>
        <SideBarMenu></SideBarMenu>
        <Topbar></Topbar>
        <h1>Dashboard</h1>
    </div>
}