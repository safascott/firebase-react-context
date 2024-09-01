import { getAuth } from "firebase/auth"
import Topbar from "../Components/Navbar/Topbar";
import SideBarMenu from "../Components/SidebarMenu/SidebarMenu";
export function Target(){
    const auth = getAuth()
    const user = auth.currentUser;
    return <div>
        <SideBarMenu></SideBarMenu>
        <Topbar></Topbar>
        <h1>This is the Target page{console.log(user)}</h1>
    </div>
}