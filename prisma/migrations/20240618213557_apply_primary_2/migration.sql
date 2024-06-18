/*
  Warnings:

  - The primary key for the `achivement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `achivement` table. All the data in the column will be lost.
  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `admin` table. All the data in the column will be lost.
  - The primary key for the `arcadefeedbacks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `arcadefeedbacks` table. All the data in the column will be lost.
  - The primary key for the `arcademanager` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `arcademanager` table. All the data in the column will be lost.
  - The primary key for the `arcadephone` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `arcadephone` table. All the data in the column will be lost.
  - The primary key for the `arcadephoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `arcadephoto` table. All the data in the column will be lost.
  - The primary key for the `availiability` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `availiability` table. All the data in the column will be lost.
  - The primary key for the `coach` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `coach` table. All the data in the column will be lost.
  - The primary key for the `coachaenrolldetailsforpackage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `coachaenrolldetailsforpackage` table. All the data in the column will be lost.
  - The primary key for the `coachassigndetailsforarcade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `coachassigndetailsforarcade` table. All the data in the column will be lost.
  - The primary key for the `coachbookingdayandtime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `coachbookingdayandtime` table. All the data in the column will be lost.
  - The primary key for the `coachfeedbacks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `coachfeedbacks` table. All the data in the column will be lost.
  - The primary key for the `feedbackcomments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `feedbackcomments` table. All the data in the column will be lost.
  - The primary key for the `packagecancelenrollments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `packagecancelenrollments` table. All the data in the column will be lost.
  - The primary key for the `packagedayandtime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `packagedayandtime` table. All the data in the column will be lost.
  - The primary key for the `packagediscount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `packagediscount` table. All the data in the column will be lost.
  - The primary key for the `packageenrolldetailsforplayer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `packageenrolldetailsforplayer` table. All the data in the column will be lost.
  - The primary key for the `player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `player` table. All the data in the column will be lost.
  - The primary key for the `superadmin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `superadmin` table. All the data in the column will be lost.
  - The primary key for the `userphone` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `userphone` table. All the data in the column will be lost.
  - The primary key for the `userphoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `userphoto` table. All the data in the column will be lost.
  - The primary key for the `zonediscount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `zonediscount` table. All the data in the column will be lost.
  - The primary key for the `zonerejectdateandtime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `zonerejectdateandtime` table. All the data in the column will be lost.
  - The primary key for the `zonerejectdayandtime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `my_row_id` on the `zonerejectdayandtime` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `achivement` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `admin` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `arcade` MODIFY `arcade_email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `arcadefeedbacks` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `arcademanager` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `arcadephone` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `arcadephoto` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `availiability` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `coach` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `coachaenrolldetailsforpackage` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `coachassigndetailsforarcade` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `coachbookingdayandtime` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `coachfeedbacks` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `feedbackcomments` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `packagecancelenrollments` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `packagedayandtime` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `packagediscount` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `packageenrolldetailsforplayer` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `player` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `superadmin` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `userphone` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `userphoto` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `zonediscount` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `zonerejectdateandtime` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;

-- AlterTable
ALTER TABLE `zonerejectdayandtime` DROP PRIMARY KEY,
    DROP COLUMN `my_row_id`;
