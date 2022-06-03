import axios from "axios";

async function getData() {
    return axios.get('https://fakestoreapi.com/products?limit=5').then(res => res.json())
        .then(json => { return json; });


}

async function getCategoryData() {
    var catogaries = [];
    var re;
    axios.get('https://fakestoreapi.com/products/categories').then((res) => {
        catogaries.push(...res.data)
    });

    catogaries.forEach((element, index) => {
        axios.get('https://fakestoreapi.com/products/' + element + '?limit=1').then((res) => {
            re = res;
        })
    }).then(() => { return re; });



}
export { getData, getCategoryData };
