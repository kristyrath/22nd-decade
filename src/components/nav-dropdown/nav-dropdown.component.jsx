import './nav-dropdown.styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const NavDropdown = (props) => { 

    const list = props.list || [];
    const callback = props.callback;
    return (
        <div className='nav-dropdown-container'>
            {list.map((item) => {
                const path = item.path;
                return (<Link className='subdir-link' to = {path} key={item.key}>{item.option}</Link>)
            })}
        </div>
    )
}

export default NavDropdown;