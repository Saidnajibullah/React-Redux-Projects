import { useEffect, useState } from "react"
const Route = ({path, children}) => {
    console.log('once!')
    //the whole purpose of this state is to rerender this component whenever 
    //pathname changes, as happens when we click an item in the menu.
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(()=>{
        const navigateTo = () =>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('navigation-event', navigateTo);
        //window.addEventListener('popstate', navigateTo);
        return ()=> window.removeEventListener('navigation-event', navigateTo)
    }, [])
    return currentPath === path ? children : null;
}
export default Route;