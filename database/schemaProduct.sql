CREATE DATABASE 'api_express'

CREATE TABLE IF NOT EXISTS `api_express`.`product` (
  `codigo` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `preço` VARCHAR(200) NOT NULL,
  `` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3