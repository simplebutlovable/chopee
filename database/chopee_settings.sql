/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 8.0.15 : Database - chopee_settings
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`chopee_settings` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `chopee_settings`;

/*Table structure for table `chopee_address` */

DROP TABLE IF EXISTS `chopee_address`;

CREATE TABLE `chopee_address` (
  `address_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_code` char(10) NOT NULL,
  `provice_code` char(10) NOT NULL,
  `town_code` char(10) NOT NULL,
  `brgy_code` char(10) NOT NULL,
  `street` varchar(50) NOT NULL,
  `default_address` int(11) NOT NULL DEFAULT '1' COMMENT '0 = not default; 1 = default',
  PRIMARY KEY (`address_id`),
  KEY `province_name` (`provice_code`),
  KEY `town_name` (`town_code`),
  KEY `barangay_name` (`brgy_code`),
  CONSTRAINT `barangay_name` FOREIGN KEY (`brgy_code`) REFERENCES `address_list_ph`.`refbrgy` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `province_name` FOREIGN KEY (`provice_code`) REFERENCES `address_list_ph`.`refprovince` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `town_name` FOREIGN KEY (`town_code`) REFERENCES `address_list_ph`.`refcitymun` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Table structure for table `profile_pictures` */

DROP TABLE IF EXISTS `profile_pictures`;

CREATE TABLE `profile_pictures` (
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_pic_sm` varchar(5000) NOT NULL,
  `profile_pc_md` char(100) NOT NULL,
  `profile_uploaded` date NOT NULL,
  `profile_updated` date DEFAULT NULL,
  `cover_pic_sm` varchar(5000) DEFAULT NULL,
  `cover_md` char(100) DEFAULT NULL,
  `cover_uploaded` date NOT NULL,
  `cover_updated` date DEFAULT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
