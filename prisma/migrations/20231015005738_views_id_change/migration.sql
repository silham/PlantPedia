/*
  Warnings:

  - The primary key for the `Views` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `time` on table `Views` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Views" DROP CONSTRAINT "Views_pkey",
ALTER COLUMN "time" SET NOT NULL,
ADD CONSTRAINT "Views_pkey" PRIMARY KEY ("id", "time");
