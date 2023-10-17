/*
  Warnings:

  - You are about to drop the `Plants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plants" DROP CONSTRAINT "Plants_taxonomyId_fkey";

-- DropForeignKey
ALTER TABLE "_BlightsToPlants" DROP CONSTRAINT "_BlightsToPlants_B_fkey";

-- DropForeignKey
ALTER TABLE "_PestsToPlants" DROP CONSTRAINT "_PestsToPlants_B_fkey";

-- DropTable
DROP TABLE "Plants";

-- CreateTable
CREATE TABLE "plants" (
    "id" TEXT NOT NULL,
    "common_name" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "synonyms" TEXT[],
    "description" TEXT,
    "min_h" INTEGER,
    "max_h" INTEGER,
    "min_ph" DOUBLE PRECISION,
    "max_ph" DOUBLE PRECISION,
    "min_temp" INTEGER,
    "max_temp" INTEGER,
    "water" "Level" NOT NULL DEFAULT 'M',
    "habit" "Habit",
    "wikipedia" TEXT,
    "britannica" TEXT,
    "img" TEXT,
    "imgs" TEXT[],
    "taxonomyId" TEXT NOT NULL,

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plants_scientific_name_key" ON "plants"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "plants_taxonomyId_key" ON "plants"("taxonomyId");

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_taxonomyId_fkey" FOREIGN KEY ("taxonomyId") REFERENCES "Taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PestsToPlants" ADD CONSTRAINT "_PestsToPlants_B_fkey" FOREIGN KEY ("B") REFERENCES "plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlightsToPlants" ADD CONSTRAINT "_BlightsToPlants_B_fkey" FOREIGN KEY ("B") REFERENCES "plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
