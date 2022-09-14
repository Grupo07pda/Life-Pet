
 
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pet` DEFAULT CHARACTER SET utf8 ;
USE `pet` ;

-- -----------------------------------------------------
-- Table `pet`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pet`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `pet`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(30) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pet`.`Agendamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pet`.`Agendamento` ;

CREATE TABLE IF NOT EXISTS `pet`.`Agendamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `servico` VARCHAR(45) NOT NULL,
  `data` DATE NOT NULL,
  `nome_animal` VARCHAR(45) NOT NULL,
  `porte` VARCHAR(45) NOT NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Usuario_id`)
 )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pet`.`Servico`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pet`.`Servico` ;

CREATE TABLE IF NOT EXISTS `pet`.`Servico` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `funcionario` VARCHAR(45) NOT NULL,
  `servico` VARCHAR(45) NOT NULL,
  `valor` VARCHAR(45) NOT NULL,
  `tempo` VARCHAR(45) NOT NULL,
  `Agendamento_id` INT NOT NULL,
  `Agendamento_Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Agendamento_id`, `Agendamento_Usuario_id`)
  )
 
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


