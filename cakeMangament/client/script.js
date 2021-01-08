const socket = io("localhost:4000");
let imageSection = document.getElementById('images');
let demoDiv = document.createElement("h3");
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

function handleClick() {
    socket.emit('registration', registration);
}

function handleLogin() {
    socket.emit('login', login);
}

function handleChange(id, val) {
    switch (id) {
        case "fullName":
            registration.fullname = val;
            break;
        case "email":
            registration.email = val;
            break;
        case "password":
            registration.pass = val;
            break;
        case "phone":
            registration.phone = val;
            break;
        case "address":
            registration.address = val;
            break;
        case "pin":
            registration.pin = val;
            break;
        case "Username":
            login.user = val;
            break;
        case "Userpass":
            login.pass = val;
            break;
    }
}



socket.on("cakeData", (datas) => {
    datas.map((data) => {
        let indiImage = document.createElement('div');
        let img = document.createElement('img')
        img.alt = "img";
        let entityName = document.createElement("h2");
        // console.log(data)
        entityName.innerHTML = data.cakeName;
        img.src = data.cakePath;
        indiImage.appendChild(img);
        indiImage.appendChild(entityName);
        demoDiv.appendChild(indiImage);
    });
});
imageSection.appendChild(demoDiv)