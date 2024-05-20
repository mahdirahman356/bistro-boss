import Cover from "../Cover/Cover";
import useMenu from "../Hooks/useMenu";
import ItemsSectionTitle from "../ItemsSectionTitle/ItemsSectionTitle";
import OrderMenu from "../OrderMenu/OrderMenu";
import SectionTitle from "../SectionTitle/SectionTitle";
import img from "../assets/menu/banner3.jpg"
const Menu = () => {
    let [menu] = useMenu()

    let offered = menu.filter(manu => manu.category === "offered")
    let pizza = menu.filter(manu => manu.category === "pizza")
    let salad = menu.filter(manu => manu.category === "salad")
    let soup = menu.filter(manu => manu.category === "soup")
    let dessert = menu.filter(manu => manu.category === "dessert")
    return (
        <div>
            <Cover
                img={img}
                header="OUR MENU"
                subHeader="WOULD YOU LIKE TO TRY A DISH"
            ></Cover>

            {/* TODAY'S OFFER SECTION */}
            <section className="my-20">
                <SectionTitle
                    header="TODAY'S OFFER"
                    subHeader="---Don't miss---"
                ></SectionTitle>
                <OrderMenu item={offered} itemName="offered"></OrderMenu>
            </section>

            {/* PIZZA SECTION */}
            <section className="my-20">
                <ItemsSectionTitle
                    header="PIZZA"
                    description="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></ItemsSectionTitle>
                <OrderMenu item={pizza} itemName="pizza"></OrderMenu>
            </section>

            {/* SALADS SECTION */}
            <section className="my-20">
                <ItemsSectionTitle
                    header="SALADS"
                    description="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></ItemsSectionTitle>
                <OrderMenu item={salad} itemName="salad"></OrderMenu>
            </section>

            {/* SOUPS SECTION */}
            <section className="my-20">
                <ItemsSectionTitle
                    header="SOUPS"
                    description="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></ItemsSectionTitle>
                <OrderMenu item={soup} itemName="soup"></OrderMenu>
            </section>

            {/* DESSERTS SECTION */}
            <section className="my-20">
                <ItemsSectionTitle
                    header="DESSERTS"
                    description="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                ></ItemsSectionTitle>
                <OrderMenu item={dessert} itemName="dessert"></OrderMenu>
            </section>


        </div>
    );
};

export default Menu;