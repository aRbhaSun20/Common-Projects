const socket = io("localhost:4000");
let products = document.getElementById('products');

socket.on("eCommerce", (datas) => {
    datas.map((data) => {

        let indiPro = document.createElement('div');
        indiPro.className = "indi-products";

        let namePro = document.createElement("div");
        namePro.className = "name";
        namePro.innerHTML = data.proName;

        let detailsPro = document.createElement("div");
        detailsPro.className = "details";
        detailsPro.innerHTML = data.proDetail;

        let pricePro = document.createElement("div");
        pricePro.className = "price";
        pricePro.innerHTML = data.proPrice;

        indiPro.appendChild(namePro);
        indiPro.appendChild(detailsPro);
        indiPro.appendChild(pricePro);

        products.appendChild(indiPro);
    });
});