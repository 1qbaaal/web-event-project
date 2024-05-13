/*
  Warnings:

  - You are about to drop the column `description` on the `promotions` table. All the data in the column will be lost.
  - Added the required column `codeVoucher` to the `promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalVoucher` to the `promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `promotions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `promotions` DROP COLUMN `description`,
    ADD COLUMN `codeVoucher` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `totalVoucher` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
