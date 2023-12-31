//외래키는 나중에 적용예정 참고!!!

create database finalproject;

-- 2023-07-11
create table user(
user_num int auto_increment,
user_email varchar(100) not null,
user_pw varchar(100) not null,
user_name varchar(100) not null,
user_phone varchar(100) not null,
user_reg_date datetime default now(),
user_auth tinyint(1),
primary key(user_num));

create table master(
master_num  int auto_increment,
master_email varchar(100) not null,
master_pw varchar(100) not null,
master_name varchar(100) not null,
master_phone varchar(100) not null,
master_reg_date datetime default now(),
master_auth tinyint(1),
up_category_code varchar(8),
master_category_code varchar(8),
master_purpose varchar(100),
master_progress varchar(100),
master_agegroup varchar(100),
master_gender varchar(50),
master_day varchar(100),
master_time varchar(100),
master_desireregion varchar(100),
primary key(master_num));

create table estimate(
estimate_num int auto_increment,
estimate_purpose varchar(100),
estimate_progress varchar(100),
estimate_agegroup varchar(50),
estimate_ugender varchar(20),
estimate_mgender varchar(20),
estimate_day varchar(100),
estimate_time varchar(100),
estimate_desireregion varchar(100),
estimate_user_num int,
estimate_up_category_code varchar(8),
estimate_category_code varchar(8),
primary key(estimate_num));

create table upcategory(
up_category_num int auto_increment,
up_category_code varchar(8),
up_category_name varchar(100),
primary key(up_category_num));

create table category(
category_num int auto_increment,
category_code varchar(8),
category_name varchar(100),
primary key(category_num));
