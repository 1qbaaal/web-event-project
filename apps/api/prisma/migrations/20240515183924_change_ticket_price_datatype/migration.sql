/*
  Warnings:

  - You are about to alter the column `price` on the `tickets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Int`.

*/
-- AlterTable
ALTER TABLE `tickets` MODIFY `price` INTEGER NOT NULL;
