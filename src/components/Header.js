import Link from './Link';
const Header = () =>{
    return(
        <div className='header-container ui secondary pointing menu'>
            <Link className='item' path='/'>Accordion</Link>
            <Link className='item' path='/wiki'>Search Wiki</Link>
            <Link className='item' path='/dropdown'>Searchable List</Link>
            <Link className='item' path='/translate'>Translate</Link>
        </div>
    )
}
export default Header;