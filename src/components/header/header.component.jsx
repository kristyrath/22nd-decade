import './header.styles.scss';
import headerImage from '../../assets/header-img.png';
import Button from '../button/button.component';
const Header = () => {
    return (
        // <div className='header-container' style={{
        //     backgroundImage: `url(${headerImage})`
        // }}>
        <div className='header-container'>
            <div className='header-elements-container'>
                <h1>22nd Decade</h1>
                <p>A minimalist's fashion space. Build your capsule closet with us.</p>
                <div className='header-img-container'>
                    <img src={headerImage}></img>
                </div>
                {/* <div className='shop-now-button-container'>
                    Shop Now
                </div> */}
            </div>
        </div>
    )
}

export default Header;