import React from "react";
import Product from "../../Components/Product/Product";

export default function Mainpage() {
    return (
        <div className="home__container">
            <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9abd25855843b1e5dbe7cd8ea525c97a5b81ed3e_1677040633.gif?x-oss-process=image" alt="" />
            <div className="home__row flex">
                <Product

                    title={"WOOSEA Women Sleeveless V Neck Split Evening Cocktail Long Dress"}
                    image={"https://m.media-amazon.com/images/I/61iTIlfCryL._AC_UY741_.jpg"}
                    price={58.99}
                    rating={3}
                />
                <Product

                    title={"Popilush Shaper Dress Bodycon Maxi/Mini Built in Shapewear Bra 8 in 1 Women Lounge Long/Short Slip Dresses"}
                    image={"https://m.media-amazon.com/images/I/618lDcI8cdL._AC_UY550_.jpg"}
                    price={76.49}
                    rating={4}
                />

            </div>
            <div className="home__row flex">
                <Product

                    title={"Cosonsen Women's Dress Deep V-Neck Long Sleeve Waist Tie Ruffle Mini Swing Skater Dresses"}
                    image={"https://m.media-amazon.com/images/I/51YGdPjQZCL._AC_UX466_.jpg"}
                    price={39.99}
                    rating={5}
                />
                <Product

                    title={"WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress"}
                    image={"https://m.media-amazon.com/images/I/61+PeVsOHbL._AC_SY550._SX._UX._SY._UY_.jpg"}
                    price={58.99}
                    rating={3}
                />
                <Product

                    title={"YMDUCH Women's Elegant Sleeveless Off Shoulder Bodycon Long Formal Party Evening Dress"}
                    image={"https://m.media-amazon.com/images/I/41+cejvaj5L._AC_SY550._SX._UX._SY._UY_.jpg"}
                    price={49.99}
                    rating={4}
                />

            </div>
            <div className="home__row flex">
                <Product

                    title={"CHICCLOTH Women's Evening Formal Dresses Split V-Neck Sleeveless Cocktail Party Long Dress"}
                    image={"https://m.media-amazon.com/images/I/51A06I3SuaL._AC_UY550_.jpg"}
                    price={79.99}
                    rating={5}
                />
                <Product

                    title={"ABYOXI One Shoulder Formal Dresses for Women Maxi Cocktail Dresses Evening Party High Split Long Mermaid Bodycon"}
                    image={"https://m.media-amazon.com/images/I/51PMHNOlhUL._AC_UY550_.jpg"}
                    price={39.99}
                    rating={3}
                />


            </div>
        </div>
    )
}
