import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const mediacalDevice = menu.filter(item => item.category === 'Medical Device');
    const personal_care = menu.filter(item => item.category === 'Personal Care');
    const vitamins = menu.filter(item => item.category === 'Vitamins & Supplements');
    const otcMedicine = menu.filter(item => item.category === 'OTC-Medicines');
    const OTC = menu.filter(item => item.category === 'OTC');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Cover img={menuImg} title="Our Products"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={OTC}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={mediacalDevice} title="Medical Device" img={dessertImg}></MenuCategory>
            <MenuCategory items={otcMedicine} title={"OTC-Medicines"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={vitamins} title={"Vitamins & Supplements"} img={saladImg}></MenuCategory>
            <MenuCategory items={personal_care} title={"Personal Care"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;