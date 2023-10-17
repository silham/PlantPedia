/*
  Warnings:

  - You are about to drop the `Blights` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pestisides` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Taxonomy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BlightsToPestisides` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BlightsToPlants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PestisidesToPests` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PestsToPlants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Blights" DROP CONSTRAINT "Blights_taxonomyId_fkey";

-- DropForeignKey
ALTER TABLE "Pests" DROP CONSTRAINT "Pests_taxonomyId_fkey";

-- DropForeignKey
ALTER TABLE "_BlightsToPestisides" DROP CONSTRAINT "_BlightsToPestisides_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlightsToPestisides" DROP CONSTRAINT "_BlightsToPestisides_B_fkey";

-- DropForeignKey
ALTER TABLE "_BlightsToPlants" DROP CONSTRAINT "_BlightsToPlants_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlightsToPlants" DROP CONSTRAINT "_BlightsToPlants_B_fkey";

-- DropForeignKey
ALTER TABLE "_PestisidesToPests" DROP CONSTRAINT "_PestisidesToPests_A_fkey";

-- DropForeignKey
ALTER TABLE "_PestisidesToPests" DROP CONSTRAINT "_PestisidesToPests_B_fkey";

-- DropForeignKey
ALTER TABLE "_PestsToPlants" DROP CONSTRAINT "_PestsToPlants_A_fkey";

-- DropForeignKey
ALTER TABLE "_PestsToPlants" DROP CONSTRAINT "_PestsToPlants_B_fkey";

-- DropForeignKey
ALTER TABLE "plants" DROP CONSTRAINT "plants_taxonomyId_fkey";

-- DropTable
DROP TABLE "Blights";

-- DropTable
DROP TABLE "Pestisides";

-- DropTable
DROP TABLE "Pests";

-- DropTable
DROP TABLE "Taxonomy";

-- DropTable
DROP TABLE "_BlightsToPestisides";

-- DropTable
DROP TABLE "_BlightsToPlants";

-- DropTable
DROP TABLE "_PestisidesToPests";

-- DropTable
DROP TABLE "_PestsToPlants";

-- DropTable
DROP TABLE "plant";

-- CreateTable
CREATE TABLE "pests" (
    "id" TEXT NOT NULL,
    "common_name" TEXT NOT NULL,
    "synonyms" TEXT[],
    "scientific_name" TEXT NOT NULL,
    "description" TEXT,
    "wikipedia" TEXT,
    "britannica" TEXT,
    "img" TEXT,
    "imgs" TEXT[],
    "taxonomyId" TEXT NOT NULL,

    CONSTRAINT "pests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blights" (
    "id" TEXT NOT NULL,
    "common_name" TEXT NOT NULL,
    "synonyms" TEXT[],
    "scientific_name" TEXT NOT NULL,
    "description" TEXT,
    "wikipedia" TEXT,
    "britannica" TEXT,
    "img" TEXT,
    "imgs" TEXT[],
    "taxonomyId" TEXT NOT NULL,

    CONSTRAINT "blights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pestisides" (
    "id" TEXT NOT NULL,
    "common_name" TEXT,
    "synonyms" TEXT[],
    "scientific_name" TEXT,
    "description" TEXT,
    "wikipedia" TEXT,
    "britannica" TEXT,
    "img" TEXT,

    CONSTRAINT "pestisides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "taxonomy" (
    "id" TEXT NOT NULL,
    "kingdom" TEXT,
    "phylum" TEXT,
    "class" TEXT,
    "order" TEXT,
    "family" TEXT,
    "genus" TEXT,
    "species" TEXT,

    CONSTRAINT "taxonomy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_pestsToplants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_blightsToplants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_blightsTopestisides" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_pestisidesTopests" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "pests_scientific_name_key" ON "pests"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "pests_taxonomyId_key" ON "pests"("taxonomyId");

-- CreateIndex
CREATE UNIQUE INDEX "blights_scientific_name_key" ON "blights"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "blights_taxonomyId_key" ON "blights"("taxonomyId");

-- CreateIndex
CREATE UNIQUE INDEX "pestisides_scientific_name_key" ON "pestisides"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "_pestsToplants_AB_unique" ON "_pestsToplants"("A", "B");

-- CreateIndex
CREATE INDEX "_pestsToplants_B_index" ON "_pestsToplants"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blightsToplants_AB_unique" ON "_blightsToplants"("A", "B");

-- CreateIndex
CREATE INDEX "_blightsToplants_B_index" ON "_blightsToplants"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_blightsTopestisides_AB_unique" ON "_blightsTopestisides"("A", "B");

-- CreateIndex
CREATE INDEX "_blightsTopestisides_B_index" ON "_blightsTopestisides"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_pestisidesTopests_AB_unique" ON "_pestisidesTopests"("A", "B");

-- CreateIndex
CREATE INDEX "_pestisidesTopests_B_index" ON "_pestisidesTopests"("B");

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_taxonomyId_fkey" FOREIGN KEY ("taxonomyId") REFERENCES "taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pests" ADD CONSTRAINT "pests_taxonomyId_fkey" FOREIGN KEY ("taxonomyId") REFERENCES "taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blights" ADD CONSTRAINT "blights_taxonomyId_fkey" FOREIGN KEY ("taxonomyId") REFERENCES "taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pestsToplants" ADD CONSTRAINT "_pestsToplants_A_fkey" FOREIGN KEY ("A") REFERENCES "pests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pestsToplants" ADD CONSTRAINT "_pestsToplants_B_fkey" FOREIGN KEY ("B") REFERENCES "plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blightsToplants" ADD CONSTRAINT "_blightsToplants_A_fkey" FOREIGN KEY ("A") REFERENCES "blights"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blightsToplants" ADD CONSTRAINT "_blightsToplants_B_fkey" FOREIGN KEY ("B") REFERENCES "plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blightsTopestisides" ADD CONSTRAINT "_blightsTopestisides_A_fkey" FOREIGN KEY ("A") REFERENCES "blights"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_blightsTopestisides" ADD CONSTRAINT "_blightsTopestisides_B_fkey" FOREIGN KEY ("B") REFERENCES "pestisides"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pestisidesTopests" ADD CONSTRAINT "_pestisidesTopests_A_fkey" FOREIGN KEY ("A") REFERENCES "pestisides"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pestisidesTopests" ADD CONSTRAINT "_pestisidesTopests_B_fkey" FOREIGN KEY ("B") REFERENCES "pests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
