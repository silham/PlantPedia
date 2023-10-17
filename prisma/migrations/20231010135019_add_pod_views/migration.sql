/*
  Warnings:

  - You are about to drop the column `views` on the `Search` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Plants" ADD COLUMN     "viewsId" TEXT;

-- AlterTable
ALTER TABLE "Search" DROP COLUMN "views";

-- CreateTable
CREATE TABLE "PlantOfDay" (
    "id" TEXT NOT NULL,
    "plantsId" TEXT NOT NULL,

    CONSTRAINT "PlantOfDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Views" (
    "id" TEXT NOT NULL,
    "time" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlantOfDay_plantsId_key" ON "PlantOfDay"("plantsId");

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_viewsId_fkey" FOREIGN KEY ("viewsId") REFERENCES "Views"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantOfDay" ADD CONSTRAINT "PlantOfDay_plantsId_fkey" FOREIGN KEY ("plantsId") REFERENCES "Plants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
