import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.jpg'
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
                <title>MediBay | Our Shop</title>
            </Helmet>
            <Cover img={menuImg} title="Our Products" subTitle="Our medical e-commerce website offers a wide range
             of products designed to cater to healthcare needs, including medications, health and wellness products,
              medical devices and equipment, personal care and hygiene products, vitamin and supplements, 
              and dental care products."></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={OTC}></MenuCategory>
            {/* dessert menu items  */}
            <MenuCategory items={mediacalDevice} title="Medical Device" subTitle="Medical device products are essential for healthcare monitoring, management, and recovery. Our e-commerce website offers a variety of diagnostic devices, monitoring and wearable devices, home healthcare equipment, rehabilitation and therapy devices, assistive devices, and surgical and medical instruments." img={dessertImg}></MenuCategory>
            <MenuCategory items={otcMedicine} title={"OTC-Medicines"} subTitle="Our medical e-commerce website offers a wide range of over-the-counter (OTC) medicine products to cater to the healthcare needs of customers. These include pain relief medications, cold and flu remedies, allergy medications, digestive health products, first aid and wound care products, and sleep aids." img={pizzaImg}></MenuCategory>
            <MenuCategory items={vitamins} title={"Vitamins & Supplements"} subTitle="Our medical e-commerce website offers a wide range of vitamin and supplement products to support customers' health and wellness needs. Consult with healthcare professionals before starting any new supplement regimen." img={saladImg}></MenuCategory>
            <MenuCategory items={personal_care} title={"Personal Care"} subTitle="Our website offers a range of personal care products to help customers maintain good oral health, prevent cavities, freshen breath, and promote healthy gums." img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;