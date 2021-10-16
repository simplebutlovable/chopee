/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 8.0.15 : Database - chopee_user
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`chopee_user` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `chopee_user`;

/*Table structure for table `chopee_buyer` */

DROP TABLE IF EXISTS `chopee_buyer`;

CREATE TABLE `chopee_buyer` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(5000) NOT NULL,
  `user_address` int(11) DEFAULT NULL,
  `profile_picture` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `buyer_address` (`user_address`),
  KEY `buyer_profile_pictures` (`profile_picture`),
  CONSTRAINT `buyer_address` FOREIGN KEY (`user_address`) REFERENCES `chopee_settings`.`chopee_address` (`address_id`) ON UPDATE CASCADE,
  CONSTRAINT `buyer_profile_pictures` FOREIGN KEY (`profile_picture`) REFERENCES `chopee_settings`.`profile_pictures` (`profile_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `chopee_seller` */

DROP TABLE IF EXISTS `chopee_seller`;

CREATE TABLE `chopee_seller` (
  `seller_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(100) NOT NULL,
  `seller_address` int(11) NOT NULL,
  `seller_profile_picture` int(11) DEFAULT NULL,
  PRIMARY KEY (`seller_id`),
  KEY `seller_physical_address` (`seller_address`),
  KEY `seller_profile_picture` (`seller_profile_picture`),
  CONSTRAINT `seller_physical_address` FOREIGN KEY (`seller_address`) REFERENCES `chopee_settings`.`chopee_address` (`address_id`) ON UPDATE CASCADE,
  CONSTRAINT `seller_profile_picture` FOREIGN KEY (`seller_profile_picture`) REFERENCES `chopee_settings`.`profile_pictures` (`profile_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
