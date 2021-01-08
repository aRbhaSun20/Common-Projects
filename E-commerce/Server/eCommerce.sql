create database eCommerce;
use eCommerce;
create table registration (
  userId int(50) auto_increment primary key,
  fullName varchar(50),
  email varchar(50),
  password varchar(50),
  phone varchar(15),
  address varchar(255),
  pincode varchar(50)
);
create table login(
  loginId int(50) auto_increment primary key,
  userName varchar(100) not null,
  password varchar(100) not null
);
create table productDetails(
  proId int(50) auto_increment primary key,
  proName varchar(255) default 'null',
  proDetail varchar(255) default 'null',
  proPrice varchar(50) default 'null',
  proPath varchar(100) default 'null'
);