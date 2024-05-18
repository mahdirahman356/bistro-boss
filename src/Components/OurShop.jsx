import Cover from "../Cover/Cover";
import useMenu from "../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import img from "../assets/shop/banner2.jpg"
import { Tabs } from "flowbite-react";


const OurShop = () => {
    let [menu] = useMenu()

    let drinks = menu.filter(manu => manu.category === "drinks")
    let pizza = menu.filter(manu => manu.category === "pizza")
    let salad = menu.filter(manu => manu.category === "salad")
    let soup = menu.filter(manu => manu.category === "soup")
    let dessert = menu.filter(manu => manu.category === "dessert")

    return (
        <div>
            <Cover
                img={img}
                header="OUR SHOP"
                subHeader="WOULD YOU LIKE TO TRY A DISH"
            ></Cover>

            {/* TABS */}
            <div className="w-[95%] md:w-[75%] mx-auto my-20">
                <Tabs className="mx-auto" aria-label="Tabs with underline" style="underline">
                    <Tabs.Item title="Salads">
                       <OrderTab active items={salad}></OrderTab>
                    </Tabs.Item>
                    <Tabs.Item title="Desserts">
                    <OrderTab items={dessert}></OrderTab>
                    </Tabs.Item>
                    <Tabs.Item title="Pizza">
                    <OrderTab items={pizza}></OrderTab>
                    </Tabs.Item>
                    <Tabs.Item title="Drinks">
                    <OrderTab items={drinks}></OrderTab>
                    </Tabs.Item>
                    <Tabs.Item title="Soups">
                    <OrderTab items={soup}></OrderTab>
                    </Tabs.Item>
                   
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;