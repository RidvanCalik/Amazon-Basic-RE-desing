import axios from "axios";
import "../../styles/CategoryCard.css";
function CategoryCard({ category }) {


    async function getCategoryImg(ctgr) {
        return axios.get("https://fakestoreapi.com/products/category/" + ctgr).then((products) => {
            return products.data[0].image;
        })
    }
    if (category != "stok") {
        return (
            <div className="categoryCard">
                <h2>{category}</h2>
                <img src={getCategoryImg(category)}></img>
                <a>Shop now</a>
            </div>
        )
    } else {
        return (
            <div className="categoryCard">
                <h2>kategorileri İncele</h2>
                <div id="categoryPrivateGrid">
                    <a><img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"></img>Mücevherler</a>
                    <a><img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"></img>Mücevherler</a>
                    <a><img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>Mücevherler</a>
                    <a><img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"></img>Mücevherler</a>
                </div>
                <a href=""><img src=""></img></a>
                <a>İncele</a>
            </div >
        )
    }
}
export default CategoryCard;