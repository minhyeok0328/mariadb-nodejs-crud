SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS crud;
SET character_set_client = utf8mb4 ;

CREATE TABLE `member` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `registDate` datetime DEFAULT NULL,
  `loginDate` datetime DEFAULT NULL,
  PRIMARY KEY (`idx`)
);

CREATE TABLE `board` (
	`idx` int(11) NOT NULL AUTO_INCREMENT,
	`writer` varchar(20) NOT NULL,
	`userIdx` int(11) NOT NULL,
	`subject` varchar(100) NOT NULL,
	`content` TEXT NOT NULL,
	`registDate` datetime NOT NULL,
	`updateDate` datetime DEFAULT NULL,
	PRIMARY KEY (`idx`)
);
