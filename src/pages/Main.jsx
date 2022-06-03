import { useEffect, useState } from "react";
import { getCategoryData } from "../data/data.js";

import "../styles/main.css";

//import ProductCard from "./minicomponents/ProductCard";
import CategoryCard from "../components/minicomponents/CategoryCard.jsx";



function Main() {
    const [category, setCategory] = useState([]);
    //const [products, setProducts] = useState(["asdfa"]);
    useEffect(() => {
        getCategoryData().then((e) => {
            console.log(e);
            //setCategory(e);
        })
    });


    return (
        <div id="main">
            <div id="banner">
                <h2>Ramazon'a hoşgeldiniz</h2>
                <h4>İhtiyacınız ve isteğiniz olan her şey...</h4>
            </div>
            <CategoryCard key={-1} category={"stok"} />
            {
                category.map((el, index) => {
                    return <CategoryCard key={index} category={el} />
                })
            }
        </div>
    );
}
export default Main;