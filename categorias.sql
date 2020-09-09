/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100413
 Source Host           : localhost:3306
 Source Schema         : categorias

 Target Server Type    : MySQL
 Target Server Version : 100413
 File Encoding         : 65001

 Date: 08/09/2020 22:14:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categoria
-- ----------------------------
DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria`  (
  `COD_CATEGORIA` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `DESCRIPCION` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`COD_CATEGORIA`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categoria
-- ----------------------------
INSERT INTO `categoria` VALUES ('CA-01', 'Carnes');
INSERT INTO `categoria` VALUES ('LA-01', 'Lacteos');
INSERT INTO `categoria` VALUES ('LE-01', 'Legumbres');

-- ----------------------------
-- Table structure for subcategoria
-- ----------------------------
DROP TABLE IF EXISTS `subcategoria`;
CREATE TABLE `subcategoria`  (
  `COD_SUB_CATEGORIA` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `COD_CATEGORIA` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `NOMBRE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DESCRIPCION` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `FECHA_CREACION` date NULL DEFAULT NULL,
  PRIMARY KEY (`COD_SUB_CATEGORIA`) USING BTREE,
  INDEX `FK_COD_CATEGORIA`(`COD_CATEGORIA`) USING BTREE,
  CONSTRAINT `FK_COD_CATEGORIA` FOREIGN KEY (`COD_CATEGORIA`) REFERENCES `categoria` (`COD_CATEGORIA`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subcategoria
-- ----------------------------
INSERT INTO `subcategoria` VALUES ('CA-0101', 'CA-01', 'Carne', 'carne de res', '2020-09-08');
INSERT INTO `subcategoria` VALUES ('CA-0102', 'CA-01', 'Pollo', 'pollito', '2020-09-08');

SET FOREIGN_KEY_CHECKS = 1;
