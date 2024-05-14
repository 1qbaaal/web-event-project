/*
  Warnings:

  - You are about to alter the column `sheduleAt` on the `events` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `refferals` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[referralId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventId` to the `promotions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventid` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `sheduleAt` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `promotions` ADD COLUMN `eventId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `reviews` ADD COLUMN `eventId` INTEGER NULL,
    ADD COLUMN `userUid` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tickets` ADD COLUMN `eventid` INTEGER NOT NULL,
    ADD COLUMN `userUid` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `referralId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `refferals`;

-- CreateTable
CREATE TABLE `referrals` (
    `uid` VARCHAR(191) NOT NULL,
    `referralCode` VARCHAR(191) NOT NULL,
    `referralUserReward` INTEGER NOT NULL DEFAULT 10000,
    `referredUserReward` INTEGER NOT NULL DEFAULT 10,
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
ALTER TABLE `events` ADD CONSTRAINT `events_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_eventid_fkey` FOREIGN KEY (`eventid`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `users`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `users`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `promotions` ADD CONSTRAINT `promotions_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
