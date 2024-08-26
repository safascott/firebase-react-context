import { signOut,getAuth } from "firebase/auth"
import Topbar from "../Components/Navbar/Topbar";
import SideBarMenu from "../Components/SidebarMenu/SidebarMenu";
export function Profile(){
    const auth = getAuth()
    async function handleSignOut(){
        try{
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }
    return <div>
        <SideBarMenu></SideBarMenu>
        <Topbar></Topbar>
        <h1>This is the Profile page</h1>
        <button onClick={() => {handleSignOut()}}>Sign out</button>
    </div>
}