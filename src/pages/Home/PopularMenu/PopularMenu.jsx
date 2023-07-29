import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "OTC");

  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Shop"
        subHeading="Best Selling Products"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to="/menu">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View More
        </button>
      </Link>
    </section>
  );
};

export default PopularMenu;
