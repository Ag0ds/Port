-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `permissao` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER';
