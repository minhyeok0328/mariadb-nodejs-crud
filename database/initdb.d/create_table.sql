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