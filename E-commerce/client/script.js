const socket = io("localhost:4000");
let items = document.getElementById('items');

let registration = {
    fullname: "",
    email: "",
    pass: "",
    phone: "",
    address: "",
    pin: ""
};

let login = {
    user: "",
    pass: ""
};

socket.on("eCommerce", (datas) => {
    datas.map((data) => {

        let indiDiv = document.createElement('div');
        indiDiv.className = "indi-item";

        let img = document.createElement("img");
        img.className = "pic";
        img.src = data.proPath;

        let indiDetails = document.createElement("div");
        indiDetails.className = "indi-details";

        let name = document.createElement("div");
        name.className = "name";
        name.innerHTML = data.proName;

        let details = document.createElement("div");
        details.className = "details";
        details.innerHTML = data.proDetail;

        let price = document.createElement("div");
        price.className = "price";
        price.innerHTML = data.proPrice;

        let addButton = document.createElement("button");
        addButton.innerText = "Add to cart";

        indiDetails.appendChild(name);
        indiDetails.appendChild(details);
        indiDetails.appendChild(price);
        indiDetails.appendChild(addButton);
        indiDiv.appendChild(img);
        indiDiv.appendChild(indiDetails);

        items.appendChild(indiDiv);
    });
});