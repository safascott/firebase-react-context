import { getAuth } from "firebase/auth"
import Topbar from "../Components/Navbar/Topbar";
import SideBarMenu from "../Components/SidebarMenu/SidebarMenu";
import Visitors from "../Components/Visitors";
export function Target(){
    const auth = getAuth()
    const user = auth.currentUser;
    return <div>
        <SideBarMenu></SideBarMenu>
        <Topbar></Topbar>
        <Visitors></Visitors>
    </div>
}