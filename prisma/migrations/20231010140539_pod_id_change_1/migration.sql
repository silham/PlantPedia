/*
  Warnings:

  - The primary key for the `PlantOfDay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Views` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `PlantOfDay` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Plants" DROP CONSTRAINT "Plants_viewsId_fkey";

-- AlterTable
ALTER TABLE "PlantOfDay" DROP CONSTRAINT "PlantOfDay_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "PlantOfDay_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Plants" ALTER COLUMN "viewsId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Views" DROP CONSTRAINT "Views_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Views_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_viewsId_fkey" FOREIGN KEY ("viewsId") REFERENCES "Views"("id") ON DELETE SET NULL ON UPDATE CASCADE;
