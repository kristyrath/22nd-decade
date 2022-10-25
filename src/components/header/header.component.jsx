import './header.styles.scss';
import headerImage from '../../assets/header-img.png';
const Header = () => {
    return (
        <div className='header-container' style={{
            backgroundImage: `url(${headerImage})`
        }}>
            <div className='header-text'>
                <h1>22nd Decade</h1>
                <span className='subtext italicized'>A MINIMALIST BOUTIQUE</span>
            </div>
        </div>
    )
}

export default Header;