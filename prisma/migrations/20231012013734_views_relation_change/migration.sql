/*
  Warnings:

  - You are about to drop the column `viewsId` on the `Plants` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plants" DROP CONSTRAINT "Plants_viewsId_fkey";

-- AlterTable
ALTER TABLE "Plants" DROP COLUMN "viewsId";
