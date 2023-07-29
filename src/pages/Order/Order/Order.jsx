import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['Vitamins & Supplements', 'OTC-Medicines', 'Personal Care', 'Medical Device', 'Dental Care'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const medicalDevice = menu.filter(item => item.category === 'Medical Device');
    const personal_care = menu.filter(item => item.category === 'Personal Care');
    const vitamins = menu.filter(item => item.category === 'Vitamins & Supplements');
    const OTC_Medicine = menu.filter(item => item.category === 'OTC-Medicines');
    const detalCare = menu.filter(item => item.category === 'Dental Care');

    return (
        <div>
            <Helmet>
                <title>MediBay | Order</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Medicine" subTitle="Our medical e-commerce website offers a wide range of products to cater to healthcare needs."></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Vitamins & Supplements</Tab>
                    <Tab>OTC-Medicine</Tab>
                    <Tab>Personal Care</Tab>
                    <Tab>Medical Device</Tab>
                    <Tab>Dental Care</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={vitamins}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={OTC_Medicine}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={personal_care}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={medicalDevice}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={detalCare}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;