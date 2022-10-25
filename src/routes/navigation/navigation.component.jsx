import { Fragment, useState } from 'react';
import './navigation.styles.scss';
import {Outlet, Link} from 'react-router-dom';
import CartPreview from '../../components/cart-preview/cart-preview.component';
import NavDropdown from '../../components/nav-dropdown/nav-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCurrentUserEmail } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';
import { setCartIsOpenAction } from '../../store/cart/cart.action';
const Navigation = () => {
    const setVisbilityControlToClick = () => {
        (controlVisibilityByClick) ? controlVisibilityByClick = false : controlVisibilityByClick = true;
    }
    const cartPreviewIsHidden = useSelector(selectIsCartOpen);
    let controlVisibilityByClick = false;

    const showCartCallback = (e) => {
        if (!controlVisibilityByClick) {
            ControlVisibility(e, 'showCartPreview');
        }
    }
    const hideCartCallback =  (e) => {
        if (!controlVisibilityByClick) {
            ControlVisibility(e, 'hideCartPreview');
        }
    }
    const dispatch = useDispatch();
    const [accDropdownIsHidden, setAccDropdownIsHidden] = useState(true);
    const [categoriesDropdownIsHidden, setCategoriesDropdownIsHidden] = useState(true);
    const user = useSelector(selectCurrentUserEmail);
    console.log(user);
    const ControlVisibility = (e, action) => {
        switch(action) {
            case 'showCartPreview':
                e.preventDefault();
                dispatch(setCartIsOpenAction(false));
                break;
            case 'hideCartPreview':
                e.preventDefault();
                dispatch(setCartIsOpenAction(true));
                break;
            case 'showAccDropdown':
                e.preventDefault();
                setAccDropdownIsHidden(false);
                break;
            case 'hideAccDropdown':
                e.preventDefault();
                setAccDropdownIsHidden(true);
                break;
            case 'showCategoriesDropdown':
                e.preventDefault();
                setCategoriesDropdownIsHidden(false);
                break;
            case 'hideCategoriesDropdown':
                e.preventDefault();
                setCategoriesDropdownIsHidden(true);
                break;
            default:
                console.log('wrong case');
                break;
    
        }
    }
    const shopCategoriesOptions = [
        {
            key: 0,
            option: 'Tops',
            path: '/tops'
        },
        {
            key: 1,
            option: 'Bottoms',
            path: '/bottoms'
        },
        {
            key: 2,
            option: 'Accessories',
            path: '/accessories'
        },
        {
            key: 3,
            option: 'Dresses',
            path: '/dresses'
        }
    ]
    const getAccountOptions = () => {
        const accountSignInOptions = [
            {
                key: 0,
                option: 'Sign in',
                path: '/signin'
            },
            {
                key: 1,
                option: 'Register',
                path: '/signup'
            }
        ];
        const accountSignOutOptions = [
            {
                key: 3,
                option: 'Sign out',
                path: '/signout',
            }
        ];
        if (user) {
            return accountSignOutOptions;
        }
        return accountSignInOptions;
    }

    return (
        <Fragment>
            <div className = 'navigation'>
 
    
                <div className='nav-links-container'>
                    <div>
                        <Link className='nav-link' to='/'>
                            Home
                        </Link>
                    </div>
                    <div className='shop-categories-options-container'
                        onMouseEnter={(e) => ControlVisibility(e, 'showCategoriesDropdown')}
                        onMouseLeave={(e) => ControlVisibility(e, 'hideCategoriesDropdown')}>
                        <span className='nav-link'>
                            Shop
                        </span>
                        {(categoriesDropdownIsHidden) ? <></> : <NavDropdown className='acc-dropdown' list={shopCategoriesOptions}/>} 
                    </div>
                    <div className='acc-dropdown-container'
                        onMouseEnter={(e) => ControlVisibility(e, 'showAccDropdown')}
                        onMouseLeave={(e) => ControlVisibility(e, 'hideAccDropdown')}>
                        <span className='nav-link'>
                            Account
                        </span>
                        {(accDropdownIsHidden) ? <></> : <NavDropdown className='acc-dropdown' list={getAccountOptions()}/>} 
                    </div>

                    <div className='cart-dropdown-container' 
                        onMouseEnter={showCartCallback}
                        onMouseLeave={hideCartCallback}
                        onClick = {setVisbilityControlToClick}>
                        <span className='nav-link'>
                 
                            Cart
                        </span>

                        { (cartPreviewIsHidden) ?  <></> : <CartPreview className='cart-preview'/>}
                    </div>
                    {/* AUTH LINK */}
                </div>
            </div>
            <Outlet/> 
        </Fragment>

    )
}


export default Navigation;