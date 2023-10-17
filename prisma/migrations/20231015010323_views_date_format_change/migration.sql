/*
  Warnings:

  - The primary key for the `Views` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Views" DROP CONSTRAINT "Views_pkey",
ALTER COLUMN "time" SET DATA TYPE DATE,
ADD CONSTRAINT "Views_pkey" PRIMARY KEY ("id", "time");
