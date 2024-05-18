import { Link } from "react-router-dom";
import useMenu from "../Hooks/useMenu";
import Items from "../Items/Items";
import SectionTitle from "../SectionTitle/SectionTitle";

const PopularMenu = () => {
    let [menu] = useMenu()

    let popular = menu.filter(manu => manu.category === "popular")

    return (
        <div>
            <SectionTitle
            header="FROM OUR MENU"
            subHeader="---Our Populer Items---"
            ></SectionTitle>
            <div className="w-[95%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                popular.map((popular, index) => <Items key={index} popular={popular}></Items>)
            }
            </div>
            <div className="flex justify-center items-center mt-5">
                <Link to="/shop"><button className="uppercase btn btn-outline text-black border-x-0 border-t-0 border-black border-b-2 mt-6 rounded-lg">View Full  Menu</button></Link>
               </div>
        </div>
    );
};

export default PopularMenu;