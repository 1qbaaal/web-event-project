/*
  Warnings:

  - The primary key for the `tickets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `userUid` on the `tickets` table. All the data in the column will be lost.
  - Added the required column `id` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `tickets_userUid_fkey`;

-- AlterTable
ALTER TABLE `tickets` DROP PRIMARY KEY,
    DROP COLUMN `uid`,
    DROP COLUMN `userUid`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `userId` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`uid`) ON DELETE SET NULL ON UPDATE CASCADE;
