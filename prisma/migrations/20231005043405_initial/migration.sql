-- CreateEnum
CREATE TYPE "Level" AS ENUM ('H', 'M', 'L');

-- CreateEnum
CREATE TYPE "Habit" AS ENUM ('Forb_herb', 'Graminoid', 'Lichenous', 'Nonvascular', 'Shrub', 'Subshrub', 'Tree', 'Vine');

-- CreateTable
CREATE TABLE "Plants" (
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

    CONSTRAINT "Plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pests" (
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

    CONSTRAINT "Pests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blights" (
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

    CONSTRAINT "Blights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pestisides" (
    "id" TEXT NOT NULL,
    "common_name" TEXT,
    "synonyms" TEXT[],
    "scientific_name" TEXT,
    "description" TEXT,
    "wikipedia" TEXT,
    "britannica" TEXT,
    "img" TEXT,

    CONSTRAINT "Pestisides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taxonomy" (
    "id" TEXT NOT NULL,
    "kingdom" TEXT,
    "phylum" TEXT,
    "class" TEXT,
    "order" TEXT,
    "family" TEXT,
    "genus" TEXT,
    "species" TEXT,

    CONSTRAINT "Taxonomy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PestsToPlants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BlightsToPlants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BlightsToPestisides" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PestisidesToPests" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Plants_scientific_name_key" ON "Plants"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "Plants_taxonomyId_key" ON "Plants"("taxonomyId");

-- CreateIndex
CREATE UNIQUE INDEX "Pests_scientific_name_key" ON "Pests"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "Pests_taxonomyId_key" ON "Pests"("taxonomyId");

-- CreateIndex
CREATE UNIQUE INDEX "Blights_scientific_name_key" ON "Blights"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "Blights_taxonomyId_key" ON "Blights"("taxonomyId");

-- CreateIndex
CREATE UNIQUE INDEX "Pestisides_scientific_name_key" ON "Pestisides"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "_PestsToPlants_AB_unique" ON "_PestsToPlants"("A", "B");

-- CreateIndex
CREATE INDEX "_PestsToPlants_B_index" ON "_PestsToPlants"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BlightsToPlants_AB_unique" ON "_BlightsToPlants"("A", "B");

-- CreateIndex
CREATE INDEX "_BlightsToPlants_B_index" ON "_BlightsToPlants"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BlightsToPestisides_AB_unique" ON "_BlightsToPestisides"("A", "B");

-- CreateIndex
CREATE INDEX "_BlightsToPestisides_B_index" ON "_BlightsToPestisides"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PestisidesToPests_AB_unique" ON "_PestisidesToPests"("A", "B");

-- CreateIndex
CREATE INDEX "_PestisidesToPests_B_index" ON "_PestisidesToPests"("B");

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_taxonomyId_fkey" FOREIGN KEY ("taxonomyId") REFERENCES "Taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pests" ADD CONSTRAINT "Pests_taxonomyId_fkey" FOREIGN KEY ("taxonomyId") REFERENCES "Taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blights" ADD CONSTRAINT "Blights_taxonomyId_fkey" FOREIGN KEY ("taxonomyId") REFERENCES "Taxonomy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PestsToPlants" ADD CONSTRAINT "_PestsToPlants_A_fkey" FOREIGN KEY ("A") REFERENCES "Pests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PestsToPlants" ADD CONSTRAINT "_PestsToPlants_B_fkey" FOREIGN KEY ("B") REFERENCES "Plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlightsToPlants" ADD CONSTRAINT "_BlightsToPlants_A_fkey" FOREIGN KEY ("A") REFERENCES "Blights"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlightsToPlants" ADD CONSTRAINT "_BlightsToPlants_B_fkey" FOREIGN KEY ("B") REFERENCES "Plants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlightsToPestisides" ADD CONSTRAINT "_BlightsToPestisides_A_fkey" FOREIGN KEY ("A") REFERENCES "Blights"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlightsToPestisides" ADD CONSTRAINT "_BlightsToPestisides_B_fkey" FOREIGN KEY ("B") REFERENCES "Pestisides"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PestisidesToPests" ADD CONSTRAINT "_PestisidesToPests_A_fkey" FOREIGN KEY ("A") REFERENCES "Pestisides"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PestisidesToPests" ADD CONSTRAINT "_PestisidesToPests_B_fkey" FOREIGN KEY ("B") REFERENCES "Pests"("id") ON DELETE CASCADE ON UPDATE CASCADE;
