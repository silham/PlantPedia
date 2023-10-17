/*
  Warnings:

  - The primary key for the `Views` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `viewId` to the `Views` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Views" DROP CONSTRAINT "Views_pkey",
ADD COLUMN     "viewId" TEXT NOT NULL,
ADD CONSTRAINT "Views_pkey" PRIMARY KEY ("id");
