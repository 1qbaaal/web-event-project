/*
  Warnings:

  - You are about to alter the column `sheduleAt` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `price` on the `tickets` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `events` MODIFY `sheduleAt` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `tickets` MODIFY `price` DECIMAL(10, 2) NOT NULL;
