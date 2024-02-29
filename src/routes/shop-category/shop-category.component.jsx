import './shop-category.styles.scss';
import CategoryItem from '../../components/category-item/category-item.component';
import { useSelector } from 'react-redux';
import { selectCategories, selectIsLoading } from '../../store/categories/category.selector';
import GreenBackground from '../../assets/green-bg.png';
const ShopCategory = (props) => {
    const {categoryTitle} = props;
    const categoryMap = useSelector(selectCategories);
    const isLoading = useSelector(selectIsLoading);
    
    return (
    <div className='shop-category-container'>
        <h2>{categoryTitle[0].toUpperCase() + categoryTitle.substring(1)}</h2>
        <div className='shop-category-items-container'>
            {   isLoading ? <></> :
                categoryMap[categoryTitle]?.map((item) => {
                        const {id} = item;
                        return (
                            <div className='shop-category-item-container'>
                                <CategoryItem key={id} item = {item}/>
                            </div>
                        )
                    })
            }
        </div>
    </div>
);
}


export default ShopCategory;

