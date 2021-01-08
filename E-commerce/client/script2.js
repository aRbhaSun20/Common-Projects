const socket = io("localhost:4000");

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
