create database cakeManagement;
use cakeManagement;
create table registration (
  userId int(50) auto_increment primary key,
  fullName varchar(50),
  email varchar(50),
  password varchar(50),
  phone varchar(15),
  address varchar(255),
  pincode varchar(50)
);
create table chocolateCake (
  cakeId int(20) auto_increment primary key,
  cakeName varchar(100) not null,
  cakePath varchar(255) not null
);
create table login(
  loginId int(50) auto_increment primary key,
  userName varchar(100) not null,
  password varchar(100) not null
);