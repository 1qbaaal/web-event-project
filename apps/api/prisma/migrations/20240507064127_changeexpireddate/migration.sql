/*
  Warnings:

  - You are about to alter the column `expiredDate` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `expiredDate` DATETIME(3) NULL;
