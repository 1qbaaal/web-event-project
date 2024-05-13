/*
  Warnings:

  - You are about to alter the column `points` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `expiredDate` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `expiredDate` VARCHAR(191) NOT NULL,
    MODIFY `points` INTEGER NULL;
