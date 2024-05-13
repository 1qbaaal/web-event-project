/*
  Warnings:

  - You are about to drop the column `location` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `typeEvent` on the `events` table. All the data in the column will be lost.
  - Added the required column `eventTypeId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `location`,
    DROP COLUMN `typeEvent`,
    ADD COLUMN `eventTypeId` INTEGER NOT NULL,
    ADD COLUMN `locationId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `eventlocations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `zip` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eventtypes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `eventlocations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_eventTypeId_fkey` FOREIGN KEY (`eventTypeId`) REFERENCES `eventtypes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
