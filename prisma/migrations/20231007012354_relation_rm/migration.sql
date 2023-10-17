/*
  Warnings:

  - You are about to drop the column `blightsId` on the `Search` table. All the data in the column will be lost.
  - You are about to drop the column `pestisidesId` on the `Search` table. All the data in the column will be lost.
  - You are about to drop the column `pestsId` on the `Search` table. All the data in the column will be lost.
  - You are about to drop the column `plantsId` on the `Search` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Search" DROP CONSTRAINT "Search_blightsId_fkey";

-- DropForeignKey
ALTER TABLE "Search" DROP CONSTRAINT "Search_pestisidesId_fkey";

-- DropForeignKey
ALTER TABLE "Search" DROP CONSTRAINT "Search_pestsId_fkey";

-- DropForeignKey
ALTER TABLE "Search" DROP CONSTRAINT "Search_plantsId_fkey";

-- AlterTable
ALTER TABLE "Search" DROP COLUMN "blightsId",
DROP COLUMN "pestisidesId",
DROP COLUMN "pestsId",
DROP COLUMN "plantsId";
