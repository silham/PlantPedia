/*
  Warnings:

  - The `viewsId` column on the `Plants` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Views` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Views` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Plants" DROP CONSTRAINT "Plants_viewsId_fkey";

-- AlterTable
ALTER TABLE "Plants" DROP COLUMN "viewsId",
ADD COLUMN     "viewsId" INTEGER;

-- AlterTable
ALTER TABLE "Views" DROP CONSTRAINT "Views_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Views_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_viewsId_fkey" FOREIGN KEY ("viewsId") REFERENCES "Views"("id") ON DELETE SET NULL ON UPDATE CASCADE;
