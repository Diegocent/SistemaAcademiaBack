-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: sistemaacademia
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sa_alumno`
--



DROP TABLE IF EXISTS `sa_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sa_alumno` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cantidad_materias` int DEFAULT NULL,
  `cuota_anual` int DEFAULT NULL,
  `derecho_examen` int DEFAULT NULL,
  `vestuario` int DEFAULT NULL,
  `id_persona` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_persona` (`id_persona`),
  CONSTRAINT `sa_alumno_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `sa_persona` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sa_alumno`
--

LOCK TABLES `sa_alumno` WRITE;
/*!40000 ALTER TABLE `sa_alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `sa_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sa_concepto_pagos`
--

DROP TABLE IF EXISTS `sa_concepto_pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sa_concepto_pagos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concepto` varchar(20) DEFAULT NULL,
  `monto` int DEFAULT NULL,
  `id_pagos` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pagos` (`id_pagos`),
  CONSTRAINT `sa_concepto_pagos_ibfk_1` FOREIGN KEY (`id_pagos`) REFERENCES `sa_pagos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sa_concepto_pagos`
--

LOCK TABLES `sa_concepto_pagos` WRITE;
/*!40000 ALTER TABLE `sa_concepto_pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `sa_concepto_pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sa_pagos`
--

DROP TABLE IF EXISTS `sa_pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sa_pagos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `monto_total` int DEFAULT NULL,
  `id_alumno` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_alumno` (`id_alumno`),
  CONSTRAINT `sa_pagos_ibfk_1` FOREIGN KEY (`id_alumno`) REFERENCES `sa_alumno` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sa_pagos`
--

LOCK TABLES `sa_pagos` WRITE;
/*!40000 ALTER TABLE `sa_pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `sa_pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sa_parametricos`
--

DROP TABLE IF EXISTS `sa_parametricos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sa_parametricos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) DEFAULT NULL,
  `monto` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sa_parametricos`
--

LOCK TABLES `sa_parametricos` WRITE;
/*!40000 ALTER TABLE `sa_parametricos` DISABLE KEYS */;
/*!40000 ALTER TABLE `sa_parametricos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sa_persona`
--

DROP TABLE IF EXISTS `sa_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sa_persona` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `documento` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sa_persona`
--

LOCK TABLES `sa_persona` WRITE;
/*!40000 ALTER TABLE `sa_persona` DISABLE KEYS */;
/*!40000 ALTER TABLE `sa_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sa_usuario`
--

DROP TABLE IF EXISTS `sa_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sa_usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_persona` int DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `contraseña` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_persona` (`id_persona`),
  CONSTRAINT `sa_usuario_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `sa_persona` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sa_usuario`
--

LOCK TABLES `sa_usuario` WRITE;
/*!40000 ALTER TABLE `sa_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `sa_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sistemaacademia'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-08 23:09:33
