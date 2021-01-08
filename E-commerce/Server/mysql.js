require("dotenv").config();

const port = process.env.PORT || 4000;

let mysql = require("mysql");

const io = require("socket.io").listen(port).sockets;

io.on("connection", (socket) => {
	// db connections
	const eCommerce = mysql.createConnection({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
	});
	console.log("connected")

	let cakeData = `select * from productDetails;`;
	eCommerce.query(cakeData, (err,res) => {
		if (err) throw err;
		socket.emit("eCommerce", res);
	});
	

	socket.on("registration", (data) => {
		let insertUser = `insert into registration (fullName,email,password,phone,address,pincode) values ("${data.fullname}","${data.email}","${data.pass}","${data.phone}","${data.address}", "${data.pin}");`;
		eCommerce.query(insertUser, (err) => {
			if (err) throw err;
		})
	}) 
	socket.on("login", (data) => {
		let loginUser = `insert into login (userName,password) values ("${data.user}","${data.pass}");`;
		eCommerce.query(loginUser, (err) => {
			if (err) throw err;
		})
	})
	// disconnection of user
	socket.on("disconnect", () => {
		console.log("Client disconnected");
		eCommerce.end();
		console.log("database disconnected");
	});
});