/*
  Warnings:

  - You are about to alter the column `sheduleAt` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `typeEvent` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalTicket` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `typeEvent` VARCHAR(191) NOT NULL,
    MODIFY `sheduleAt` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `tickets` ADD COLUMN `totalTicket` INTEGER NOT NULL;
