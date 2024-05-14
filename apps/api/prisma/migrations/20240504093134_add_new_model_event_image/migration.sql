/*
  Warnings:

  - You are about to drop the column `eventid` on the `tickets` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `tickets_eventid_fkey`;

-- AlterTable
ALTER TABLE `tickets` DROP COLUMN `eventid`,
    ADD COLUMN `eventId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `eventImages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `eventImages_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `eventImages` ADD CONSTRAINT `eventImages_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
