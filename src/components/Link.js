import './Header.css'
const Link = ({path, className, children})=>{
    const handleClick = event =>{
        //to allow ctrl + click/command + click open a new tab.
        if(event.metaKey || event.ctrlKey) return
        event.preventDefault();
        window.history.pushState({}, '', path);
        const naveEvent = new PopStateEvent('navigation-event');
        window.dispatchEvent(naveEvent);
    }
    return <a onClick={handleClick} href={path} className={className}>{children}</a>
}
export default Link;