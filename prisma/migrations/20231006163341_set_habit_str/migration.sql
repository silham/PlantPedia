/*
  Warnings:

  - The `habit` column on the `Plants` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Plants" DROP COLUMN "habit",
ADD COLUMN     "habit" TEXT;

-- DropEnum
DROP TYPE "Habit";
