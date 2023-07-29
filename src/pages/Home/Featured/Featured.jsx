import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
import { Link } from "react-router-dom";


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>june 17, 2023</p>
                    <p className="uppercase">Ace 500</p>
                    <p>It is used reducing fever and relieving pain including toothache, headache, migraine, muscle ace, period pain etc.</p>
                    <Link to="/order/OTC-Medicines"><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;