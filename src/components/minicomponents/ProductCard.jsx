import "../../styles/ProductCard.css";
function ProductCard({ data }) {
    return (
        <div className="ProductCard">
            <img src={data.image}></img>
            <h3>{data.title}</h3>
            <div>
                <h2>$ {data.price}</h2>
                <button>Add to Basket</button>
            </div>
        </div>
    );
}
export default ProductCard;


