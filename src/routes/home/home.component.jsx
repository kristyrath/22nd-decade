import './home.styles.scss';
import Header from '../../components/header/header.component';
import Category from '../../components/category/category.component';
import NavDropdown from '../../components/nav-dropdown/nav-dropdown.component';
import ValuesImage from '../../assets/values-bg.png';
const Home = () => {

    return (
        <div className='home-container'>
            <Header/>

            <Category/>
  
            <div className='values-description-container' style={{
                backgroundImage: `url(${ValuesImage})`
            }} >
                <h2>Our Values</h2>
                <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                <NavDropdown/>

            </div>



        </div>
    )
}


export default Home;