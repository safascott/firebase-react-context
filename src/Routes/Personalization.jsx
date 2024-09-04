import { getAuth } from "firebase/auth"
import Topbar from "../Components/Navbar/Topbar";
import SideBarMenu from "../Components/SidebarMenu/SidebarMenu";
import PersonalizationData from "../Components/PersonalizationData";
export function Personalization(){
    const auth = getAuth()
    const user = auth.currentUser;
    return <div>
        <SideBarMenu></SideBarMenu>
        <Topbar></Topbar>
        <PersonalizationData></PersonalizationData>
    </div>
}