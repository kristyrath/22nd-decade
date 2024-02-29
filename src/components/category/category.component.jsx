
import { Link } from 'react-router-dom';
import './category.styles.scss';
import HomeImage from '../../assets/home-img.png';

const Category = () => {
    return (
        <div className='categories-container'>
            <h3>Shop by Category</h3>
            <div className='category-container'>
                <Link className='category-link' to = '/tops'>Tops</Link>
                <div className='line'></div>
                <Link className='category-link' to = '/bottoms'>Bottoms</Link>
                <div className='line'></div>
                <Link className='category-link' to = '/accessories'>Accessories</Link>
                <div className='line'></div>
                <Link className='category-link' to = '/dresses'>Dresses</Link>

            </div>

        

        </div>
    )
}


export default Category;