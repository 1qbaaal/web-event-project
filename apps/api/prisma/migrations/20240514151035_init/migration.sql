/*
  Warnings:

  - You are about to drop the column `category` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `sheduleAt` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `promotions` table. All the data in the column will be lost.
  - The primary key for the `tickets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `tickets` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `tickets` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(10,2)`.
  - You are about to drop the `refferals` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[referralId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endDate` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventCategoryId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventTypeId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locationId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codeVoucher` to the `promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalVoucher` to the `promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalTicket` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `category`,
    DROP COLUMN `location`,
    DROP COLUMN `sheduleAt`,
    ADD COLUMN `endDate` DATE NOT NULL,
    ADD COLUMN `endTime` TIME NOT NULL,
    ADD COLUMN `eventCategoryId` INTEGER NOT NULL,
    ADD COLUMN `eventTypeId` INTEGER NOT NULL,
    ADD COLUMN `locationId` INTEGER NOT NULL,
    ADD COLUMN `startDate` DATE NOT NULL,
    ADD COLUMN `startTime` TIME NOT NULL;

-- AlterTable
ALTER TABLE `promotions` DROP COLUMN `description`,
    ADD COLUMN `codeVoucher` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `eventId` INTEGER NOT NULL,
    ADD COLUMN `totalVoucher` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `reviews` ADD COLUMN `eventId` INTEGER NULL,
    ADD COLUMN `userUid` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tickets` DROP PRIMARY KEY,
    DROP COLUMN `uid`,
    ADD COLUMN `eventId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `totalTicket` INTEGER NOT NULL,
    MODIFY `price` DECIMAL(10, 2) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `expiredDate` DATETIME(3) NULL,
    ADD COLUMN `referralId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `refferals`;

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

-- CreateTable
CREATE TABLE `eventImages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `eventImages_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `eventcategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `referrals` (
    `uid` VARCHAR(191) NOT NULL,
    `referralCode` VARCHAR(191) NOT NULL,
    `referralUserReward` INTEGER NOT NULL DEFAULT 10000,
    `referredUserReward` INTEGER NOT NULL DEFAULT 10,
    `points` INTEGER NULL DEFAULT 0,
    `expiredDate` DATE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_referralId_key` ON `users`(`referralId`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_referralId_fkey` FOREIGN KEY (`referralId`) REFERENCES `referrals`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `eventlocations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_eventTypeId_fkey` FOREIGN KEY (`eventTypeId`) REFERENCES `eventtypes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_eventCategoryId_fkey` FOREIGN KEY (`eventCategoryId`) REFERENCES `eventcategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `eventImages` ADD CONSTRAINT `eventImages_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `users`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `promotions` ADD CONSTRAINT `promotions_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
