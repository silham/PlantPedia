-- CreateEnum
CREATE TYPE "Type" AS ENUM ('PLANTS', 'PESTS', 'BLIGHTS');

-- AlterTable
ALTER TABLE "Plants" ALTER COLUMN "water" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Search" (
    "id" TEXT NOT NULL,
    "common_name" TEXT,
    "scientific_name" TEXT,
    "decription" TEXT,
    "img" TEXT,
    "type" "Type",
    "plantsId" TEXT,
    "pestsId" TEXT,
    "blightsId" TEXT,
    "pestisidesId" TEXT,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Search_scientific_name_key" ON "Search"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "Search_plantsId_key" ON "Search"("plantsId");

-- CreateIndex
CREATE UNIQUE INDEX "Search_pestsId_key" ON "Search"("pestsId");

-- CreateIndex
CREATE UNIQUE INDEX "Search_blightsId_key" ON "Search"("blightsId");

-- CreateIndex
CREATE UNIQUE INDEX "Search_pestisidesId_key" ON "Search"("pestisidesId");

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_plantsId_fkey" FOREIGN KEY ("plantsId") REFERENCES "Plants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_pestsId_fkey" FOREIGN KEY ("pestsId") REFERENCES "Pests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_blightsId_fkey" FOREIGN KEY ("blightsId") REFERENCES "Blights"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_pestisidesId_fkey" FOREIGN KEY ("pestisidesId") REFERENCES "Pestisides"("id") ON DELETE SET NULL ON UPDATE CASCADE;
